import { ItemRepository } from "../repositories/ItemRepository";
import { Item } from '../../item/entities/Item';
import { Supplier } from "../../supplier/entities/Supplier";
import { Repository } from "../../../shared/database/Repository";
import { CreateItemDTO } from "../dto/CreateItemDTO";

export class CreateItemService {
    private readonly _itemRepository: ItemRepository;
    private readonly _supplierRepository: Repository<Supplier>;

    constructor(itemRepository: ItemRepository, supplierRepository: Repository<Supplier>){
        this._itemRepository = itemRepository;
        this._supplierRepository = supplierRepository;
    }

    async execute({name, category, supplier}: CreateItemDTO): Promise<Item> {
        const supplierFound = await this._supplierRepository.findOne(supplier);
        if(!supplierFound) {
            throw new Error('supplier not found!');
        }
        const item = Item.create(name, category, supplierFound.name);
        await this._itemRepository.save(item);
        return item;
    };
}