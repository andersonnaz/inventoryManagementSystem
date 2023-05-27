import { Item } from "../entities/Item";
import { ItemRepository } from "./ItemRepository";

class ItemInMemoryRepository implements ItemRepository {
    private _database: Item[] = [];

    save(item: Item) {
        this._database.push(item);
    }

}

export default new ItemInMemoryRepository();