import { IHardware } from "@makkii/makkii-core/src/interfaces/hardware";
import { EthUnsignedTx } from "../../type";
import { process_unsignedTx } from "../../lib_keystore/transaction";
import Eth from '@ledgerhq/hw-app-eth';

export default class EthLedger implements IHardware {
   
    private hardware: any = {}

    getAccount = async (index: number) => {
        const path = `44'/60'/0'/0/${index}`;
        const { address, publicKey } = await this.hardware.getAddress(path, false);
        return { address, index, publicKey }
    }

    getHardwareStatus =  async () => {
        try{
            await this.getAccount(0);
            return true;
        }catch(e){
            return false;
        }
    }

    signTransaction = async (transaction: EthUnsignedTx, params: {derivationIndex:number}): Promise<string> => {
        const unsigned = process_unsignedTx(transaction);
        const {derivationIndex} = params;
        const path = `44'/60'/0'/0/${derivationIndex}`;
        const res = await this.hardware.signTransaction(path, unsigned.serialize().toString('hex'));
        const sig: any = {};
        sig.r = Buffer.from(res.r, 'hex');
        sig.s = Buffer.from(res.s, 'hex');
        sig.v = parseInt(res.v, 16);
        Object.assign(unsigned, sig);
        const validSig = unsigned.verifySignature();
        if(!validSig){
            throw new Error('sign error: invalid signature')
        }
        return `0x${unsigned.serialize().toString('hex')}`
    }

   
    setLedgerTransport = (transport: any) => {
        this.hardware = new Eth(transport);
        return this;
    }

}