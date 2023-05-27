import { Customer } from "../../customer/entities/Customer";
import { Item } from "../../item/entities/Item";
import { Supplier } from "../../supplier/entities/Supplier";

export class Transaction {
    private _items: Item[];
    private _entity: Customer | Supplier;

    private constructor(items: Item[], entity: Customer | Supplier){
        this._items = items;
        this._entity = entity;
    }
}