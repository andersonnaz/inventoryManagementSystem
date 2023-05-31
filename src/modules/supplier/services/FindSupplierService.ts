import { Repository } from "../../../shared/database/Repository";
import { Supplier } from "../entities/Supplier";

export class FindSupplierService {
    private readonly _supplierRepository: Repository<Supplier>;

    constructor(supplierRepository: Repository<Supplier>){
        this._supplierRepository = supplierRepository;
    }

    async execute(param: string): Promise<Supplier> {
        const supplier = await this._supplierRepository.findOne(param);
        if(!supplier){
            throw new Error('supplier not found!');
        }
        return supplier;
    } 
}