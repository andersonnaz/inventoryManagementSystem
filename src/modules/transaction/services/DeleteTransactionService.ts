import { TransactionRepository } from "../repositories/TransactionRepository";

export class DeleteTransactionService {
    private readonly _transactionRepository: TransactionRepository;

    constructor(transactionRepository: TransactionRepository){
        this._transactionRepository = transactionRepository;
    }

    async execute(id: string): Promise<boolean> {
        await this._transactionRepository.delete(id);
        return true;
    }
}