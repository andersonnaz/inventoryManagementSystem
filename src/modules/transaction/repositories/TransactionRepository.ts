import { Repository } from "../../../shared/database/Repository";
import { Transaction } from "../entities/Transaction";

export interface TransactionRepository extends Repository<Transaction> {
    listByCustomer(): Transaction[];
    listBySupplier(): Transaction[];
}