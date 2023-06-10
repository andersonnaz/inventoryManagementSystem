import { ItemRepository } from "../repositories/ItemRepository";
import { Item } from '../../item/entities/Item';
import { CreateItemDTO } from "../dto/CreateItemDTO";
import { SupplierRepository } from '../../supplier/repositories/SupplierRepository';

export class CreateItemService {
    private readonly _itemRepository: ItemRepository;
    private readonly _supplierRepository: SupplierRepository;

    constructor(itemRepository: ItemRepository, supplierRepository: SupplierRepository){
        this._itemRepository = itemRepository;
        this._supplierRepository = supplierRepository;
    }

    async execute({name, category, supplier, price}: CreateItemDTO): Promise<Item> {
        const supplierFound = await this._supplierRepository.findOne(supplier);
        if(!supplierFound) {
            throw new Error('supplier not found!');
        }
        const item = Item.create(name, category, supplierFound.name, price);
        await this._itemRepository.save(item);
        return item;
    };
}