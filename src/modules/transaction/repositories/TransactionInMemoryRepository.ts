import { Customer } from "../../customer/entities/Customer";
import { Supplier } from "../../supplier/entities/Supplier";
import { Transaction } from "../entities/Transaction";
import { TransactionRepository } from "./TransactionRepository";

class TransactionInMemoryRepository implements TransactionRepository {
    private _database: Transaction[] = [];

    save(transaction: Transaction) {
        this._database.push(transaction);
    }

    list(): Transaction[] {
        return this._database;
    }

    findOne(param: string): Transaction | undefined {
        const transaction = this._database.find((transaction) => {
            if(transaction.entity instanceof Customer){return transaction.entity.cpf === param};
            if(transaction.entity instanceof Supplier){return transaction.entity.cnpj === param};
        })
        if(!transaction){
            throw new Error('transaction not found!');
        }
        return transaction;
    }
}

export default new TransactionInMemoryRepository();