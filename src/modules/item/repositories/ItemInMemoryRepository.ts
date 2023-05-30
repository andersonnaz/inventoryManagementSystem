import { Supplier } from "../../supplier/entities/Supplier";
import { Item } from "../entities/Item";
import { ItemRepository } from "./ItemRepository";

type IUpdateItem = Partial<Item>;

class ItemInMemoryRepository implements ItemRepository {
    private _database: Item[] = [];

    save(item: Item) {
        this._database.push(item);
    }

    list(): Item[] {
        return this._database;
    }

    findOne(param: string): Item | undefined {
        const items = this._database;
        const item = items.find((item) => {
            if(item.id === param){ return item };
            if(item.name === param){ return item };
        })
        if(!item){ 
            return undefined; 
        };
        return item;
    }

    update(id: string, updateItem: IUpdateItem): Item {
        const item = this.findOne(id);
        if(!item){
            throw new Error('item not found!');
        }
        Object.assign(item, updateItem);
        return item;
    }

    delete(id: string) {
        const items = this.list();
        const filteredItems = items.filter((item) => {
            return item.id !== id;
        })
        if(filteredItems.length === 0){
            throw new Error('item not found!');
        }
        this._database = filteredItems;
    }

    listBySupplier(): Item[] {
        const items = this.list();
        const filteredItems = items.filter((item) => {
            return item instanceof Supplier;
        })
        return filteredItems;
    }

    listByCategory(category: string): Item[] {
        const items = this.list();
        const filteredItems = items.filter((item) => {
            return item.category === category;
        })
        return filteredItems;
    }

}

export default new ItemInMemoryRepository();