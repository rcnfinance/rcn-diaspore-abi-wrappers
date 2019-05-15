import { BaseContract } from '@0x/base-contract';
import { BlockParamLiteral, CallData, ContractAbi, DecodedLogArgs, TxData, SupportedProvider } from 'ethereum-types';
import { BigNumber } from '@0x/utils';
import { Response } from '../Response';
export declare type ModelEventArgs = ModelCreatedEventArgs | ModelChangedStatusEventArgs | ModelChangedObligationEventArgs | ModelChangedFrequencyEventArgs | ModelChangedDueTimeEventArgs | ModelChangedFinalTimeEventArgs | ModelAddedDebtEventArgs | ModelAddedPaidEventArgs;
export declare enum ModelEvents {
    Created = "Created",
    ChangedStatus = "ChangedStatus",
    ChangedObligation = "ChangedObligation",
    ChangedFrequency = "ChangedFrequency",
    ChangedDueTime = "ChangedDueTime",
    ChangedFinalTime = "ChangedFinalTime",
    AddedDebt = "AddedDebt",
    AddedPaid = "AddedPaid"
}
export interface ModelCreatedEventArgs extends DecodedLogArgs {
    _id: string;
}
export interface ModelChangedStatusEventArgs extends DecodedLogArgs {
    _id: string;
    _timestamp: BigNumber;
    _status: BigNumber;
}
export interface ModelChangedObligationEventArgs extends DecodedLogArgs {
    _id: string;
    _timestamp: BigNumber;
    _debt: BigNumber;
}
export interface ModelChangedFrequencyEventArgs extends DecodedLogArgs {
    _id: string;
    _timestamp: BigNumber;
    _frequency: BigNumber;
}
export interface ModelChangedDueTimeEventArgs extends DecodedLogArgs {
    _id: string;
    _timestamp: BigNumber;
    _status: BigNumber;
}
export interface ModelChangedFinalTimeEventArgs extends DecodedLogArgs {
    _id: string;
    _timestamp: BigNumber;
    _dueTime: BigNumber;
}
export interface ModelAddedDebtEventArgs extends DecodedLogArgs {
    _id: string;
    _amount: BigNumber;
}
export interface ModelAddedPaidEventArgs extends DecodedLogArgs {
    _id: string;
    _paid: BigNumber;
}
export declare class ModelContract extends BaseContract {
    private _defaultEstimateGasFactor;
    supportsInterface: {
        callAsync(interfaceID: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
    };
    STATUS_PAID: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
    };
    STATUS_ONGOING: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
    };
    STATUS_ERROR: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
    };
    modelId: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    descriptor: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    isOperator: {
        callAsync(operator: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
    };
    validate: {
        callAsync(data: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
    };
    getStatus: {
        callAsync(id: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
    };
    getPaid: {
        callAsync(id: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
    };
    getObligation: {
        callAsync(id: string, timestamp: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<[BigNumber, boolean]>;
    };
    getClosingObligation: {
        callAsync(id: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
    };
    getDueTime: {
        callAsync(id: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
    };
    getFrequency: {
        callAsync(id: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
    };
    getInstallments: {
        callAsync(id: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
    };
    getFinalTime: {
        callAsync(id: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
    };
    getEstimateObligation: {
        callAsync(id: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
    };
    create: {
        sendTransactionAsync(id: string, data: string, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<Response>;
        estimateGasAsync(id: string, data: string, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(id: string, data: string): string;
        callAsync(id: string, data: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
    };
    addPaid: {
        sendTransactionAsync(id: string, amount: BigNumber, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<Response>;
        estimateGasAsync(id: string, amount: BigNumber, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(id: string, amount: BigNumber): string;
        callAsync(id: string, amount: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
    };
    addDebt: {
        sendTransactionAsync(id: string, amount: BigNumber, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<Response>;
        estimateGasAsync(id: string, amount: BigNumber, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(id: string, amount: BigNumber): string;
        callAsync(id: string, amount: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
    };
    run: {
        sendTransactionAsync(id: string, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<Response>;
        estimateGasAsync(id: string, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(id: string): string;
        callAsync(id: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
    };
    static deployAsync(bytecode: string, abi: ContractAbi, supportedProvider: SupportedProvider, txDefaults: Partial<TxData>): Promise<ModelContract>;
    constructor(abi: ContractAbi, address: string, supportedProvider: SupportedProvider, txDefaults?: Partial<TxData>, defaultEstimateGasFactor?: number);
}
//# sourceMappingURL=model.d.ts.map