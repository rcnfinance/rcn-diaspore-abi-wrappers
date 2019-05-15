import { BaseContract } from '@0x/base-contract';
import { BlockParamLiteral, CallData, ContractAbi, TxData, SupportedProvider } from 'ethereum-types';
import { BigNumber } from '@0x/utils';
import { Response } from '../Response';
export declare class LoanApproverContract extends BaseContract {
    private _defaultEstimateGasFactor;
    supportsInterface: {
        callAsync(interfaceID: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
    };
    approveRequest: {
        sendTransactionAsync(_futureDebt: string, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<Response>;
        estimateGasAsync(_futureDebt: string, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_futureDebt: string): string;
        callAsync(_futureDebt: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    settleApproveRequest: {
        sendTransactionAsync(_requestData: string, _loanData: string, _isBorrower: boolean, _id: BigNumber, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<Response>;
        estimateGasAsync(_requestData: string, _loanData: string, _isBorrower: boolean, _id: BigNumber, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_requestData: string, _loanData: string, _isBorrower: boolean, _id: BigNumber): string;
        callAsync(_requestData: string, _loanData: string, _isBorrower: boolean, _id: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    static deployAsync(bytecode: string, abi: ContractAbi, supportedProvider: SupportedProvider, txDefaults: Partial<TxData>): Promise<LoanApproverContract>;
    constructor(abi: ContractAbi, address: string, supportedProvider: SupportedProvider, txDefaults?: Partial<TxData>, defaultEstimateGasFactor?: number);
}
//# sourceMappingURL=loan_approver.d.ts.map