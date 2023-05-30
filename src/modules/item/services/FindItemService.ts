import { Item } from "../entities/Item";
import { ItemRepository } from "../repositories/ItemRepository";

export class FindItemService {
    private readonly _itemRepository: ItemRepository;

    constructor(itemRepository: ItemRepository) {
        this._itemRepository = itemRepository;
    }

    async execute(param: string): Promise<Item> {
        const item = await this._itemRepository.findOne(param);
        if(!item) {
            throw new Error('item not found!');
        }
        return item;
    }
}