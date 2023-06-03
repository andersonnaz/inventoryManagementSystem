import { Customer } from "../../customer/entities/Customer";
import { Item } from "../../item/entities/Item";
import { Supplier } from "../../supplier/entities/Supplier";

export interface CreateTransactionDTO {
    entity: Customer | Supplier;
    items: Item[];
}