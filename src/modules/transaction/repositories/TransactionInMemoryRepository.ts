import { Customer } from "../../customer/entities/Customer";
import { Supplier } from "../../supplier/entities/Supplier";
import { Transaction } from "../entities/Transaction";
import { TransactionRepository } from "./TransactionRepository";

type IUpdateTransaction = Partial<Transaction>;

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

    update(id: string, updateTransaction: IUpdateTransaction): Transaction {
        const transaction = this.findOne(id);
        if(!transaction){
            throw new Error('transaction not found!');
        }
        Object.assign(transaction, updateTransaction);
        return transaction;
    }

    delete(id: string){
        const transactions = this.list();
        const filteredTransactions = transactions.filter((transaction) => {
            if(transaction.entity instanceof Customer){return transaction.entity.cpf !== id};
            if(transaction.entity instanceof Supplier){return transaction.entity.cnpj !== id};
        })
        if(filteredTransactions.length === 0) {
            throw new Error('transaction not found!');
        }
        this._database = filteredTransactions;
    }

    listByCustomer(): Transaction[] {
        const transactions = this.list();
        const filteredCustomers = transactions.filter((transaction) => {
            return transaction.entity instanceof Customer;
        })
        if(filteredCustomers.length === 0) {
            throw new Error('customers not found!');
        }
        return filteredCustomers;
    }
}

export default new TransactionInMemoryRepository();