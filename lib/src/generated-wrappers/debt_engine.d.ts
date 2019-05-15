import { BaseContract } from '@0x/base-contract';
import { BlockParamLiteral, CallData, ContractAbi, DecodedLogArgs, TxData, SupportedProvider } from 'ethereum-types';
import { BigNumber } from '@0x/utils';
import { Response } from '../Response';
export declare type DebtEngineEventArgs = DebtEngineCreatedEventArgs | DebtEngineCreated2EventArgs | DebtEngineCreated3EventArgs | DebtEnginePaidEventArgs | DebtEngineReadedOracleBatchEventArgs | DebtEngineReadedOracleEventArgs | DebtEnginePayBatchErrorEventArgs | DebtEngineWithdrawnEventArgs | DebtEngineErrorEventArgs | DebtEngineErrorRecoverEventArgs | DebtEngineOwnershipTransferredEventArgs | DebtEngineTransferEventArgs | DebtEngineApprovalEventArgs | DebtEngineApprovalForAllEventArgs | DebtEngineSetURIProviderEventArgs;
export declare enum DebtEngineEvents {
    Created = "Created",
    Created2 = "Created2",
    Created3 = "Created3",
    Paid = "Paid",
    ReadedOracleBatch = "ReadedOracleBatch",
    ReadedOracle = "ReadedOracle",
    PayBatchError = "PayBatchError",
    Withdrawn = "Withdrawn",
    Error = "Error",
    ErrorRecover = "ErrorRecover",
    OwnershipTransferred = "OwnershipTransferred",
    Transfer = "Transfer",
    Approval = "Approval",
    ApprovalForAll = "ApprovalForAll",
    SetURIProvider = "SetURIProvider"
}
export interface DebtEngineCreatedEventArgs extends DecodedLogArgs {
    _id: string;
    _nonce: BigNumber;
    _data: string;
}
export interface DebtEngineCreated2EventArgs extends DecodedLogArgs {
    _id: string;
    _salt: BigNumber;
    _data: string;
}
export interface DebtEngineCreated3EventArgs extends DecodedLogArgs {
    _id: string;
    _salt: BigNumber;
    _data: string;
}
export interface DebtEnginePaidEventArgs extends DecodedLogArgs {
    _id: string;
    _sender: string;
    _origin: string;
    _requested: BigNumber;
    _requestedTokens: BigNumber;
    _paid: BigNumber;
    _tokens: BigNumber;
}
export interface DebtEngineReadedOracleBatchEventArgs extends DecodedLogArgs {
    _oracle: string;
    _count: BigNumber;
    _tokens: BigNumber;
    _equivalent: BigNumber;
}
export interface DebtEngineReadedOracleEventArgs extends DecodedLogArgs {
    _id: string;
    _tokens: BigNumber;
    _equivalent: BigNumber;
}
export interface DebtEnginePayBatchErrorEventArgs extends DecodedLogArgs {
    _id: string;
    _targetOracle: string;
}
export interface DebtEngineWithdrawnEventArgs extends DecodedLogArgs {
    _id: string;
    _sender: string;
    _to: string;
    _amount: BigNumber;
}
export interface DebtEngineErrorEventArgs extends DecodedLogArgs {
    _id: string;
    _sender: string;
    _value: BigNumber;
    _gasLeft: BigNumber;
    _gasLimit: BigNumber;
    _callData: string;
}
export interface DebtEngineErrorRecoverEventArgs extends DecodedLogArgs {
    _id: string;
    _sender: string;
    _value: BigNumber;
    _gasLeft: BigNumber;
    _gasLimit: BigNumber;
    _result: string;
    _callData: string;
}
export interface DebtEngineOwnershipTransferredEventArgs extends DecodedLogArgs {
    _previousOwner: string;
    _newOwner: string;
}
export interface DebtEngineTransferEventArgs extends DecodedLogArgs {
    _from: string;
    _to: string;
    _tokenId: BigNumber;
}
export interface DebtEngineApprovalEventArgs extends DecodedLogArgs {
    _owner: string;
    _approved: string;
    _tokenId: BigNumber;
}
export interface DebtEngineApprovalForAllEventArgs extends DecodedLogArgs {
    _owner: string;
    _operator: string;
    _approved: boolean;
}
export interface DebtEngineSetURIProviderEventArgs extends DecodedLogArgs {
    _uriProvider: string;
}
export declare class DebtEngineContract extends BaseContract {
    private _defaultEstimateGasFactor;
    supportsInterface: {
        callAsync(interfaceId: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
    };
    name: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    getApproved: {
        callAsync(_assetId: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    approve: {
        sendTransactionAsync(_operator: string, _assetId: BigNumber, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<Response>;
        estimateGasAsync(_operator: string, _assetId: BigNumber, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_operator: string, _assetId: BigNumber): string;
        callAsync(_operator: string, _assetId: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    totalSupply: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
    };
    transferFrom: {
        sendTransactionAsync(_from: string, _to: string, _assetId: BigNumber, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<Response>;
        estimateGasAsync(_from: string, _to: string, _assetId: BigNumber, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_from: string, _to: string, _assetId: BigNumber): string;
        callAsync(_from: string, _to: string, _assetId: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    isAuthorized: {
        callAsync(_operator: string, _assetId: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
    };
    assetsOf: {
        callAsync(_owner: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber[]>;
    };
    tokenOfOwnerByIndex: {
        callAsync(_owner: string, _index: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
    };
    safeTransferFrom1: {
        sendTransactionAsync(_from: string, _to: string, _assetId: BigNumber, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<Response>;
        estimateGasAsync(_from: string, _to: string, _assetId: BigNumber, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_from: string, _to: string, _assetId: BigNumber): string;
        callAsync(_from: string, _to: string, _assetId: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    tokenByIndex: {
        callAsync(_index: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
    };
    ownerOf: {
        callAsync(_assetId: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    allTokens: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber[]>;
    };
    balanceOf: {
        callAsync(_owner: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
    };
    nonces: {
        callAsync(index_0: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
    };
    owner: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    symbol: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    setApprovalForAll: {
        sendTransactionAsync(_operator: string, _authorized: boolean, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<Response>;
        estimateGasAsync(_operator: string, _authorized: boolean, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_operator: string, _authorized: boolean): string;
        callAsync(_operator: string, _authorized: boolean, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    debts: {
        callAsync(index_0: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<[boolean, BigNumber, string, string, string]>;
    };
    safeTransferFrom2: {
        sendTransactionAsync(_from: string, _to: string, _assetId: BigNumber, _userData: string, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<Response>;
        estimateGasAsync(_from: string, _to: string, _assetId: BigNumber, _userData: string, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_from: string, _to: string, _assetId: BigNumber, _userData: string): string;
        callAsync(_from: string, _to: string, _assetId: BigNumber, _userData: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    tokenURI: {
        callAsync(_tokenId: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    isApprovedForAll: {
        callAsync(_operator: string, _assetHolder: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
    };
    transferOwnership: {
        sendTransactionAsync(_newOwner: string, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<Response>;
        estimateGasAsync(_newOwner: string, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_newOwner: string): string;
        callAsync(_newOwner: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    token: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    setURIProvider: {
        sendTransactionAsync(_provider: string, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<Response>;
        estimateGasAsync(_provider: string, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_provider: string): string;
        callAsync(_provider: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    create: {
        sendTransactionAsync(_model: string, _owner: string, _oracle: string, _data: string, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<Response>;
        estimateGasAsync(_model: string, _owner: string, _oracle: string, _data: string, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_model: string, _owner: string, _oracle: string, _data: string): string;
        callAsync(_model: string, _owner: string, _oracle: string, _data: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    create2: {
        sendTransactionAsync(_model: string, _owner: string, _oracle: string, _salt: BigNumber, _data: string, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<Response>;
        estimateGasAsync(_model: string, _owner: string, _oracle: string, _salt: BigNumber, _data: string, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_model: string, _owner: string, _oracle: string, _salt: BigNumber, _data: string): string;
        callAsync(_model: string, _owner: string, _oracle: string, _salt: BigNumber, _data: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    create3: {
        sendTransactionAsync(_model: string, _owner: string, _oracle: string, _salt: BigNumber, _data: string, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<Response>;
        estimateGasAsync(_model: string, _owner: string, _oracle: string, _salt: BigNumber, _data: string, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_model: string, _owner: string, _oracle: string, _salt: BigNumber, _data: string): string;
        callAsync(_model: string, _owner: string, _oracle: string, _salt: BigNumber, _data: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    buildId: {
        callAsync(_creator: string, _nonce: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    buildId2: {
        callAsync(_creator: string, _model: string, _oracle: string, _salt: BigNumber, _data: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    buildId3: {
        callAsync(_creator: string, _salt: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    pay: {
        sendTransactionAsync(_id: string, _amount: BigNumber, _origin: string, _oracleData: string, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<Response>;
        estimateGasAsync(_id: string, _amount: BigNumber, _origin: string, _oracleData: string, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_id: string, _amount: BigNumber, _origin: string, _oracleData: string): string;
        callAsync(_id: string, _amount: BigNumber, _origin: string, _oracleData: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<[BigNumber, BigNumber]>;
    };
    payToken: {
        sendTransactionAsync(id: string, amount: BigNumber, origin: string, oracleData: string, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<Response>;
        estimateGasAsync(id: string, amount: BigNumber, origin: string, oracleData: string, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(id: string, amount: BigNumber, origin: string, oracleData: string): string;
        callAsync(id: string, amount: BigNumber, origin: string, oracleData: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<[BigNumber, BigNumber]>;
    };
    payBatch: {
        sendTransactionAsync(_ids: string[], _amounts: BigNumber[], _origin: string, _oracle: string, _oracleData: string, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<Response>;
        estimateGasAsync(_ids: string[], _amounts: BigNumber[], _origin: string, _oracle: string, _oracleData: string, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_ids: string[], _amounts: BigNumber[], _origin: string, _oracle: string, _oracleData: string): string;
        callAsync(_ids: string[], _amounts: BigNumber[], _origin: string, _oracle: string, _oracleData: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<[BigNumber[], BigNumber[]]>;
    };
    payTokenBatch: {
        sendTransactionAsync(_ids: string[], _tokenAmounts: BigNumber[], _origin: string, _oracle: string, _oracleData: string, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<Response>;
        estimateGasAsync(_ids: string[], _tokenAmounts: BigNumber[], _origin: string, _oracle: string, _oracleData: string, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_ids: string[], _tokenAmounts: BigNumber[], _origin: string, _oracle: string, _oracleData: string): string;
        callAsync(_ids: string[], _tokenAmounts: BigNumber[], _origin: string, _oracle: string, _oracleData: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<[BigNumber[], BigNumber[]]>;
    };
    run: {
        sendTransactionAsync(_id: string, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<Response>;
        estimateGasAsync(_id: string, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_id: string): string;
        callAsync(_id: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
    };
    withdraw: {
        sendTransactionAsync(_id: string, _to: string, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<Response>;
        estimateGasAsync(_id: string, _to: string, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_id: string, _to: string): string;
        callAsync(_id: string, _to: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
    };
    withdrawPartial: {
        sendTransactionAsync(_id: string, _to: string, _amount: BigNumber, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<Response>;
        estimateGasAsync(_id: string, _to: string, _amount: BigNumber, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_id: string, _to: string, _amount: BigNumber): string;
        callAsync(_id: string, _to: string, _amount: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
    };
    withdrawBatch: {
        sendTransactionAsync(_ids: string[], _to: string, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<Response>;
        estimateGasAsync(_ids: string[], _to: string, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_ids: string[], _to: string): string;
        callAsync(_ids: string[], _to: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
    };
    getStatus: {
        callAsync(_id: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
    };
    static deployAsync(bytecode: string, abi: ContractAbi, supportedProvider: SupportedProvider, txDefaults: Partial<TxData>, _token: string): Promise<DebtEngineContract>;
    constructor(abi: ContractAbi, address: string, supportedProvider: SupportedProvider, txDefaults?: Partial<TxData>, defaultEstimateGasFactor?: number);
}
//# sourceMappingURL=debt_engine.d.ts.map