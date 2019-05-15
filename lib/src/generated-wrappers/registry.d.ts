import { BaseContract } from '@0x/base-contract';
import { BlockParamLiteral, CallData, ContractAbi, DecodedLogArgs, TxData, SupportedProvider } from 'ethereum-types';
import { BigNumber } from '@0x/utils';
import { Response } from '../Response';
export declare type RegistryEventArgs = RegistryNewAddressEventArgs | RegistryChangedAddressEventArgs | RegistryOwnershipTransferredEventArgs;
export declare enum RegistryEvents {
    NewAddress = "NewAddress",
    ChangedAddress = "ChangedAddress",
    OwnershipTransferred = "OwnershipTransferred"
}
export interface RegistryNewAddressEventArgs extends DecodedLogArgs {
    _nameKey: string;
    _newAddress: string;
}
export interface RegistryChangedAddressEventArgs extends DecodedLogArgs {
    _nameKey: string;
    _oldAddress: string;
    _newAddress: string;
}
export interface RegistryOwnershipTransferredEventArgs extends DecodedLogArgs {
    _previousOwner: string;
    _newOwner: string;
}
export declare class RegistryContract extends BaseContract {
    private _defaultEstimateGasFactor;
    keys: {
        callAsync(index_0: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    storedAddresses: {
        callAsync(index_0: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<[boolean, string]>;
    };
    owner: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    transferOwnership: {
        sendTransactionAsync(_newOwner: string, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<Response>;
        estimateGasAsync(_newOwner: string, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_newOwner: string): string;
        callAsync(_newOwner: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    getEntry: {
        callAsync(_index: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<[string, string]>;
    };
    getAddress: {
        callAsync(_nameKey: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    newAddress: {
        sendTransactionAsync(_nameKey: string, _newAddress: string, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<Response>;
        estimateGasAsync(_nameKey: string, _newAddress: string, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_nameKey: string, _newAddress: string): string;
        callAsync(_nameKey: string, _newAddress: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    changeAddress: {
        sendTransactionAsync(_nameKey: string, _newAddress: string, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<Response>;
        estimateGasAsync(_nameKey: string, _newAddress: string, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_nameKey: string, _newAddress: string): string;
        callAsync(_nameKey: string, _newAddress: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    static deployAsync(bytecode: string, abi: ContractAbi, supportedProvider: SupportedProvider, txDefaults: Partial<TxData>): Promise<RegistryContract>;
    constructor(abi: ContractAbi, address: string, supportedProvider: SupportedProvider, txDefaults?: Partial<TxData>, defaultEstimateGasFactor?: number);
}
//# sourceMappingURL=registry.d.ts.map