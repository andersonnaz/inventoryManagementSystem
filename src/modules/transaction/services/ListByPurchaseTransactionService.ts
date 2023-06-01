import { Transaction } from "../entities/Transaction";
import { TransactionRepository } from "../repositories/TransactionRepository";

export class ListByPurchaseTransactionService {
    private readonly _transactionRepository: TransactionRepository;

    constructor(transactionRepository: TransactionRepository){
        this._transactionRepository = transactionRepository;
    }

    async execute(): Promise<Transaction[]> {
        const purchaseTransactions = await this._transactionRepository.listBySupplier();
        return purchaseTransactions;
    }
}