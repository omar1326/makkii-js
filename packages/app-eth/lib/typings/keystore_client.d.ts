/// <reference types="node" />
import { IsingleKeystoreClient, IkeystoreSigner } from "@makkii/makkii-core/src/interfaces/keystore_client";
import { IHardware } from "@makkii/makkii-core/src/interfaces/hardware";
import { LedgerKeypair, Keypair } from "@makkii/makkii-core/src/type/index";
import { EthUnsignedTx } from "./type";
export default class EthKeystoreClient implements IsingleKeystoreClient {
    ledgerSupport: boolean;
    signTransaction: <T extends IkeystoreSigner>(tx: EthUnsignedTx, signer: T, signerParam: any) => Promise<any>;
    generateMnemonic: () => string;
    recoverKeyPairByPrivateKey: (priKey: string, options?: any) => Promise<Keypair>;
    validatePrivateKey: (privateKey: string | Buffer) => never;
    validateAddress: (address: string) => boolean;
    getAccountFromMnemonic: (address_index: number, mnemonic: string) => Promise<{
        private_key: any;
        public_key: any;
        address: string;
        index: any;
    }>;
    getAccountFromHardware: (address_index: number, hardware: IHardware) => Promise<LedgerKeypair>;
}
