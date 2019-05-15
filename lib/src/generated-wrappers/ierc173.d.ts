import { BaseContract } from '@0x/base-contract';
import { BlockParamLiteral, CallData, ContractAbi, DecodedLogArgs, TxData, SupportedProvider } from 'ethereum-types';
import { Response } from '../Response';
export declare type IERC173EventArgs = IERC173OwnershipTransferredEventArgs;
export declare enum IERC173Events {
    OwnershipTransferred = "OwnershipTransferred"
}
export interface IERC173OwnershipTransferredEventArgs extends DecodedLogArgs {
    _previousOwner: string;
    _newOwner: string;
}
export declare class IERC173Contract extends BaseContract {
    private _defaultEstimateGasFactor;
    transferOwnership: {
        sendTransactionAsync(_newOwner: string, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<Response>;
        estimateGasAsync(_newOwner: string, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_newOwner: string): string;
        callAsync(_newOwner: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    static deployAsync(bytecode: string, abi: ContractAbi, supportedProvider: SupportedProvider, txDefaults: Partial<TxData>): Promise<IERC173Contract>;
    constructor(abi: ContractAbi, address: string, supportedProvider: SupportedProvider, txDefaults?: Partial<TxData>, defaultEstimateGasFactor?: number);
}
//# sourceMappingURL=ierc173.d.ts.map