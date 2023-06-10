import { Deletable } from "../../../shared/database/Repository/Deletable";
import { Listable } from "../../../shared/database/Repository/Listable";
import { Updatable } from "../../../shared/database/Repository/Updatable";
import { Findable } from "../../../shared/database/Repository/Findable";
import { Saveable } from "../../../shared/database/Repository/Saveable";
import { Item } from "../entities/Item";

export interface ItemRepository extends
    Saveable<Item>,
    Deletable,
    Findable<Item>,
    Listable<Item>,
    Updatable<Item> {

    listBySupplier(supplier: string): Item[];
    listByCategory(category: string): Item[];
}