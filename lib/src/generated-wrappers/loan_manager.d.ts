import { BaseContract } from '@0x/base-contract';
import { BlockParamLiteral, CallData, ContractAbi, DecodedLogArgs, TxData, SupportedProvider } from 'ethereum-types';
import { BigNumber } from '@0x/utils';
import { Response } from '../Response';
export declare type LoanManagerEventArgs = LoanManagerRequestedEventArgs | LoanManagerApprovedEventArgs | LoanManagerLentEventArgs | LoanManagerCosignedEventArgs | LoanManagerCanceledEventArgs | LoanManagerReadedOracleEventArgs | LoanManagerApprovedRejectedEventArgs | LoanManagerApprovedErrorEventArgs | LoanManagerApprovedByCallbackEventArgs | LoanManagerApprovedBySignatureEventArgs | LoanManagerCreatorByCallbackEventArgs | LoanManagerBorrowerByCallbackEventArgs | LoanManagerCreatorBySignatureEventArgs | LoanManagerBorrowerBySignatureEventArgs | LoanManagerSettledLendEventArgs | LoanManagerSettledCancelEventArgs;
export declare enum LoanManagerEvents {
    Requested = "Requested",
    Approved = "Approved",
    Lent = "Lent",
    Cosigned = "Cosigned",
    Canceled = "Canceled",
    ReadedOracle = "ReadedOracle",
    ApprovedRejected = "ApprovedRejected",
    ApprovedError = "ApprovedError",
    ApprovedByCallback = "ApprovedByCallback",
    ApprovedBySignature = "ApprovedBySignature",
    CreatorByCallback = "CreatorByCallback",
    BorrowerByCallback = "BorrowerByCallback",
    CreatorBySignature = "CreatorBySignature",
    BorrowerBySignature = "BorrowerBySignature",
    SettledLend = "SettledLend",
    SettledCancel = "SettledCancel"
}
export interface LoanManagerRequestedEventArgs extends DecodedLogArgs {
    _id: string;
    _amount: BigNumber;
    _model: string;
    _creator: string;
    _oracle: string;
    _borrower: string;
    _salt: BigNumber;
    _loanData: string;
    _expiration: BigNumber;
}
export interface LoanManagerApprovedEventArgs extends DecodedLogArgs {
    _id: string;
}
export interface LoanManagerLentEventArgs extends DecodedLogArgs {
    _id: string;
    _lender: string;
    _tokens: BigNumber;
}
export interface LoanManagerCosignedEventArgs extends DecodedLogArgs {
    _id: string;
    _cosigner: string;
    _cost: BigNumber;
}
export interface LoanManagerCanceledEventArgs extends DecodedLogArgs {
    _id: string;
    _canceler: string;
}
export interface LoanManagerReadedOracleEventArgs extends DecodedLogArgs {
    _oracle: string;
    _tokens: BigNumber;
    _equivalent: BigNumber;
}
export interface LoanManagerApprovedRejectedEventArgs extends DecodedLogArgs {
    _id: string;
    _response: string;
}
export interface LoanManagerApprovedErrorEventArgs extends DecodedLogArgs {
    _id: string;
    _response: string;
}
export interface LoanManagerApprovedByCallbackEventArgs extends DecodedLogArgs {
    _id: string;
}
export interface LoanManagerApprovedBySignatureEventArgs extends DecodedLogArgs {
    _id: string;
}
export interface LoanManagerCreatorByCallbackEventArgs extends DecodedLogArgs {
    _id: string;
}
export interface LoanManagerBorrowerByCallbackEventArgs extends DecodedLogArgs {
    _id: string;
}
export interface LoanManagerCreatorBySignatureEventArgs extends DecodedLogArgs {
    _id: string;
}
export interface LoanManagerBorrowerBySignatureEventArgs extends DecodedLogArgs {
    _id: string;
}
export interface LoanManagerSettledLendEventArgs extends DecodedLogArgs {
    _id: string;
    _lender: string;
    _tokens: BigNumber;
}
export interface LoanManagerSettledCancelEventArgs extends DecodedLogArgs {
    _id: string;
    _canceler: string;
}
export declare class LoanManagerContract extends BaseContract {
    private _defaultEstimateGasFactor;
    debtEngine: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    directory: {
        callAsync(index_0: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    requests: {
        callAsync(index_0: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<[boolean, boolean, BigNumber, BigNumber, BigNumber, string, string, string, string, string, BigNumber, string]>;
    };
    canceledSettles: {
        callAsync(index_0: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
    };
    token: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    getDirectory: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string[]>;
    };
    getDirectoryLength: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
    };
    getBorrower2: {
        callAsync(_id: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    getBorrower1: {
        callAsync(_id: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    getCreator2: {
        callAsync(_id: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    getCreator1: {
        callAsync(_id: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    getOracle2: {
        callAsync(_id: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    getOracle1: {
        callAsync(_id: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    getCosigner1: {
        callAsync(_id: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    getCosigner2: {
        callAsync(_id: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    getCurrency2: {
        callAsync(_id: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    getCurrency1: {
        callAsync(_id: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    getAmount1: {
        callAsync(_id: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
    };
    getAmount2: {
        callAsync(_id: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
    };
    getExpirationRequest2: {
        callAsync(_id: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
    };
    getExpirationRequest1: {
        callAsync(_id: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
    };
    getApproved2: {
        callAsync(_id: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
    };
    getApproved1: {
        callAsync(_id: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
    };
    getDueTime2: {
        callAsync(_id: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
    };
    getDueTime1: {
        callAsync(_id: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
    };
    getClosingObligation2: {
        callAsync(_id: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
    };
    getClosingObligation1: {
        callAsync(_id: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
    };
    getLoanData2: {
        callAsync(_id: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    getLoanData1: {
        callAsync(_id: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    getStatus1: {
        callAsync(_id: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
    };
    getStatus2: {
        callAsync(_id: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
    };
    ownerOf2: {
        callAsync(_id: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    ownerOf1: {
        callAsync(_id: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    calcId: {
        callAsync(_amount: BigNumber, _borrower: string, _creator: string, _model: string, _oracle: string, _salt: BigNumber, _expiration: BigNumber, _data: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    buildInternalSalt: {
        callAsync(_amount: BigNumber, _borrower: string, _creator: string, _salt: BigNumber, _expiration: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
    };
    internalSalt: {
        callAsync(_id: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
    };
    requestLoan: {
        sendTransactionAsync(_amount: BigNumber, _model: string, _oracle: string, _borrower: string, _salt: BigNumber, _expiration: BigNumber, _loanData: string, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<Response>;
        estimateGasAsync(_amount: BigNumber, _model: string, _oracle: string, _borrower: string, _salt: BigNumber, _expiration: BigNumber, _loanData: string, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_amount: BigNumber, _model: string, _oracle: string, _borrower: string, _salt: BigNumber, _expiration: BigNumber, _loanData: string): string;
        callAsync(_amount: BigNumber, _model: string, _oracle: string, _borrower: string, _salt: BigNumber, _expiration: BigNumber, _loanData: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    approveRequest: {
        sendTransactionAsync(_id: string, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<Response>;
        estimateGasAsync(_id: string, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_id: string): string;
        callAsync(_id: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
    };
    registerApproveRequest: {
        sendTransactionAsync(_id: string, _signature: string, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<Response>;
        estimateGasAsync(_id: string, _signature: string, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_id: string, _signature: string): string;
        callAsync(_id: string, _signature: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
    };
    lend: {
        sendTransactionAsync(_id: string, _oracleData: string, _cosigner: string, _cosignerLimit: BigNumber, _cosignerData: string, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<Response>;
        estimateGasAsync(_id: string, _oracleData: string, _cosigner: string, _cosignerLimit: BigNumber, _cosignerData: string, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_id: string, _oracleData: string, _cosigner: string, _cosignerLimit: BigNumber, _cosignerData: string): string;
        callAsync(_id: string, _oracleData: string, _cosigner: string, _cosignerLimit: BigNumber, _cosignerData: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
    };
    cancel: {
        sendTransactionAsync(_id: string, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<Response>;
        estimateGasAsync(_id: string, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_id: string): string;
        callAsync(_id: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
    };
    cosign: {
        sendTransactionAsync(_id: BigNumber, _cost: BigNumber, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<Response>;
        estimateGasAsync(_id: BigNumber, _cost: BigNumber, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_id: BigNumber, _cost: BigNumber): string;
        callAsync(_id: BigNumber, _cost: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
    };
    encodeRequest: {
        callAsync(_amount: BigNumber, _model: string, _oracle: string, _borrower: string, _salt: BigNumber, _expiration: BigNumber, _creator: string, _loanData: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<[string, string]>;
    };
    settleLend: {
        sendTransactionAsync(_requestData: string, _loanData: string, _cosigner: string, _maxCosignerCost: BigNumber, _cosignerData: string, _oracleData: string, _creatorSig: string, _borrowerSig: string, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<Response>;
        estimateGasAsync(_requestData: string, _loanData: string, _cosigner: string, _maxCosignerCost: BigNumber, _cosignerData: string, _oracleData: string, _creatorSig: string, _borrowerSig: string, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_requestData: string, _loanData: string, _cosigner: string, _maxCosignerCost: BigNumber, _cosignerData: string, _oracleData: string, _creatorSig: string, _borrowerSig: string): string;
        callAsync(_requestData: string, _loanData: string, _cosigner: string, _maxCosignerCost: BigNumber, _cosignerData: string, _oracleData: string, _creatorSig: string, _borrowerSig: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    settleCancel: {
        sendTransactionAsync(_requestData: string, _loanData: string, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<Response>;
        estimateGasAsync(_requestData: string, _loanData: string, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_requestData: string, _loanData: string): string;
        callAsync(_requestData: string, _loanData: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
    };
    static deployAsync(bytecode: string, abi: ContractAbi, supportedProvider: SupportedProvider, txDefaults: Partial<TxData>, _debtEngine: string): Promise<LoanManagerContract>;
    constructor(abi: ContractAbi, address: string, supportedProvider: SupportedProvider, txDefaults?: Partial<TxData>, defaultEstimateGasFactor?: number);
}
//# sourceMappingURL=loan_manager.d.ts.map