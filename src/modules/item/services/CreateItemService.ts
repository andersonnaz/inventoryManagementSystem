import { ItemRepository } from "../repositories/ItemRepository";
import { Item } from '../../item/entities/Item';
import { Supplier } from "../../supplier/entities/Supplier";
import { Repository } from "../../../shared/database/Repository";

export class CreateItemService {
    private readonly _itemRepository: ItemRepository;
    private readonly _supplierRepository: Repository<Supplier>;

    constructor(itemRepository: ItemRepository, supplierRepository: Repository<Supplier>){
        this._itemRepository = itemRepository;
        this._supplierRepository = supplierRepository;
    }

    async execute(name: string, category: string, supplierName: string): Promise<Item> {
        const supplier = await this._supplierRepository.findOne(supplierName);
        if(!supplier) {
            throw new Error('supplier not found!');
        }
        const item = Item.create(name, category, supplier.name);
        await this._itemRepository.save(item);
        return item;
    };
}