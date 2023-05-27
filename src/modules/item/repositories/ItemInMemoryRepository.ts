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

}

export default new ItemInMemoryRepository();