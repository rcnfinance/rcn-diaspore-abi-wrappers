import { BaseContract } from '@0x/base-contract';
import { BlockParamLiteral, CallData, ContractAbi, DecodedLogArgs, TxData, SupportedProvider } from 'ethereum-types';
import { BigNumber } from '@0x/utils';
import { Response } from '../Response';
export declare type InstallmentsModelEventArgs = InstallmentsModel_setEngineEventArgs | InstallmentsModel_setDescriptorEventArgs | InstallmentsModel_setClockEventArgs | InstallmentsModel_setPaidBaseEventArgs | InstallmentsModel_setInterestEventArgs | InstallmentsModelCreatedEventArgs | InstallmentsModelChangedStatusEventArgs | InstallmentsModelChangedObligationEventArgs | InstallmentsModelChangedFrequencyEventArgs | InstallmentsModelChangedDueTimeEventArgs | InstallmentsModelChangedFinalTimeEventArgs | InstallmentsModelAddedDebtEventArgs | InstallmentsModelAddedPaidEventArgs | InstallmentsModelOwnershipTransferredEventArgs;
export declare enum InstallmentsModelEvents {
    _setEngine = "_setEngine",
    _setDescriptor = "_setDescriptor",
    _setClock = "_setClock",
    _setPaidBase = "_setPaidBase",
    _setInterest = "_setInterest",
    Created = "Created",
    ChangedStatus = "ChangedStatus",
    ChangedObligation = "ChangedObligation",
    ChangedFrequency = "ChangedFrequency",
    ChangedDueTime = "ChangedDueTime",
    ChangedFinalTime = "ChangedFinalTime",
    AddedDebt = "AddedDebt",
    AddedPaid = "AddedPaid",
    OwnershipTransferred = "OwnershipTransferred"
}
export interface InstallmentsModel_setEngineEventArgs extends DecodedLogArgs {
    _engine: string;
}
export interface InstallmentsModel_setDescriptorEventArgs extends DecodedLogArgs {
    _descriptor: string;
}
export interface InstallmentsModel_setClockEventArgs extends DecodedLogArgs {
    _id: string;
    _to: BigNumber;
}
export interface InstallmentsModel_setPaidBaseEventArgs extends DecodedLogArgs {
    _id: string;
    _paidBase: BigNumber;
}
export interface InstallmentsModel_setInterestEventArgs extends DecodedLogArgs {
    _id: string;
    _interest: BigNumber;
}
export interface InstallmentsModelCreatedEventArgs extends DecodedLogArgs {
    _id: string;
}
export interface InstallmentsModelChangedStatusEventArgs extends DecodedLogArgs {
    _id: string;
    _timestamp: BigNumber;
    _status: BigNumber;
}
export interface InstallmentsModelChangedObligationEventArgs extends DecodedLogArgs {
    _id: string;
    _timestamp: BigNumber;
    _debt: BigNumber;
}
export interface InstallmentsModelChangedFrequencyEventArgs extends DecodedLogArgs {
    _id: string;
    _timestamp: BigNumber;
    _frequency: BigNumber;
}
export interface InstallmentsModelChangedDueTimeEventArgs extends DecodedLogArgs {
    _id: string;
    _timestamp: BigNumber;
    _status: BigNumber;
}
export interface InstallmentsModelChangedFinalTimeEventArgs extends DecodedLogArgs {
    _id: string;
    _timestamp: BigNumber;
    _dueTime: BigNumber;
}
export interface InstallmentsModelAddedDebtEventArgs extends DecodedLogArgs {
    _id: string;
    _amount: BigNumber;
}
export interface InstallmentsModelAddedPaidEventArgs extends DecodedLogArgs {
    _id: string;
    _paid: BigNumber;
}
export interface InstallmentsModelOwnershipTransferredEventArgs extends DecodedLogArgs {
    _previousOwner: string;
    _newOwner: string;
}
export declare class InstallmentsModelContract extends BaseContract {
    private _defaultEstimateGasFactor;
    supportsInterface: {
        callAsync(interfaceId: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
    };
    owner: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
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
    L_DATA: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
    };
    engine: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    configs: {
        callAsync(index_0: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<[BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber]>;
    };
    transferOwnership: {
        sendTransactionAsync(_newOwner: string, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<Response>;
        estimateGasAsync(_newOwner: string, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_newOwner: string): string;
        callAsync(_newOwner: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    states: {
        callAsync(index_0: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<[BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber]>;
    };
    modelId: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    descriptor: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    setEngine: {
        sendTransactionAsync(_engine: string, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<Response>;
        estimateGasAsync(_engine: string, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_engine: string): string;
        callAsync(_engine: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
    };
    setDescriptor: {
        sendTransactionAsync(_descriptor: string, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<Response>;
        estimateGasAsync(_descriptor: string, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_descriptor: string): string;
        callAsync(_descriptor: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
    };
    encodeData: {
        callAsync(_cuota: BigNumber, _interestRate: BigNumber, _installments: BigNumber, _duration: BigNumber, _timeUnit: number | BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
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
    fixClock: {
        sendTransactionAsync(id: string, target: BigNumber, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<Response>;
        estimateGasAsync(id: string, target: BigNumber, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(id: string, target: BigNumber): string;
        callAsync(id: string, target: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
    };
    isOperator: {
        callAsync(_target: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
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
    run: {
        sendTransactionAsync(id: string, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<Response>;
        estimateGasAsync(id: string, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(id: string): string;
        callAsync(id: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
    };
    validate: {
        callAsync(data: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
    };
    getClosingObligation: {
        callAsync(id: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
    };
    getDueTime: {
        callAsync(id: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
    };
    getFinalTime: {
        callAsync(id: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
    };
    getFrequency: {
        callAsync(id: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
    };
    getInstallments: {
        callAsync(id: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
    };
    getEstimateObligation: {
        callAsync(id: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
    };
    simFirstObligation: {
        callAsync(_data: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<[BigNumber, BigNumber]>;
    };
    simTotalObligation: {
        callAsync(_data: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
    };
    simDuration: {
        callAsync(_data: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
    };
    simPunitiveInterestRate: {
        callAsync(_data: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
    };
    simFrequency: {
        callAsync(_data: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
    };
    simInstallments: {
        callAsync(_data: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
    };
    static deployAsync(bytecode: string, abi: ContractAbi, supportedProvider: SupportedProvider, txDefaults: Partial<TxData>): Promise<InstallmentsModelContract>;
    constructor(abi: ContractAbi, address: string, supportedProvider: SupportedProvider, txDefaults?: Partial<TxData>, defaultEstimateGasFactor?: number);
}
//# sourceMappingURL=installments_model.d.ts.map