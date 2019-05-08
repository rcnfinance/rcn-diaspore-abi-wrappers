// tslint:disable:no-consecutive-blank-lines ordered-imports align trailing-comma whitespace class-name
// tslint:disable:no-unused-variable
// tslint:disable:no-unbound-method
import { BaseContract } from '@0x/base-contract';
import { BlockParam, BlockParamLiteral, CallData, ContractAbi, ContractArtifact, DecodedLogArgs, MethodAbi, TxData, TxDataPayable, SupportedProvider } from 'ethereum-types';
import { BigNumber, classUtils, logUtils, providerUtils } from '@0x/utils';
import { SimpleContractArtifact } from '@0x/types';
import { Web3Wrapper } from '@0x/web3-wrapper';
import { Response } from '../Response';
import * as ethers from 'ethers';
// tslint:enable:no-unused-variable

export type DebtEngineEventArgs =
    | DebtEngineCreatedEventArgs
    | DebtEngineCreated2EventArgs
    | DebtEngineCreated3EventArgs
    | DebtEnginePaidEventArgs
    | DebtEngineReadedOracleBatchEventArgs
    | DebtEngineReadedOracleEventArgs
    | DebtEnginePayBatchErrorEventArgs
    | DebtEngineWithdrawnEventArgs
    | DebtEngineErrorEventArgs
    | DebtEngineErrorRecoverEventArgs
    | DebtEngineOwnershipTransferredEventArgs
    | DebtEngineTransferEventArgs
    | DebtEngineApprovalEventArgs
    | DebtEngineApprovalForAllEventArgs
    | DebtEngineSetURIProviderEventArgs;

