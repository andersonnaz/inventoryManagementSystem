import { Item } from "../entities/Item";
import { ItemRepository } from "../repositories/ItemRepository"

export class UpdateItemService {
    private readonly _itemRepository: ItemRepository;

    constructor(itemRepository: ItemRepository){
        this._itemRepository = itemRepository;
    };

    async execute(param: string, updateItem: Partial<Item>): Promise<Item> {
        const item = await this._itemRepository.update(param, updateItem);
        return item;
    }
}