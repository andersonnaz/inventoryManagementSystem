import { Transaction } from "../entities/Transaction";
import { TransactionRepository } from "../repositories/TransactionRepository";

export class FindTransactionService {
    private readonly _transactionRepository: TransactionRepository;

    constructor(transactionRepository: TransactionRepository){
        this._transactionRepository = transactionRepository;
    }

    async execute(param: string): Promise<Transaction> {
        const transaction = await this._transactionRepository.findOne(param);
        if(!transaction){
            throw new Error('transaction not found!');
        }
        return transaction;
    }
}