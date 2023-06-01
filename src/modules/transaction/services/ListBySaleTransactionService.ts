import { Transaction } from "../entities/Transaction";
import { TransactionRepository } from "../repositories/TransactionRepository";

export class ListBySaleTransactionService {
    private readonly _transactionRepository: TransactionRepository;

    constructor(transactionRepository: TransactionRepository){
        this._transactionRepository = transactionRepository;
    }

    async execute(): Promise<Transaction[]> {
        const saleTransactions = await this._transactionRepository.listByCustomer();
        return saleTransactions;
    }
}