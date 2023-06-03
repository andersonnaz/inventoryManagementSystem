import { Repository } from "../../../shared/database/Repository";
import { Item } from "../entities/Item";

export interface ItemRepository extends Repository<Item> {
    listBySupplier(supplier: string): Item[];
    listByCategory(category: string): Item[];
}