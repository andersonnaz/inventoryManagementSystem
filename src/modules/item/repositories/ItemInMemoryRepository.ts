import { Item } from "../entities/Item";
import { ItemRepository } from "./ItemRepository";

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
        if(!item){ throw new Error('Item not found!')};
        return item;
    }

}

export default new ItemInMemoryRepository();