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

    public static create(items: Item[], entity: Customer | Supplier): Transaction {
        this.validate(items, entity)
        const transaction = new Transaction(items, entity);
        return transaction;
    }

    private static validate(items: Item[], entity: Customer | Supplier): boolean {
        if(items.length === 0){
            throw new Error('items empty');
        }
        if(!entity){
            throw new Error('entity invalid!');
        }
        return true;
    }

    get items(): Item[] {
        return this._items;
    }

    get entity(): Customer | Supplier {
        return this._entity;
    }

    set items(items: Item[]) {
        this._items = items;
    }
}