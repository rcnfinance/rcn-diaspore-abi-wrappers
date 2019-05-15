import { BaseContract } from '@0x/base-contract';
import { BlockParamLiteral, CallData, ContractAbi, DecodedLogArgs, TxData, SupportedProvider } from 'ethereum-types';
import { BigNumber } from '@0x/utils';
import { Response } from '../Response';
export declare type ERC721BaseEventArgs = ERC721BaseTransferEventArgs | ERC721BaseApprovalEventArgs | ERC721BaseApprovalForAllEventArgs | ERC721BaseSetURIProviderEventArgs;
export declare enum ERC721BaseEvents {
    Transfer = "Transfer",
    Approval = "Approval",
    ApprovalForAll = "ApprovalForAll",
    SetURIProvider = "SetURIProvider"
}
export interface ERC721BaseTransferEventArgs extends DecodedLogArgs {
    _from: string;
    _to: string;
    _tokenId: BigNumber;
}
export interface ERC721BaseApprovalEventArgs extends DecodedLogArgs {
    _owner: string;
    _approved: string;
    _tokenId: BigNumber;
}
export interface ERC721BaseApprovalForAllEventArgs extends DecodedLogArgs {
    _owner: string;
    _operator: string;
    _approved: boolean;
}
export interface ERC721BaseSetURIProviderEventArgs extends DecodedLogArgs {
    _uriProvider: string;
}
export declare class ERC721BaseContract extends BaseContract {
    private _defaultEstimateGasFactor;
    supportsInterface: {
        callAsync(interfaceId: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
    };
    name: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    symbol: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    tokenURI: {
        callAsync(_tokenId: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    allTokens: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber[]>;
    };
    assetsOf: {
        callAsync(_owner: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber[]>;
    };
    totalSupply: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
    };
    tokenByIndex: {
        callAsync(_index: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
    };
    tokenOfOwnerByIndex: {
        callAsync(_owner: string, _index: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
    };
    ownerOf: {
        callAsync(_assetId: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    balanceOf: {
        callAsync(_owner: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
    };
    isApprovedForAll: {
        callAsync(_operator: string, _assetHolder: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
    };
    getApproved: {
        callAsync(_assetId: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    isAuthorized: {
        callAsync(_operator: string, _assetId: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
    };
    setApprovalForAll: {
        sendTransactionAsync(_operator: string, _authorized: boolean, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<Response>;
        estimateGasAsync(_operator: string, _authorized: boolean, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_operator: string, _authorized: boolean): string;
        callAsync(_operator: string, _authorized: boolean, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    approve: {
        sendTransactionAsync(_operator: string, _assetId: BigNumber, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<Response>;
        estimateGasAsync(_operator: string, _assetId: BigNumber, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_operator: string, _assetId: BigNumber): string;
        callAsync(_operator: string, _assetId: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    safeTransferFrom1: {
        sendTransactionAsync(_from: string, _to: string, _assetId: BigNumber, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<Response>;
        estimateGasAsync(_from: string, _to: string, _assetId: BigNumber, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_from: string, _to: string, _assetId: BigNumber): string;
        callAsync(_from: string, _to: string, _assetId: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    safeTransferFrom2: {
        sendTransactionAsync(_from: string, _to: string, _assetId: BigNumber, _userData: string, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<Response>;
        estimateGasAsync(_from: string, _to: string, _assetId: BigNumber, _userData: string, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_from: string, _to: string, _assetId: BigNumber, _userData: string): string;
        callAsync(_from: string, _to: string, _assetId: BigNumber, _userData: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    transferFrom: {
        sendTransactionAsync(_from: string, _to: string, _assetId: BigNumber, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<Response>;
        estimateGasAsync(_from: string, _to: string, _assetId: BigNumber, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_from: string, _to: string, _assetId: BigNumber): string;
        callAsync(_from: string, _to: string, _assetId: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    static deployAsync(bytecode: string, abi: ContractAbi, supportedProvider: SupportedProvider, txDefaults: Partial<TxData>, name: string, symbol: string): Promise<ERC721BaseContract>;
    constructor(abi: ContractAbi, address: string, supportedProvider: SupportedProvider, txDefaults?: Partial<TxData>, defaultEstimateGasFactor?: number);
}
//# sourceMappingURL=erc721_base.d.ts.map