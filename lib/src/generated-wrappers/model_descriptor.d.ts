import { BaseContract } from '@0x/base-contract';
import { BlockParamLiteral, CallData, ContractAbi, TxData, SupportedProvider } from 'ethereum-types';
import { BigNumber } from '@0x/utils';
export declare class ModelDescriptorContract extends BaseContract {
    private _defaultEstimateGasFactor;
    simFirstObligation: {
        callAsync(data: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<[BigNumber, BigNumber]>;
    };
    simTotalObligation: {
        callAsync(data: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
    };
    simDuration: {
        callAsync(data: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
    };
    simPunitiveInterestRate: {
        callAsync(data: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
    };
    simFrequency: {
        callAsync(data: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
    };
    simInstallments: {
        callAsync(data: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
    };
    static deployAsync(bytecode: string, abi: ContractAbi, supportedProvider: SupportedProvider, txDefaults: Partial<TxData>): Promise<ModelDescriptorContract>;
    constructor(abi: ContractAbi, address: string, supportedProvider: SupportedProvider, txDefaults?: Partial<TxData>, defaultEstimateGasFactor?: number);
}
//# sourceMappingURL=model_descriptor.d.ts.map