export enum DebtEngineEvents {
    Created = 'Created',
    Created2 = 'Created2',
    Created3 = 'Created3',
    Paid = 'Paid',
    ReadedOracleBatch = 'ReadedOracleBatch',
    ReadedOracle = 'ReadedOracle',
    PayBatchError = 'PayBatchError',
    Withdrawn = 'Withdrawn',
    Error = 'Error',
    ErrorRecover = 'ErrorRecover',
    OwnershipTransferred = 'OwnershipTransferred',
    Transfer = 'Transfer',
    Approval = 'Approval',
    ApprovalForAll = 'ApprovalForAll',
    SetURIProvider = 'SetURIProvider',
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


/* istanbul ignore next */
// tslint:disable:no-parameter-reassignment
// tslint:disable-next-line:class-name
export class DebtEngineContract extends BaseContract {
    private _defaultEstimateGasFactor: number;
    public supportsInterface = {
        async callAsync(
            interfaceId: string,
        callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<boolean
        > {
            const self = this as any as DebtEngineContract;
            const encodedData = self._strictEncodeArguments('supportsInterface(bytes4)', [interfaceId
        ]);
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
            {
            to: self.address,
            ...callData,
            data: encodedData,
            },
            self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
            const abiEncoder = self._lookupAbiEncoder('supportsInterface(bytes4)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<boolean
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};
    public name = {
        async callAsync(
        callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<string
        > {
            const self = this as any as DebtEngineContract;
            const encodedData = self._strictEncodeArguments('name()', []);
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
            {
            to: self.address,
            ...callData,
            data: encodedData,
            },
            self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
            const abiEncoder = self._lookupAbiEncoder('name()');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<string
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};
    public getApproved = {
        async callAsync(
            _assetId: BigNumber,
        callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<string
        > {
            const self = this as any as DebtEngineContract;
            const encodedData = self._strictEncodeArguments('getApproved(uint256)', [_assetId
        ]);
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
            {
            to: self.address,
            ...callData,
            data: encodedData,
            },
            self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
            const abiEncoder = self._lookupAbiEncoder('getApproved(uint256)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<string
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};
    public approve = {
        async sendTransactionAsync(
            _operator: string,
            _assetId: BigNumber,
            txData: Partial<TxData> = {},
            estimateGasFactor?: number,
        ): Promise<Response> {
            const self = this as any as DebtEngineContract;
            const encodedData = self._strictEncodeArguments('approve(address,uint256)', [_operator,
    _assetId
    ]);
            const contractDefaults = self._web3Wrapper.getContractDefaults();
            const defaultFromAddress = (await self._web3Wrapper.getAvailableAddressesAsync())[0];
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                {
                    from: defaultFromAddress,
                    ...contractDefaults
                },
                self.approve.estimateGasAsync.bind<DebtEngineContract, any, Promise<number>>(
                    self,
                    _operator,
    _assetId
    ,
                    estimateGasFactor,
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            const receipt = self._web3Wrapper.awaitTransactionSuccessAsync(txHash);
    
            return new Response(txHash, receipt);
        },
        async estimateGasAsync(
            _operator: string,
            _assetId: BigNumber,
            factor?: number,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as DebtEngineContract;
            const encodedData = self._strictEncodeArguments('approve(address,uint256)',
            [_operator,
    _assetId
    ]);
            const contractDefaults = self._web3Wrapper.getContractDefaults();
            const defaultFromAddress = (await self._web3Wrapper.getAvailableAddressesAsync())[0];
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                {
                    from: defaultFromAddress,
                    ...contractDefaults
                },
            );
            const gas = await self._web3Wrapper.estimateGasAsync(txDataWithDefaults);
            const networkGasLimit = (await self._web3Wrapper.getBlockWithTransactionDataAsync('latest')).gasLimit;
            const _factor = factor === undefined ? self._defaultEstimateGasFactor : factor;
            const _safetyGasEstimation = Math.round(_factor * gas);
            return (_safetyGasEstimation > networkGasLimit) ? networkGasLimit : _safetyGasEstimation;
        },
        getABIEncodedTransactionData(
            _operator: string,
            _assetId: BigNumber,
        ): string {
            const self = this as any as DebtEngineContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('approve(address,uint256)',
            [_operator,
    _assetId
    ]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            _operator: string,
            _assetId: BigNumber,
        callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<void
        > {
            const self = this as any as DebtEngineContract;
            const encodedData = self._strictEncodeArguments('approve(address,uint256)', [_operator,
        _assetId
        ]);
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
            {
            to: self.address,
            ...callData,
            data: encodedData,
            },
            self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
            const abiEncoder = self._lookupAbiEncoder('approve(address,uint256)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<void
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};
    public totalSupply = {
        async callAsync(
        callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<BigNumber
        > {
            const self = this as any as DebtEngineContract;
            const encodedData = self._strictEncodeArguments('totalSupply()', []);
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
            {
            to: self.address,
            ...callData,
            data: encodedData,
            },
            self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
            const abiEncoder = self._lookupAbiEncoder('totalSupply()');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<BigNumber
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};
    public transferFrom = {
        async sendTransactionAsync(
            _from: string,
            _to: string,
            _assetId: BigNumber,
            txData: Partial<TxData> = {},
            estimateGasFactor?: number,
        ): Promise<Response> {
            const self = this as any as DebtEngineContract;
            const encodedData = self._strictEncodeArguments('transferFrom(address,address,uint256)', [_from,
    _to,
    _assetId
    ]);
            const contractDefaults = self._web3Wrapper.getContractDefaults();
            const defaultFromAddress = (await self._web3Wrapper.getAvailableAddressesAsync())[0];
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                {
                    from: defaultFromAddress,
                    ...contractDefaults
                },
                self.transferFrom.estimateGasAsync.bind<DebtEngineContract, any, Promise<number>>(
                    self,
                    _from,
    _to,
    _assetId
    ,
                    estimateGasFactor,
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            const receipt = self._web3Wrapper.awaitTransactionSuccessAsync(txHash);
    
            return new Response(txHash, receipt);
        },
        async estimateGasAsync(
            _from: string,
            _to: string,
            _assetId: BigNumber,
            factor?: number,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as DebtEngineContract;
            const encodedData = self._strictEncodeArguments('transferFrom(address,address,uint256)',
            [_from,
    _to,
    _assetId
    ]);
            const contractDefaults = self._web3Wrapper.getContractDefaults();
            const defaultFromAddress = (await self._web3Wrapper.getAvailableAddressesAsync())[0];
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                {
                    from: defaultFromAddress,
                    ...contractDefaults
                },
            );
            const gas = await self._web3Wrapper.estimateGasAsync(txDataWithDefaults);
            const networkGasLimit = (await self._web3Wrapper.getBlockWithTransactionDataAsync('latest')).gasLimit;
            const _factor = factor === undefined ? self._defaultEstimateGasFactor : factor;
            const _safetyGasEstimation = Math.round(_factor * gas);
            return (_safetyGasEstimation > networkGasLimit) ? networkGasLimit : _safetyGasEstimation;
        },
        getABIEncodedTransactionData(
            _from: string,
            _to: string,
            _assetId: BigNumber,
        ): string {
            const self = this as any as DebtEngineContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('transferFrom(address,address,uint256)',
            [_from,
    _to,
    _assetId
    ]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            _from: string,
            _to: string,
            _assetId: BigNumber,
        callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<void
        > {
            const self = this as any as DebtEngineContract;
            const encodedData = self._strictEncodeArguments('transferFrom(address,address,uint256)', [_from,
        _to,
        _assetId
        ]);
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
            {
            to: self.address,
            ...callData,
            data: encodedData,
            },
            self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
            const abiEncoder = self._lookupAbiEncoder('transferFrom(address,address,uint256)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<void
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};
    public isAuthorized = {
        async callAsync(
            _operator: string,
            _assetId: BigNumber,
        callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<boolean
        > {
            const self = this as any as DebtEngineContract;
            const encodedData = self._strictEncodeArguments('isAuthorized(address,uint256)', [_operator,
        _assetId
        ]);
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
            {
            to: self.address,
            ...callData,
            data: encodedData,
            },
            self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
            const abiEncoder = self._lookupAbiEncoder('isAuthorized(address,uint256)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<boolean
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};
    public assetsOf = {
        async callAsync(
            _owner: string,
        callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<BigNumber[]
        > {
            const self = this as any as DebtEngineContract;
            const encodedData = self._strictEncodeArguments('assetsOf(address)', [_owner
        ]);
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
            {
            to: self.address,
            ...callData,
            data: encodedData,
            },
            self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
            const abiEncoder = self._lookupAbiEncoder('assetsOf(address)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<BigNumber[]
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};
    public tokenOfOwnerByIndex = {
        async callAsync(
            _owner: string,
            _index: BigNumber,
        callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<BigNumber
        > {
            const self = this as any as DebtEngineContract;
            const encodedData = self._strictEncodeArguments('tokenOfOwnerByIndex(address,uint256)', [_owner,
        _index
        ]);
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
            {
            to: self.address,
            ...callData,
            data: encodedData,
            },
            self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
            const abiEncoder = self._lookupAbiEncoder('tokenOfOwnerByIndex(address,uint256)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<BigNumber
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};
    public safeTransferFrom1 = {
        async sendTransactionAsync(
            _from: string,
            _to: string,
            _assetId: BigNumber,
            txData: Partial<TxData> = {},
            estimateGasFactor?: number,
        ): Promise<Response> {
            const self = this as any as DebtEngineContract;
            const encodedData = self._strictEncodeArguments('safeTransferFrom(address,address,uint256)', [_from,
    _to,
    _assetId
    ]);
            const contractDefaults = self._web3Wrapper.getContractDefaults();
            const defaultFromAddress = (await self._web3Wrapper.getAvailableAddressesAsync())[0];
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                {
                    from: defaultFromAddress,
                    ...contractDefaults
                },
                self.safeTransferFrom1.estimateGasAsync.bind<DebtEngineContract, any, Promise<number>>(
                    self,
                    _from,
    _to,
    _assetId
    ,
                    estimateGasFactor,
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            const receipt = self._web3Wrapper.awaitTransactionSuccessAsync(txHash);
    
            return new Response(txHash, receipt);
        },
        async estimateGasAsync(
            _from: string,
            _to: string,
            _assetId: BigNumber,
            factor?: number,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as DebtEngineContract;
            const encodedData = self._strictEncodeArguments('safeTransferFrom(address,address,uint256)',
            [_from,
    _to,
    _assetId
    ]);
            const contractDefaults = self._web3Wrapper.getContractDefaults();
            const defaultFromAddress = (await self._web3Wrapper.getAvailableAddressesAsync())[0];
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                {
                    from: defaultFromAddress,
                    ...contractDefaults
                },
            );
            const gas = await self._web3Wrapper.estimateGasAsync(txDataWithDefaults);
            const networkGasLimit = (await self._web3Wrapper.getBlockWithTransactionDataAsync('latest')).gasLimit;
            const _factor = factor === undefined ? self._defaultEstimateGasFactor : factor;
            const _safetyGasEstimation = Math.round(_factor * gas);
            return (_safetyGasEstimation > networkGasLimit) ? networkGasLimit : _safetyGasEstimation;
        },
        getABIEncodedTransactionData(
            _from: string,
            _to: string,
            _assetId: BigNumber,
        ): string {
            const self = this as any as DebtEngineContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('safeTransferFrom(address,address,uint256)',
            [_from,
    _to,
    _assetId
    ]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            _from: string,
            _to: string,
            _assetId: BigNumber,
        callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<void
        > {
            const self = this as any as DebtEngineContract;
            const encodedData = self._strictEncodeArguments('safeTransferFrom(address,address,uint256)', [_from,
        _to,
        _assetId
        ]);
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
            {
            to: self.address,
            ...callData,
            data: encodedData,
            },
            self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
            const abiEncoder = self._lookupAbiEncoder('safeTransferFrom(address,address,uint256)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<void
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};
    public tokenByIndex = {
        async callAsync(
            _index: BigNumber,
        callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<BigNumber
        > {
            const self = this as any as DebtEngineContract;
            const encodedData = self._strictEncodeArguments('tokenByIndex(uint256)', [_index
        ]);
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
            {
            to: self.address,
            ...callData,
            data: encodedData,
            },
            self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
            const abiEncoder = self._lookupAbiEncoder('tokenByIndex(uint256)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<BigNumber
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};
    public ownerOf = {
        async callAsync(
            _assetId: BigNumber,
        callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<string
        > {
            const self = this as any as DebtEngineContract;
            const encodedData = self._strictEncodeArguments('ownerOf(uint256)', [_assetId
        ]);
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
            {
            to: self.address,
            ...callData,
            data: encodedData,
            },
            self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
            const abiEncoder = self._lookupAbiEncoder('ownerOf(uint256)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<string
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};
    public allTokens = {
        async callAsync(
        callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<BigNumber[]
        > {
            const self = this as any as DebtEngineContract;
            const encodedData = self._strictEncodeArguments('allTokens()', []);
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
            {
            to: self.address,
            ...callData,
            data: encodedData,
            },
            self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
            const abiEncoder = self._lookupAbiEncoder('allTokens()');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<BigNumber[]
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};
    public balanceOf = {
        async callAsync(
            _owner: string,
        callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<BigNumber
        > {
            const self = this as any as DebtEngineContract;
            const encodedData = self._strictEncodeArguments('balanceOf(address)', [_owner
        ]);
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
            {
            to: self.address,
            ...callData,
            data: encodedData,
            },
            self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
            const abiEncoder = self._lookupAbiEncoder('balanceOf(address)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<BigNumber
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};
    public nonces = {
        async callAsync(
            index_0: string,
        callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<BigNumber
        > {
            const self = this as any as DebtEngineContract;
            const encodedData = self._strictEncodeArguments('nonces(address)', [index_0
        ]);
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
            {
            to: self.address,
            ...callData,
            data: encodedData,
            },
            self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
            const abiEncoder = self._lookupAbiEncoder('nonces(address)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<BigNumber
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};
    public owner = {
        async callAsync(
        callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<string
        > {
            const self = this as any as DebtEngineContract;
            const encodedData = self._strictEncodeArguments('owner()', []);
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
            {
            to: self.address,
            ...callData,
            data: encodedData,
            },
            self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
            const abiEncoder = self._lookupAbiEncoder('owner()');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<string
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};
    public symbol = {
        async callAsync(
        callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<string
        > {
            const self = this as any as DebtEngineContract;
            const encodedData = self._strictEncodeArguments('symbol()', []);
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
            {
            to: self.address,
            ...callData,
            data: encodedData,
            },
            self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
            const abiEncoder = self._lookupAbiEncoder('symbol()');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<string
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};
    public setApprovalForAll = {
        async sendTransactionAsync(
            _operator: string,
            _authorized: boolean,
            txData: Partial<TxData> = {},
            estimateGasFactor?: number,
        ): Promise<Response> {
            const self = this as any as DebtEngineContract;
            const encodedData = self._strictEncodeArguments('setApprovalForAll(address,bool)', [_operator,
    _authorized
    ]);
            const contractDefaults = self._web3Wrapper.getContractDefaults();
            const defaultFromAddress = (await self._web3Wrapper.getAvailableAddressesAsync())[0];
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                {
                    from: defaultFromAddress,
                    ...contractDefaults
                },
                self.setApprovalForAll.estimateGasAsync.bind<DebtEngineContract, any, Promise<number>>(
                    self,
                    _operator,
    _authorized
    ,
                    estimateGasFactor,
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            const receipt = self._web3Wrapper.awaitTransactionSuccessAsync(txHash);
    
            return new Response(txHash, receipt);
        },
        async estimateGasAsync(
            _operator: string,
            _authorized: boolean,
            factor?: number,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as DebtEngineContract;
            const encodedData = self._strictEncodeArguments('setApprovalForAll(address,bool)',
            [_operator,
    _authorized
    ]);
            const contractDefaults = self._web3Wrapper.getContractDefaults();
            const defaultFromAddress = (await self._web3Wrapper.getAvailableAddressesAsync())[0];
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                {
                    from: defaultFromAddress,
                    ...contractDefaults
                },
            );
            const gas = await self._web3Wrapper.estimateGasAsync(txDataWithDefaults);
            const networkGasLimit = (await self._web3Wrapper.getBlockWithTransactionDataAsync('latest')).gasLimit;
            const _factor = factor === undefined ? self._defaultEstimateGasFactor : factor;
            const _safetyGasEstimation = Math.round(_factor * gas);
            return (_safetyGasEstimation > networkGasLimit) ? networkGasLimit : _safetyGasEstimation;
        },
        getABIEncodedTransactionData(
            _operator: string,
            _authorized: boolean,
        ): string {
            const self = this as any as DebtEngineContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('setApprovalForAll(address,bool)',
            [_operator,
    _authorized
    ]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            _operator: string,
            _authorized: boolean,
        callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<void
        > {
            const self = this as any as DebtEngineContract;
            const encodedData = self._strictEncodeArguments('setApprovalForAll(address,bool)', [_operator,
        _authorized
        ]);
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
            {
            to: self.address,
            ...callData,
            data: encodedData,
            },
            self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
            const abiEncoder = self._lookupAbiEncoder('setApprovalForAll(address,bool)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<void
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};
    public debts = {
        async callAsync(
            index_0: string,
        callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<[boolean, BigNumber, string, string, string]
        > {
            const self = this as any as DebtEngineContract;
            const encodedData = self._strictEncodeArguments('debts(bytes32)', [index_0
        ]);
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
            {
            to: self.address,
            ...callData,
            data: encodedData,
            },
            self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
            const abiEncoder = self._lookupAbiEncoder('debts(bytes32)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<[boolean, BigNumber, string, string, string]
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};
    public safeTransferFrom2 = {
        async sendTransactionAsync(
            _from: string,
            _to: string,
            _assetId: BigNumber,
            _userData: string,
            txData: Partial<TxData> = {},
            estimateGasFactor?: number,
        ): Promise<Response> {
            const self = this as any as DebtEngineContract;
            const encodedData = self._strictEncodeArguments('safeTransferFrom(address,address,uint256,bytes)', [_from,
    _to,
    _assetId,
    _userData
    ]);
            const contractDefaults = self._web3Wrapper.getContractDefaults();
            const defaultFromAddress = (await self._web3Wrapper.getAvailableAddressesAsync())[0];
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                {
                    from: defaultFromAddress,
                    ...contractDefaults
                },
                self.safeTransferFrom2.estimateGasAsync.bind<DebtEngineContract, any, Promise<number>>(
                    self,
                    _from,
    _to,
    _assetId,
    _userData
    ,
                    estimateGasFactor,
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            const receipt = self._web3Wrapper.awaitTransactionSuccessAsync(txHash);
    
            return new Response(txHash, receipt);
        },
        async estimateGasAsync(
            _from: string,
            _to: string,
            _assetId: BigNumber,
            _userData: string,
            factor?: number,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as DebtEngineContract;
            const encodedData = self._strictEncodeArguments('safeTransferFrom(address,address,uint256,bytes)',
            [_from,
    _to,
    _assetId,
    _userData
    ]);
            const contractDefaults = self._web3Wrapper.getContractDefaults();
            const defaultFromAddress = (await self._web3Wrapper.getAvailableAddressesAsync())[0];
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                {
                    from: defaultFromAddress,
                    ...contractDefaults
                },
            );
            const gas = await self._web3Wrapper.estimateGasAsync(txDataWithDefaults);
            const networkGasLimit = (await self._web3Wrapper.getBlockWithTransactionDataAsync('latest')).gasLimit;
            const _factor = factor === undefined ? self._defaultEstimateGasFactor : factor;
            const _safetyGasEstimation = Math.round(_factor * gas);
            return (_safetyGasEstimation > networkGasLimit) ? networkGasLimit : _safetyGasEstimation;
        },
        getABIEncodedTransactionData(
            _from: string,
            _to: string,
            _assetId: BigNumber,
            _userData: string,
        ): string {
            const self = this as any as DebtEngineContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('safeTransferFrom(address,address,uint256,bytes)',
            [_from,
    _to,
    _assetId,
    _userData
    ]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            _from: string,
            _to: string,
            _assetId: BigNumber,
            _userData: string,
        callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<void
        > {
            const self = this as any as DebtEngineContract;
            const encodedData = self._strictEncodeArguments('safeTransferFrom(address,address,uint256,bytes)', [_from,
        _to,
        _assetId,
        _userData
        ]);
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
            {
            to: self.address,
            ...callData,
            data: encodedData,
            },
            self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
            const abiEncoder = self._lookupAbiEncoder('safeTransferFrom(address,address,uint256,bytes)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<void
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};
    public tokenURI = {
        async callAsync(
            _tokenId: BigNumber,
        callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<string
        > {
            const self = this as any as DebtEngineContract;
            const encodedData = self._strictEncodeArguments('tokenURI(uint256)', [_tokenId
        ]);
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
            {
            to: self.address,
            ...callData,
            data: encodedData,
            },
            self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
            const abiEncoder = self._lookupAbiEncoder('tokenURI(uint256)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<string
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};
    public isApprovedForAll = {
        async callAsync(
            _operator: string,
            _assetHolder: string,
        callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<boolean
        > {
            const self = this as any as DebtEngineContract;
            const encodedData = self._strictEncodeArguments('isApprovedForAll(address,address)', [_operator,
        _assetHolder
        ]);
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
            {
            to: self.address,
            ...callData,
            data: encodedData,
            },
            self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
            const abiEncoder = self._lookupAbiEncoder('isApprovedForAll(address,address)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<boolean
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};
    public transferOwnership = {
        async sendTransactionAsync(
            _newOwner: string,
            txData: Partial<TxData> = {},
            estimateGasFactor?: number,
        ): Promise<Response> {
            const self = this as any as DebtEngineContract;
            const encodedData = self._strictEncodeArguments('transferOwnership(address)', [_newOwner
    ]);
            const contractDefaults = self._web3Wrapper.getContractDefaults();
            const defaultFromAddress = (await self._web3Wrapper.getAvailableAddressesAsync())[0];
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                {
                    from: defaultFromAddress,
                    ...contractDefaults
                },
                self.transferOwnership.estimateGasAsync.bind<DebtEngineContract, any, Promise<number>>(
                    self,
                    _newOwner
    ,
                    estimateGasFactor,
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            const receipt = self._web3Wrapper.awaitTransactionSuccessAsync(txHash);
    
            return new Response(txHash, receipt);
        },
        async estimateGasAsync(
            _newOwner: string,
            factor?: number,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as DebtEngineContract;
            const encodedData = self._strictEncodeArguments('transferOwnership(address)',
            [_newOwner
    ]);
            const contractDefaults = self._web3Wrapper.getContractDefaults();
            const defaultFromAddress = (await self._web3Wrapper.getAvailableAddressesAsync())[0];
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                {
                    from: defaultFromAddress,
                    ...contractDefaults
                },
            );
            const gas = await self._web3Wrapper.estimateGasAsync(txDataWithDefaults);
            const networkGasLimit = (await self._web3Wrapper.getBlockWithTransactionDataAsync('latest')).gasLimit;
            const _factor = factor === undefined ? self._defaultEstimateGasFactor : factor;
            const _safetyGasEstimation = Math.round(_factor * gas);
            return (_safetyGasEstimation > networkGasLimit) ? networkGasLimit : _safetyGasEstimation;
        },
        getABIEncodedTransactionData(
            _newOwner: string,
        ): string {
            const self = this as any as DebtEngineContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('transferOwnership(address)',
            [_newOwner
    ]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            _newOwner: string,
        callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<void
        > {
            const self = this as any as DebtEngineContract;
            const encodedData = self._strictEncodeArguments('transferOwnership(address)', [_newOwner
        ]);
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
            {
            to: self.address,
            ...callData,
            data: encodedData,
            },
            self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
            const abiEncoder = self._lookupAbiEncoder('transferOwnership(address)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<void
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};
    public token = {
        async callAsync(
        callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<string
        > {
            const self = this as any as DebtEngineContract;
            const encodedData = self._strictEncodeArguments('token()', []);
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
            {
            to: self.address,
            ...callData,
            data: encodedData,
            },
            self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
            const abiEncoder = self._lookupAbiEncoder('token()');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<string
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};
    public setURIProvider = {
        async sendTransactionAsync(
            _provider: string,
            txData: Partial<TxData> = {},
            estimateGasFactor?: number,
        ): Promise<Response> {
            const self = this as any as DebtEngineContract;
            const encodedData = self._strictEncodeArguments('setURIProvider(address)', [_provider
    ]);
            const contractDefaults = self._web3Wrapper.getContractDefaults();
            const defaultFromAddress = (await self._web3Wrapper.getAvailableAddressesAsync())[0];
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                {
                    from: defaultFromAddress,
                    ...contractDefaults
                },
                self.setURIProvider.estimateGasAsync.bind<DebtEngineContract, any, Promise<number>>(
                    self,
                    _provider
    ,
                    estimateGasFactor,
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            const receipt = self._web3Wrapper.awaitTransactionSuccessAsync(txHash);
    
            return new Response(txHash, receipt);
        },
        async estimateGasAsync(
            _provider: string,
            factor?: number,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as DebtEngineContract;
            const encodedData = self._strictEncodeArguments('setURIProvider(address)',
            [_provider
    ]);
            const contractDefaults = self._web3Wrapper.getContractDefaults();
            const defaultFromAddress = (await self._web3Wrapper.getAvailableAddressesAsync())[0];
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                {
                    from: defaultFromAddress,
                    ...contractDefaults
                },
            );
            const gas = await self._web3Wrapper.estimateGasAsync(txDataWithDefaults);
            const networkGasLimit = (await self._web3Wrapper.getBlockWithTransactionDataAsync('latest')).gasLimit;
            const _factor = factor === undefined ? self._defaultEstimateGasFactor : factor;
            const _safetyGasEstimation = Math.round(_factor * gas);
            return (_safetyGasEstimation > networkGasLimit) ? networkGasLimit : _safetyGasEstimation;
        },
        getABIEncodedTransactionData(
            _provider: string,
        ): string {
            const self = this as any as DebtEngineContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('setURIProvider(address)',
            [_provider
    ]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            _provider: string,
        callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<void
        > {
            const self = this as any as DebtEngineContract;
            const encodedData = self._strictEncodeArguments('setURIProvider(address)', [_provider
        ]);
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
            {
            to: self.address,
            ...callData,
            data: encodedData,
            },
            self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
            const abiEncoder = self._lookupAbiEncoder('setURIProvider(address)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<void
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};
    public create = {
        async sendTransactionAsync(
            _model: string,
            _owner: string,
            _oracle: string,
            _data: string,
            txData: Partial<TxData> = {},
            estimateGasFactor?: number,
        ): Promise<Response> {
            const self = this as any as DebtEngineContract;
            const encodedData = self._strictEncodeArguments('create(address,address,address,bytes)', [_model,
    _owner,
    _oracle,
    _data
    ]);
            const contractDefaults = self._web3Wrapper.getContractDefaults();
            const defaultFromAddress = (await self._web3Wrapper.getAvailableAddressesAsync())[0];
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                {
                    from: defaultFromAddress,
                    ...contractDefaults
                },
                self.create.estimateGasAsync.bind<DebtEngineContract, any, Promise<number>>(
                    self,
                    _model,
    _owner,
    _oracle,
    _data
    ,
                    estimateGasFactor,
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            const receipt = self._web3Wrapper.awaitTransactionSuccessAsync(txHash);
    
            return new Response(txHash, receipt);
        },
        async estimateGasAsync(
            _model: string,
            _owner: string,
            _oracle: string,
            _data: string,
            factor?: number,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as DebtEngineContract;
            const encodedData = self._strictEncodeArguments('create(address,address,address,bytes)',
            [_model,
    _owner,
    _oracle,
    _data
    ]);
            const contractDefaults = self._web3Wrapper.getContractDefaults();
            const defaultFromAddress = (await self._web3Wrapper.getAvailableAddressesAsync())[0];
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                {
                    from: defaultFromAddress,
                    ...contractDefaults
                },
            );
            const gas = await self._web3Wrapper.estimateGasAsync(txDataWithDefaults);
            const networkGasLimit = (await self._web3Wrapper.getBlockWithTransactionDataAsync('latest')).gasLimit;
            const _factor = factor === undefined ? self._defaultEstimateGasFactor : factor;
            const _safetyGasEstimation = Math.round(_factor * gas);
            return (_safetyGasEstimation > networkGasLimit) ? networkGasLimit : _safetyGasEstimation;
        },
        getABIEncodedTransactionData(
            _model: string,
            _owner: string,
            _oracle: string,
            _data: string,
        ): string {
            const self = this as any as DebtEngineContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('create(address,address,address,bytes)',
            [_model,
    _owner,
    _oracle,
    _data
    ]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            _model: string,
            _owner: string,
            _oracle: string,
            _data: string,
        callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<string
        > {
            const self = this as any as DebtEngineContract;
            const encodedData = self._strictEncodeArguments('create(address,address,address,bytes)', [_model,
        _owner,
        _oracle,
        _data
        ]);
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
            {
            to: self.address,
            ...callData,
            data: encodedData,
            },
            self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
            const abiEncoder = self._lookupAbiEncoder('create(address,address,address,bytes)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<string
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};
    public create2 = {
        async sendTransactionAsync(
            _model: string,
            _owner: string,
            _oracle: string,
            _salt: BigNumber,
            _data: string,
            txData: Partial<TxData> = {},
            estimateGasFactor?: number,
        ): Promise<Response> {
            const self = this as any as DebtEngineContract;
            const encodedData = self._strictEncodeArguments('create2(address,address,address,uint256,bytes)', [_model,
    _owner,
    _oracle,
    _salt,
    _data
    ]);
            const contractDefaults = self._web3Wrapper.getContractDefaults();
            const defaultFromAddress = (await self._web3Wrapper.getAvailableAddressesAsync())[0];
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                {
                    from: defaultFromAddress,
                    ...contractDefaults
                },
                self.create2.estimateGasAsync.bind<DebtEngineContract, any, Promise<number>>(
                    self,
                    _model,
    _owner,
    _oracle,
    _salt,
    _data
    ,
                    estimateGasFactor,
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            const receipt = self._web3Wrapper.awaitTransactionSuccessAsync(txHash);
    
            return new Response(txHash, receipt);
        },
        async estimateGasAsync(
            _model: string,
            _owner: string,
            _oracle: string,
            _salt: BigNumber,
            _data: string,
            factor?: number,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as DebtEngineContract;
            const encodedData = self._strictEncodeArguments('create2(address,address,address,uint256,bytes)',
            [_model,
    _owner,
    _oracle,
    _salt,
    _data
    ]);
            const contractDefaults = self._web3Wrapper.getContractDefaults();
            const defaultFromAddress = (await self._web3Wrapper.getAvailableAddressesAsync())[0];
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                {
                    from: defaultFromAddress,
                    ...contractDefaults
                },
            );
            const gas = await self._web3Wrapper.estimateGasAsync(txDataWithDefaults);
            const networkGasLimit = (await self._web3Wrapper.getBlockWithTransactionDataAsync('latest')).gasLimit;
            const _factor = factor === undefined ? self._defaultEstimateGasFactor : factor;
            const _safetyGasEstimation = Math.round(_factor * gas);
            return (_safetyGasEstimation > networkGasLimit) ? networkGasLimit : _safetyGasEstimation;
        },
        getABIEncodedTransactionData(
            _model: string,
            _owner: string,
            _oracle: string,
            _salt: BigNumber,
            _data: string,
        ): string {
            const self = this as any as DebtEngineContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('create2(address,address,address,uint256,bytes)',
            [_model,
    _owner,
    _oracle,
    _salt,
    _data
    ]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            _model: string,
            _owner: string,
            _oracle: string,
            _salt: BigNumber,
            _data: string,
        callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<string
        > {
            const self = this as any as DebtEngineContract;
            const encodedData = self._strictEncodeArguments('create2(address,address,address,uint256,bytes)', [_model,
        _owner,
        _oracle,
        _salt,
        _data
        ]);
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
            {
            to: self.address,
            ...callData,
            data: encodedData,
            },
            self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
            const abiEncoder = self._lookupAbiEncoder('create2(address,address,address,uint256,bytes)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<string
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};
    public create3 = {
        async sendTransactionAsync(
            _model: string,
            _owner: string,
            _oracle: string,
            _salt: BigNumber,
            _data: string,
            txData: Partial<TxData> = {},
            estimateGasFactor?: number,
        ): Promise<Response> {
            const self = this as any as DebtEngineContract;
            const encodedData = self._strictEncodeArguments('create3(address,address,address,uint256,bytes)', [_model,
    _owner,
    _oracle,
    _salt,
    _data
    ]);
            const contractDefaults = self._web3Wrapper.getContractDefaults();
            const defaultFromAddress = (await self._web3Wrapper.getAvailableAddressesAsync())[0];
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                {
                    from: defaultFromAddress,
                    ...contractDefaults
                },
                self.create3.estimateGasAsync.bind<DebtEngineContract, any, Promise<number>>(
                    self,
                    _model,
    _owner,
    _oracle,
    _salt,
    _data
    ,
                    estimateGasFactor,
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            const receipt = self._web3Wrapper.awaitTransactionSuccessAsync(txHash);
    
            return new Response(txHash, receipt);
        },
        async estimateGasAsync(
            _model: string,
            _owner: string,
            _oracle: string,
            _salt: BigNumber,
            _data: string,
            factor?: number,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as DebtEngineContract;
            const encodedData = self._strictEncodeArguments('create3(address,address,address,uint256,bytes)',
            [_model,
    _owner,
    _oracle,
    _salt,
    _data
    ]);
            const contractDefaults = self._web3Wrapper.getContractDefaults();
            const defaultFromAddress = (await self._web3Wrapper.getAvailableAddressesAsync())[0];
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                {
                    from: defaultFromAddress,
                    ...contractDefaults
                },
            );
            const gas = await self._web3Wrapper.estimateGasAsync(txDataWithDefaults);
            const networkGasLimit = (await self._web3Wrapper.getBlockWithTransactionDataAsync('latest')).gasLimit;
            const _factor = factor === undefined ? self._defaultEstimateGasFactor : factor;
            const _safetyGasEstimation = Math.round(_factor * gas);
            return (_safetyGasEstimation > networkGasLimit) ? networkGasLimit : _safetyGasEstimation;
        },
        getABIEncodedTransactionData(
            _model: string,
            _owner: string,
            _oracle: string,
            _salt: BigNumber,
            _data: string,
        ): string {
            const self = this as any as DebtEngineContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('create3(address,address,address,uint256,bytes)',
            [_model,
    _owner,
    _oracle,
    _salt,
    _data
    ]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            _model: string,
            _owner: string,
            _oracle: string,
            _salt: BigNumber,
            _data: string,
        callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<string
        > {
            const self = this as any as DebtEngineContract;
            const encodedData = self._strictEncodeArguments('create3(address,address,address,uint256,bytes)', [_model,
        _owner,
        _oracle,
        _salt,
        _data
        ]);
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
            {
            to: self.address,
            ...callData,
            data: encodedData,
            },
            self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
            const abiEncoder = self._lookupAbiEncoder('create3(address,address,address,uint256,bytes)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<string
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};
    public buildId = {
        async callAsync(
            _creator: string,
            _nonce: BigNumber,
        callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<string
        > {
            const self = this as any as DebtEngineContract;
            const encodedData = self._strictEncodeArguments('buildId(address,uint256)', [_creator,
        _nonce
        ]);
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
            {
            to: self.address,
            ...callData,
            data: encodedData,
            },
            self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
            const abiEncoder = self._lookupAbiEncoder('buildId(address,uint256)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<string
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};
    public buildId2 = {
        async callAsync(
            _creator: string,
            _model: string,
            _oracle: string,
            _salt: BigNumber,
            _data: string,
        callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<string
        > {
            const self = this as any as DebtEngineContract;
            const encodedData = self._strictEncodeArguments('buildId2(address,address,address,uint256,bytes)', [_creator,
        _model,
        _oracle,
        _salt,
        _data
        ]);
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
            {
            to: self.address,
            ...callData,
            data: encodedData,
            },
            self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
            const abiEncoder = self._lookupAbiEncoder('buildId2(address,address,address,uint256,bytes)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<string
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};
    public buildId3 = {
        async callAsync(
            _creator: string,
            _salt: BigNumber,
        callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<string
        > {
            const self = this as any as DebtEngineContract;
            const encodedData = self._strictEncodeArguments('buildId3(address,uint256)', [_creator,
        _salt
        ]);
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
            {
            to: self.address,
            ...callData,
            data: encodedData,
            },
            self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
            const abiEncoder = self._lookupAbiEncoder('buildId3(address,uint256)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<string
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};
    public pay = {
        async sendTransactionAsync(
            _id: string,
            _amount: BigNumber,
            _origin: string,
            _oracleData: string,
            txData: Partial<TxData> = {},
            estimateGasFactor?: number,
        ): Promise<Response> {
            const self = this as any as DebtEngineContract;
            const encodedData = self._strictEncodeArguments('pay(bytes32,uint256,address,bytes)', [_id,
    _amount,
    _origin,
    _oracleData
    ]);
            const contractDefaults = self._web3Wrapper.getContractDefaults();
            const defaultFromAddress = (await self._web3Wrapper.getAvailableAddressesAsync())[0];
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                {
                    from: defaultFromAddress,
                    ...contractDefaults
                },
                self.pay.estimateGasAsync.bind<DebtEngineContract, any, Promise<number>>(
                    self,
                    _id,
    _amount,
    _origin,
    _oracleData
    ,
                    estimateGasFactor,
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            const receipt = self._web3Wrapper.awaitTransactionSuccessAsync(txHash);
    
            return new Response(txHash, receipt);
        },
        async estimateGasAsync(
            _id: string,
            _amount: BigNumber,
            _origin: string,
            _oracleData: string,
            factor?: number,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as DebtEngineContract;
            const encodedData = self._strictEncodeArguments('pay(bytes32,uint256,address,bytes)',
            [_id,
    _amount,
    _origin,
    _oracleData
    ]);
            const contractDefaults = self._web3Wrapper.getContractDefaults();
            const defaultFromAddress = (await self._web3Wrapper.getAvailableAddressesAsync())[0];
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                {
                    from: defaultFromAddress,
                    ...contractDefaults
                },
            );
            const gas = await self._web3Wrapper.estimateGasAsync(txDataWithDefaults);
            const networkGasLimit = (await self._web3Wrapper.getBlockWithTransactionDataAsync('latest')).gasLimit;
            const _factor = factor === undefined ? self._defaultEstimateGasFactor : factor;
            const _safetyGasEstimation = Math.round(_factor * gas);
            return (_safetyGasEstimation > networkGasLimit) ? networkGasLimit : _safetyGasEstimation;
        },
        getABIEncodedTransactionData(
            _id: string,
            _amount: BigNumber,
            _origin: string,
            _oracleData: string,
        ): string {
            const self = this as any as DebtEngineContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('pay(bytes32,uint256,address,bytes)',
            [_id,
    _amount,
    _origin,
    _oracleData
    ]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            _id: string,
            _amount: BigNumber,
            _origin: string,
            _oracleData: string,
        callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<[BigNumber, BigNumber]
        > {
            const self = this as any as DebtEngineContract;
            const encodedData = self._strictEncodeArguments('pay(bytes32,uint256,address,bytes)', [_id,
        _amount,
        _origin,
        _oracleData
        ]);
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
            {
            to: self.address,
            ...callData,
            data: encodedData,
            },
            self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
            const abiEncoder = self._lookupAbiEncoder('pay(bytes32,uint256,address,bytes)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<[BigNumber, BigNumber]
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};
    public payToken = {
        async sendTransactionAsync(
            id: string,
            amount: BigNumber,
            origin: string,
            oracleData: string,
            txData: Partial<TxData> = {},
            estimateGasFactor?: number,
        ): Promise<Response> {
            const self = this as any as DebtEngineContract;
            const encodedData = self._strictEncodeArguments('payToken(bytes32,uint256,address,bytes)', [id,
    amount,
    origin,
    oracleData
    ]);
            const contractDefaults = self._web3Wrapper.getContractDefaults();
            const defaultFromAddress = (await self._web3Wrapper.getAvailableAddressesAsync())[0];
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                {
                    from: defaultFromAddress,
                    ...contractDefaults
                },
                self.payToken.estimateGasAsync.bind<DebtEngineContract, any, Promise<number>>(
                    self,
                    id,
    amount,
    origin,
    oracleData
    ,
                    estimateGasFactor,
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            const receipt = self._web3Wrapper.awaitTransactionSuccessAsync(txHash);
    
            return new Response(txHash, receipt);
        },
        async estimateGasAsync(
            id: string,
            amount: BigNumber,
            origin: string,
            oracleData: string,
            factor?: number,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as DebtEngineContract;
            const encodedData = self._strictEncodeArguments('payToken(bytes32,uint256,address,bytes)',
            [id,
    amount,
    origin,
    oracleData
    ]);
            const contractDefaults = self._web3Wrapper.getContractDefaults();
            const defaultFromAddress = (await self._web3Wrapper.getAvailableAddressesAsync())[0];
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                {
                    from: defaultFromAddress,
                    ...contractDefaults
                },
            );
            const gas = await self._web3Wrapper.estimateGasAsync(txDataWithDefaults);
            const networkGasLimit = (await self._web3Wrapper.getBlockWithTransactionDataAsync('latest')).gasLimit;
            const _factor = factor === undefined ? self._defaultEstimateGasFactor : factor;
            const _safetyGasEstimation = Math.round(_factor * gas);
            return (_safetyGasEstimation > networkGasLimit) ? networkGasLimit : _safetyGasEstimation;
        },
        getABIEncodedTransactionData(
            id: string,
            amount: BigNumber,
            origin: string,
            oracleData: string,
        ): string {
            const self = this as any as DebtEngineContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('payToken(bytes32,uint256,address,bytes)',
            [id,
    amount,
    origin,
    oracleData
    ]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            id: string,
            amount: BigNumber,
            origin: string,
            oracleData: string,
        callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<[BigNumber, BigNumber]
        > {
            const self = this as any as DebtEngineContract;
            const encodedData = self._strictEncodeArguments('payToken(bytes32,uint256,address,bytes)', [id,
        amount,
        origin,
        oracleData
        ]);
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
            {
            to: self.address,
            ...callData,
            data: encodedData,
            },
            self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
            const abiEncoder = self._lookupAbiEncoder('payToken(bytes32,uint256,address,bytes)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<[BigNumber, BigNumber]
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};
    public payBatch = {
        async sendTransactionAsync(
            _ids: string[],
            _amounts: BigNumber[],
            _origin: string,
            _oracle: string,
            _oracleData: string,
            txData: Partial<TxData> = {},
            estimateGasFactor?: number,
        ): Promise<Response> {
            const self = this as any as DebtEngineContract;
            const encodedData = self._strictEncodeArguments('payBatch(bytes32[],uint256[],address,address,bytes)', [_ids,
    _amounts,
    _origin,
    _oracle,
    _oracleData
    ]);
            const contractDefaults = self._web3Wrapper.getContractDefaults();
            const defaultFromAddress = (await self._web3Wrapper.getAvailableAddressesAsync())[0];
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                {
                    from: defaultFromAddress,
                    ...contractDefaults
                },
                self.payBatch.estimateGasAsync.bind<DebtEngineContract, any, Promise<number>>(
                    self,
                    _ids,
    _amounts,
    _origin,
    _oracle,
    _oracleData
    ,
                    estimateGasFactor,
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            const receipt = self._web3Wrapper.awaitTransactionSuccessAsync(txHash);
    
            return new Response(txHash, receipt);
        },
        async estimateGasAsync(
            _ids: string[],
            _amounts: BigNumber[],
            _origin: string,
            _oracle: string,
            _oracleData: string,
            factor?: number,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as DebtEngineContract;
            const encodedData = self._strictEncodeArguments('payBatch(bytes32[],uint256[],address,address,bytes)',
            [_ids,
    _amounts,
    _origin,
    _oracle,
    _oracleData
    ]);
            const contractDefaults = self._web3Wrapper.getContractDefaults();
            const defaultFromAddress = (await self._web3Wrapper.getAvailableAddressesAsync())[0];
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                {
                    from: defaultFromAddress,
                    ...contractDefaults
                },
            );
            const gas = await self._web3Wrapper.estimateGasAsync(txDataWithDefaults);
            const networkGasLimit = (await self._web3Wrapper.getBlockWithTransactionDataAsync('latest')).gasLimit;
            const _factor = factor === undefined ? self._defaultEstimateGasFactor : factor;
            const _safetyGasEstimation = Math.round(_factor * gas);
            return (_safetyGasEstimation > networkGasLimit) ? networkGasLimit : _safetyGasEstimation;
        },
        getABIEncodedTransactionData(
            _ids: string[],
            _amounts: BigNumber[],
            _origin: string,
            _oracle: string,
            _oracleData: string,
        ): string {
            const self = this as any as DebtEngineContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('payBatch(bytes32[],uint256[],address,address,bytes)',
            [_ids,
    _amounts,
    _origin,
    _oracle,
    _oracleData
    ]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            _ids: string[],
            _amounts: BigNumber[],
            _origin: string,
            _oracle: string,
            _oracleData: string,
        callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<[BigNumber[], BigNumber[]]
        > {
            const self = this as any as DebtEngineContract;
            const encodedData = self._strictEncodeArguments('payBatch(bytes32[],uint256[],address,address,bytes)', [_ids,
        _amounts,
        _origin,
        _oracle,
        _oracleData
        ]);
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
            {
            to: self.address,
            ...callData,
            data: encodedData,
            },
            self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
            const abiEncoder = self._lookupAbiEncoder('payBatch(bytes32[],uint256[],address,address,bytes)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<[BigNumber[], BigNumber[]]
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};
    public payTokenBatch = {
        async sendTransactionAsync(
            _ids: string[],
            _tokenAmounts: BigNumber[],
            _origin: string,
            _oracle: string,
            _oracleData: string,
            txData: Partial<TxData> = {},
            estimateGasFactor?: number,
        ): Promise<Response> {
            const self = this as any as DebtEngineContract;
            const encodedData = self._strictEncodeArguments('payTokenBatch(bytes32[],uint256[],address,address,bytes)', [_ids,
    _tokenAmounts,
    _origin,
    _oracle,
    _oracleData
    ]);
            const contractDefaults = self._web3Wrapper.getContractDefaults();
            const defaultFromAddress = (await self._web3Wrapper.getAvailableAddressesAsync())[0];
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                {
                    from: defaultFromAddress,
                    ...contractDefaults
                },
                self.payTokenBatch.estimateGasAsync.bind<DebtEngineContract, any, Promise<number>>(
                    self,
                    _ids,
    _tokenAmounts,
    _origin,
    _oracle,
    _oracleData
    ,
                    estimateGasFactor,
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            const receipt = self._web3Wrapper.awaitTransactionSuccessAsync(txHash);
    
            return new Response(txHash, receipt);
        },
        async estimateGasAsync(
            _ids: string[],
            _tokenAmounts: BigNumber[],
            _origin: string,
            _oracle: string,
            _oracleData: string,
            factor?: number,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as DebtEngineContract;
            const encodedData = self._strictEncodeArguments('payTokenBatch(bytes32[],uint256[],address,address,bytes)',
            [_ids,
    _tokenAmounts,
    _origin,
    _oracle,
    _oracleData
    ]);
            const contractDefaults = self._web3Wrapper.getContractDefaults();
            const defaultFromAddress = (await self._web3Wrapper.getAvailableAddressesAsync())[0];
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                {
                    from: defaultFromAddress,
                    ...contractDefaults
                },
            );
            const gas = await self._web3Wrapper.estimateGasAsync(txDataWithDefaults);
            const networkGasLimit = (await self._web3Wrapper.getBlockWithTransactionDataAsync('latest')).gasLimit;
            const _factor = factor === undefined ? self._defaultEstimateGasFactor : factor;
            const _safetyGasEstimation = Math.round(_factor * gas);
            return (_safetyGasEstimation > networkGasLimit) ? networkGasLimit : _safetyGasEstimation;
        },
        getABIEncodedTransactionData(
            _ids: string[],
            _tokenAmounts: BigNumber[],
            _origin: string,
            _oracle: string,
            _oracleData: string,
        ): string {
            const self = this as any as DebtEngineContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('payTokenBatch(bytes32[],uint256[],address,address,bytes)',
            [_ids,
    _tokenAmounts,
    _origin,
    _oracle,
    _oracleData
    ]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            _ids: string[],
            _tokenAmounts: BigNumber[],
            _origin: string,
            _oracle: string,
            _oracleData: string,
        callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<[BigNumber[], BigNumber[]]
        > {
            const self = this as any as DebtEngineContract;
            const encodedData = self._strictEncodeArguments('payTokenBatch(bytes32[],uint256[],address,address,bytes)', [_ids,
        _tokenAmounts,
        _origin,
        _oracle,
        _oracleData
        ]);
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
            {
            to: self.address,
            ...callData,
            data: encodedData,
            },
            self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
            const abiEncoder = self._lookupAbiEncoder('payTokenBatch(bytes32[],uint256[],address,address,bytes)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<[BigNumber[], BigNumber[]]
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};
    public run = {
        async sendTransactionAsync(
            _id: string,
            txData: Partial<TxData> = {},
            estimateGasFactor?: number,
        ): Promise<Response> {
            const self = this as any as DebtEngineContract;
            const encodedData = self._strictEncodeArguments('run(bytes32)', [_id
    ]);
            const contractDefaults = self._web3Wrapper.getContractDefaults();
            const defaultFromAddress = (await self._web3Wrapper.getAvailableAddressesAsync())[0];
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                {
                    from: defaultFromAddress,
                    ...contractDefaults
                },
                self.run.estimateGasAsync.bind<DebtEngineContract, any, Promise<number>>(
                    self,
                    _id
    ,
                    estimateGasFactor,
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            const receipt = self._web3Wrapper.awaitTransactionSuccessAsync(txHash);
    
            return new Response(txHash, receipt);
        },
        async estimateGasAsync(
            _id: string,
            factor?: number,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as DebtEngineContract;
            const encodedData = self._strictEncodeArguments('run(bytes32)',
            [_id
    ]);
            const contractDefaults = self._web3Wrapper.getContractDefaults();
            const defaultFromAddress = (await self._web3Wrapper.getAvailableAddressesAsync())[0];
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                {
                    from: defaultFromAddress,
                    ...contractDefaults
                },
            );
            const gas = await self._web3Wrapper.estimateGasAsync(txDataWithDefaults);
            const networkGasLimit = (await self._web3Wrapper.getBlockWithTransactionDataAsync('latest')).gasLimit;
            const _factor = factor === undefined ? self._defaultEstimateGasFactor : factor;
            const _safetyGasEstimation = Math.round(_factor * gas);
            return (_safetyGasEstimation > networkGasLimit) ? networkGasLimit : _safetyGasEstimation;
        },
        getABIEncodedTransactionData(
            _id: string,
        ): string {
            const self = this as any as DebtEngineContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('run(bytes32)',
            [_id
    ]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            _id: string,
        callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<boolean
        > {
            const self = this as any as DebtEngineContract;
            const encodedData = self._strictEncodeArguments('run(bytes32)', [_id
        ]);
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
            {
            to: self.address,
            ...callData,
            data: encodedData,
            },
            self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
            const abiEncoder = self._lookupAbiEncoder('run(bytes32)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<boolean
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};
    public withdraw = {
        async sendTransactionAsync(
            _id: string,
            _to: string,
            txData: Partial<TxData> = {},
            estimateGasFactor?: number,
        ): Promise<Response> {
            const self = this as any as DebtEngineContract;
            const encodedData = self._strictEncodeArguments('withdraw(bytes32,address)', [_id,
    _to
    ]);
            const contractDefaults = self._web3Wrapper.getContractDefaults();
            const defaultFromAddress = (await self._web3Wrapper.getAvailableAddressesAsync())[0];
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                {
                    from: defaultFromAddress,
                    ...contractDefaults
                },
                self.withdraw.estimateGasAsync.bind<DebtEngineContract, any, Promise<number>>(
                    self,
                    _id,
    _to
    ,
                    estimateGasFactor,
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            const receipt = self._web3Wrapper.awaitTransactionSuccessAsync(txHash);
    
            return new Response(txHash, receipt);
        },
        async estimateGasAsync(
            _id: string,
            _to: string,
            factor?: number,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as DebtEngineContract;
            const encodedData = self._strictEncodeArguments('withdraw(bytes32,address)',
            [_id,
    _to
    ]);
            const contractDefaults = self._web3Wrapper.getContractDefaults();
            const defaultFromAddress = (await self._web3Wrapper.getAvailableAddressesAsync())[0];
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                {
                    from: defaultFromAddress,
                    ...contractDefaults
                },
            );
            const gas = await self._web3Wrapper.estimateGasAsync(txDataWithDefaults);
            const networkGasLimit = (await self._web3Wrapper.getBlockWithTransactionDataAsync('latest')).gasLimit;
            const _factor = factor === undefined ? self._defaultEstimateGasFactor : factor;
            const _safetyGasEstimation = Math.round(_factor * gas);
            return (_safetyGasEstimation > networkGasLimit) ? networkGasLimit : _safetyGasEstimation;
        },
        getABIEncodedTransactionData(
            _id: string,
            _to: string,
        ): string {
            const self = this as any as DebtEngineContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('withdraw(bytes32,address)',
            [_id,
    _to
    ]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            _id: string,
            _to: string,
        callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<BigNumber
        > {
            const self = this as any as DebtEngineContract;
            const encodedData = self._strictEncodeArguments('withdraw(bytes32,address)', [_id,
        _to
        ]);
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
            {
            to: self.address,
            ...callData,
            data: encodedData,
            },
            self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
            const abiEncoder = self._lookupAbiEncoder('withdraw(bytes32,address)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<BigNumber
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};
    public withdrawPartial = {
        async sendTransactionAsync(
            _id: string,
            _to: string,
            _amount: BigNumber,
            txData: Partial<TxData> = {},
            estimateGasFactor?: number,
        ): Promise<Response> {
            const self = this as any as DebtEngineContract;
            const encodedData = self._strictEncodeArguments('withdrawPartial(bytes32,address,uint256)', [_id,
    _to,
    _amount
    ]);
            const contractDefaults = self._web3Wrapper.getContractDefaults();
            const defaultFromAddress = (await self._web3Wrapper.getAvailableAddressesAsync())[0];
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                {
                    from: defaultFromAddress,
                    ...contractDefaults
                },
                self.withdrawPartial.estimateGasAsync.bind<DebtEngineContract, any, Promise<number>>(
                    self,
                    _id,
    _to,
    _amount
    ,
                    estimateGasFactor,
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            const receipt = self._web3Wrapper.awaitTransactionSuccessAsync(txHash);
    
            return new Response(txHash, receipt);
        },
        async estimateGasAsync(
            _id: string,
            _to: string,
            _amount: BigNumber,
            factor?: number,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as DebtEngineContract;
            const encodedData = self._strictEncodeArguments('withdrawPartial(bytes32,address,uint256)',
            [_id,
    _to,
    _amount
    ]);
            const contractDefaults = self._web3Wrapper.getContractDefaults();
            const defaultFromAddress = (await self._web3Wrapper.getAvailableAddressesAsync())[0];
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                {
                    from: defaultFromAddress,
                    ...contractDefaults
                },
            );
            const gas = await self._web3Wrapper.estimateGasAsync(txDataWithDefaults);
            const networkGasLimit = (await self._web3Wrapper.getBlockWithTransactionDataAsync('latest')).gasLimit;
            const _factor = factor === undefined ? self._defaultEstimateGasFactor : factor;
            const _safetyGasEstimation = Math.round(_factor * gas);
            return (_safetyGasEstimation > networkGasLimit) ? networkGasLimit : _safetyGasEstimation;
        },
        getABIEncodedTransactionData(
            _id: string,
            _to: string,
            _amount: BigNumber,
        ): string {
            const self = this as any as DebtEngineContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('withdrawPartial(bytes32,address,uint256)',
            [_id,
    _to,
    _amount
    ]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            _id: string,
            _to: string,
            _amount: BigNumber,
        callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<boolean
        > {
            const self = this as any as DebtEngineContract;
            const encodedData = self._strictEncodeArguments('withdrawPartial(bytes32,address,uint256)', [_id,
        _to,
        _amount
        ]);
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
            {
            to: self.address,
            ...callData,
            data: encodedData,
            },
            self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
            const abiEncoder = self._lookupAbiEncoder('withdrawPartial(bytes32,address,uint256)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<boolean
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};
    public withdrawBatch = {
        async sendTransactionAsync(
            _ids: string[],
            _to: string,
            txData: Partial<TxData> = {},
            estimateGasFactor?: number,
        ): Promise<Response> {
            const self = this as any as DebtEngineContract;
            const encodedData = self._strictEncodeArguments('withdrawBatch(bytes32[],address)', [_ids,
    _to
    ]);
            const contractDefaults = self._web3Wrapper.getContractDefaults();
            const defaultFromAddress = (await self._web3Wrapper.getAvailableAddressesAsync())[0];
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                {
                    from: defaultFromAddress,
                    ...contractDefaults
                },
                self.withdrawBatch.estimateGasAsync.bind<DebtEngineContract, any, Promise<number>>(
                    self,
                    _ids,
    _to
    ,
                    estimateGasFactor,
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            const receipt = self._web3Wrapper.awaitTransactionSuccessAsync(txHash);
    
            return new Response(txHash, receipt);
        },
        async estimateGasAsync(
            _ids: string[],
            _to: string,
            factor?: number,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as DebtEngineContract;
            const encodedData = self._strictEncodeArguments('withdrawBatch(bytes32[],address)',
            [_ids,
    _to
    ]);
            const contractDefaults = self._web3Wrapper.getContractDefaults();
            const defaultFromAddress = (await self._web3Wrapper.getAvailableAddressesAsync())[0];
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                {
                    from: defaultFromAddress,
                    ...contractDefaults
                },
            );
            const gas = await self._web3Wrapper.estimateGasAsync(txDataWithDefaults);
            const networkGasLimit = (await self._web3Wrapper.getBlockWithTransactionDataAsync('latest')).gasLimit;
            const _factor = factor === undefined ? self._defaultEstimateGasFactor : factor;
            const _safetyGasEstimation = Math.round(_factor * gas);
            return (_safetyGasEstimation > networkGasLimit) ? networkGasLimit : _safetyGasEstimation;
        },
        getABIEncodedTransactionData(
            _ids: string[],
            _to: string,
        ): string {
            const self = this as any as DebtEngineContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('withdrawBatch(bytes32[],address)',
            [_ids,
    _to
    ]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            _ids: string[],
            _to: string,
        callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<BigNumber
        > {
            const self = this as any as DebtEngineContract;
            const encodedData = self._strictEncodeArguments('withdrawBatch(bytes32[],address)', [_ids,
        _to
        ]);
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
            {
            to: self.address,
            ...callData,
            data: encodedData,
            },
            self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
            const abiEncoder = self._lookupAbiEncoder('withdrawBatch(bytes32[],address)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<BigNumber
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};
    public getStatus = {
        async callAsync(
            _id: string,
        callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<BigNumber
        > {
            const self = this as any as DebtEngineContract;
            const encodedData = self._strictEncodeArguments('getStatus(bytes32)', [_id
        ]);
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
            {
            to: self.address,
            ...callData,
            data: encodedData,
            },
            self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
            const abiEncoder = self._lookupAbiEncoder('getStatus(bytes32)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<BigNumber
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};
    public static async deployAsync(
        bytecode: string,
        abi: ContractAbi,
        supportedProvider: SupportedProvider,
        txDefaults: Partial<TxData>,
            _token: string,
    ): Promise<DebtEngineContract> {
        const provider = providerUtils.standardizeOrThrow(supportedProvider);
        const constructorAbi = BaseContract._lookupConstructorAbi(abi);
        [_token
] = BaseContract._formatABIDataItemList(
            constructorAbi.inputs,
            [_token
],
            BaseContract._bigNumberToString,
        );
        const iface = new ethers.utils.Interface(abi);
        const deployInfo = iface.deployFunction;
        const txData = deployInfo.encode(bytecode, [_token
]);
        const web3Wrapper = new Web3Wrapper(provider);
        const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
            {data: txData},
            txDefaults,
            web3Wrapper.estimateGasAsync.bind(web3Wrapper),
        );
        const txHash = await web3Wrapper.sendTransactionAsync(txDataWithDefaults);
        logUtils.log(`transactionHash: ${txHash}`);
        const txReceipt = await web3Wrapper.awaitTransactionSuccessAsync(txHash);
        logUtils.log(`DebtEngine successfully deployed at ${txReceipt.contractAddress}`);
        const contractInstance = new DebtEngineContract(abi, txReceipt.contractAddress as string, provider, txDefaults);
        contractInstance.constructorArgs = [_token
];
        return contractInstance;
    }
    constructor(abi: ContractAbi, address: string, supportedProvider: SupportedProvider, txDefaults?: Partial<TxData>, defaultEstimateGasFactor?: number) {
        super('DebtEngine', abi, address, supportedProvider, txDefaults);
        this._defaultEstimateGasFactor = defaultEstimateGasFactor === undefined ? 1.1 : defaultEstimateGasFactor;
        this._web3Wrapper.abiDecoder.addABI(abi);
        classUtils.bindAll(this, ['_abiEncoderByFunctionSignature', 'address', 'abi', '_web3Wrapper', '_defaultEstimateGasFactor']);
    }
} // tslint:disable:max-file-line-count
// tslint:enable:no-unbound-method