import { Item } from "../entities/Item";
import { ItemRepository } from "../repositories/ItemRepository";

export class ListItemService {
    private readonly _itemRepository: ItemRepository;

    constructor(itemRepository: ItemRepository){
        this._itemRepository = itemRepository;
    };

    async execute(): Promise<Item[]> {
        const items = await this._itemRepository.list();
        return items;
    }
}