import { validateBalanceSufficiency, sameAddress } from './tools';
declare const _default: (config: any) => {
    validateBalanceSufficiency: typeof validateBalanceSufficiency;
    getBlockByNumber: (blockNumber: any, fullTxs?: boolean) => Promise<unknown>;
    getBalance: (address: any) => Promise<unknown>;
    blockNumber: () => Promise<unknown>;
    sameAddress: typeof sameAddress;
    sendTransaction: (unsignedTx: any, signer: any, signerParams: any) => Promise<{
        hash: unknown;
        status: string;
        to: any;
        from: any;
        value: any;
        tknTo: any;
        tknValue: any;
        timestamp: any;
        gasLimit: any;
        gasPrice: any;
    }>;
    buildTransaction: (from: any, to: any, value: any, options: any) => Promise<{
        to: any;
        from: any;
        nonce: unknown;
        value: import("bignumber.js").default;
        gasPrice: any;
        gasLimit: any;
        data: any;
        tknTo: any;
        tknValue: import("bignumber.js").default;
        network: any;
    }>;
    getTransactionsByAddress: (address: any, page: any, size: any, timestamp: any) => Promise<unknown>;
    getTransactionUrlInExplorer: (txHash: any) => string;
    getTransactionStatus: (txHash: any) => Promise<unknown>;
    getAccountTokens: () => Promise<{}>;
    getAccountTokenBalance: (contractAddress: any, address: any) => Promise<unknown>;
    getAccountTokenTransferHistory: (address: any, symbolAddress: any, page: number, size: number, timestamp: any) => Promise<unknown>;
    getTokenDetail: (contractAddress: any) => Promise<unknown>;
    getTokenIconUrl: (tokenSymbol: any, contractAddress: any) => string;
    getTopTokens: (topN?: number) => Promise<unknown>;
    searchTokens: (keyword: any) => Promise<unknown>;
};
export default _default;
