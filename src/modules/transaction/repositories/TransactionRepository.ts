import { Deletable } from "../../../shared/database/Repository/Deletable";
import { Listable } from "../../../shared/database/Repository/Listable";
import { Findable } from "../../../shared/database/Repository/Findable";
import { Saveable } from "../../../shared/database/Repository/Saveable";
import { Transaction } from "../entities/Transaction";

export interface TransactionRepository extends
    Saveable<Transaction>,
    Deletable,
    Findable<Transaction>,
    Listable<Transaction>{

    listByCustomer(): Transaction[];
    listBySupplier(): Transaction[];
}