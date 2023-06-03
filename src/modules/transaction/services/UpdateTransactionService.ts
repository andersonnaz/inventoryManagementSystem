import { Transaction } from "../entities/Transaction";
import { TransactionRepository } from "../repositories/TransactionRepository";

export class UpdateTransactionService {
    private readonly _transactionRepository: TransactionRepository;

    constructor(transactionRepository: TransactionRepository){
        this._transactionRepository = transactionRepository;
    }

    async execute(id: string, updateTransaction: Partial<Transaction>): Promise<Transaction>{
        const transaction = await this._transactionRepository.update(id, updateTransaction);
        return transaction;
    }
}