import { TransactionRepository } from "./TransactionRepository";

class TransactionInMemoryRepository implements TransactionRepository {
    private _database: Transaction[] = [];

}

export default new TransactionInMemoryRepository();