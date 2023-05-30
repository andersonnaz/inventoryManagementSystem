import { Item } from "../entities/Item";
import { ItemRepository } from "../repositories/ItemRepository";

export class ListByCategoryService {
    private readonly _itemRepository: ItemRepository;

    constructor(itemRepository: ItemRepository){
        this._itemRepository = itemRepository;
    }

    async execute(category: string): Promise<Item[]> {
        return this._itemRepository.listByCategory(category);
    }
}