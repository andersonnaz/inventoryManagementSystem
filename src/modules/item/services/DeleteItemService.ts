import { ItemRepository } from "../repositories/ItemRepository";

export class DeleteItemService {
    private readonly _itemRepository: ItemRepository;

    constructor(itemRepository: ItemRepository){
        this._itemRepository = itemRepository;
    }

    async execute(id: string): Promise<boolean> {
        await this._itemRepository.delete(id);
        return true;
    }
}