import { BaseContract } from '@0x/base-contract';
import { BlockParamLiteral, CallData, ContractAbi, TxData, SupportedProvider } from 'ethereum-types';
import { BigNumber } from '@0x/utils';
import { Response } from '../Response';
export declare class IERC20Contract extends BaseContract {
    private _defaultEstimateGasFactor;
    transfer: {
        sendTransactionAsync(_to: string, _value: BigNumber, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<Response>;
        estimateGasAsync(_to: string, _value: BigNumber, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_to: string, _value: BigNumber): string;
        callAsync(_to: string, _value: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
    };
    transferFrom: {
        sendTransactionAsync(_from: string, _to: string, _value: BigNumber, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<Response>;
        estimateGasAsync(_from: string, _to: string, _value: BigNumber, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_from: string, _to: string, _value: BigNumber): string;
        callAsync(_from: string, _to: string, _value: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
    };
    allowance: {
        callAsync(_owner: string, _spender: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
    };
    approve: {
        sendTransactionAsync(_spender: string, _value: BigNumber, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<Response>;
        estimateGasAsync(_spender: string, _value: BigNumber, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_spender: string, _value: BigNumber): string;
        callAsync(_spender: string, _value: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
    };
    increaseApproval: {
        sendTransactionAsync(_spender: string, _addedValue: BigNumber, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<Response>;
        estimateGasAsync(_spender: string, _addedValue: BigNumber, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_spender: string, _addedValue: BigNumber): string;
        callAsync(_spender: string, _addedValue: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
    };
    balanceOf: {
        callAsync(_owner: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
    };
    static deployAsync(bytecode: string, abi: ContractAbi, supportedProvider: SupportedProvider, txDefaults: Partial<TxData>): Promise<IERC20Contract>;
    constructor(abi: ContractAbi, address: string, supportedProvider: SupportedProvider, txDefaults?: Partial<TxData>, defaultEstimateGasFactor?: number);
}
//# sourceMappingURL=ierc20.d.ts.map