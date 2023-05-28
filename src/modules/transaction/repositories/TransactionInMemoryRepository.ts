import { Transaction } from "../entities/Transaction";
import { TransactionRepository } from "./TransactionRepository";

class TransactionInMemoryRepository implements TransactionRepository {
    private _database: Transaction[] = [];

    save(transaction: Transaction) {
        this._database.push(transaction);
    }
}

export default new TransactionInMemoryRepository();