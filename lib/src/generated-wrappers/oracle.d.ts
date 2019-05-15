import { BaseContract } from '@0x/base-contract';
import { BlockParamLiteral, CallData, ContractAbi, DecodedLogArgs, TxData, SupportedProvider } from 'ethereum-types';
import { BigNumber } from '@0x/utils';
import { Response } from '../Response';
export declare type OracleEventArgs = OracleNewSymbolEventArgs;
export declare enum OracleEvents {
    NewSymbol = "NewSymbol"
}
export interface OracleNewSymbolEventArgs extends DecodedLogArgs {
    _currency: string;
}
export declare class OracleContract extends BaseContract {
    private _defaultEstimateGasFactor;
    supported: {
        callAsync(index_0: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
    };
    owner: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    transferTo: {
        sendTransactionAsync(_to: string, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<Response>;
        estimateGasAsync(_to: string, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_to: string): string;
        callAsync(_to: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
    };
    currencies: {
        callAsync(index_0: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    VERSION: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
    };
    url: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    getRate: {
        sendTransactionAsync(symbol: string, data: string, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<Response>;
        estimateGasAsync(symbol: string, data: string, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(symbol: string, data: string): string;
        callAsync(symbol: string, data: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<[BigNumber, BigNumber]>;
    };
    addCurrency: {
        sendTransactionAsync(ticker: string, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<Response>;
        estimateGasAsync(ticker: string, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(ticker: string): string;
        callAsync(ticker: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
    };
    encodeCurrency: {
        callAsync(currency: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    decodeCurrency: {
        callAsync(b: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    static deployAsync(bytecode: string, abi: ContractAbi, supportedProvider: SupportedProvider, txDefaults: Partial<TxData>): Promise<OracleContract>;
    constructor(abi: ContractAbi, address: string, supportedProvider: SupportedProvider, txDefaults?: Partial<TxData>, defaultEstimateGasFactor?: number);
}
//# sourceMappingURL=oracle.d.ts.map