import { Item } from "../entities/Item";
import { ItemRepository } from "../repositories/ItemRepository";

export class ListBySupplierService {
    private readonly _itemRepository: ItemRepository;

    constructor(itemRepository: ItemRepository){
        this._itemRepository = itemRepository;
    }

    async execute(supplier: string): Promise<Item[]> {
        return this._itemRepository.listBySupplier(supplier);
    }
}