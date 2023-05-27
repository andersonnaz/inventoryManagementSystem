import { Item } from "../entities/Item";
import { ItemRepository } from "./ItemRepository";

class ItemInMemoryRepository implements ItemRepository {
    private _database: Item[] = [];

}

export default new ItemInMemoryRepository();