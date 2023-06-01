import { TransactionRepository } from "../repositories/TransactionRepository";
import { Transaction } from "../entities/Transaction";

export class ListTransactionService {
    private readonly _transactionRepository: TransactionRepository;

    constructor(transactionRepository: TransactionRepository){
        this._transactionRepository = transactionRepository;
    }

    async execute(): Promise<Transaction[]> {
        const transactions = await this._transactionRepository.list();
        return transactions;
    }
}