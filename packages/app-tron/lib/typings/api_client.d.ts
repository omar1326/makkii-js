import BigNumber from "bignumber.js";
import { IsingleApiClient } from "@makkii/makkii-core/src/interfaces/api_client";
import { IkeystoreSigner } from "@makkii/makkii-core/src/interfaces/keystore_client";
import { TronUnsignedTx, TronPendingTx, TronTxStatus, TronTransaction } from "./type";
export interface ITronConfig {
    network: "mainnet" | "shasta";
    trongrid_api: string;
    explorer_api?: string;
    explorer?: string;
}
export default class TronApiClient implements IsingleApiClient {
    symbol: string;
    config: ITronConfig;
    private api;
    constructor(config: ITronConfig);
    getNetwork: () => "mainnet" | "shasta";
    updateConfiguration: (config: ITronConfig) => void;
    getBlockByNumber: (blockNumber: string) => never;
    getBlockNumber: () => never;
    getTransactionStatus: (hash: string) => Promise<TronTxStatus>;
    getTransactionExplorerUrl: (hash: string) => any;
    getBalance: (address: string) => Promise<BigNumber>;
    getTransactionsByAddress: (address: string, page: number, size: number) => Promise<Map<string, TronTransaction>>;
    sendTransaction: <T extends IkeystoreSigner>(unsignedTx: TronUnsignedTx, signer: T, signerParams: any) => Promise<TronPendingTx>;
    sameAddress: (address1: string, address2: string) => any;
    buildTransaction: (from: string, to: string, value: BigNumber) => Promise<TronUnsignedTx>;
}
