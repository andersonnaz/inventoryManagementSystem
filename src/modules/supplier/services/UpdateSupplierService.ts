import { Repository } from "../../../shared/database/Repository";
import { Supplier } from "../entities/Supplier";

export class UpdateSupplierService {
    private readonly _supplierRepository: Repository<Supplier>;
    
    constructor(supplierRepository: Repository<Supplier>){
        this._supplierRepository = supplierRepository;
    }

    async execute(cnpj: string, updateSupplier: Supplier): Promise<Supplier> {
        const supplier = await this._supplierRepository.update(cnpj, updateSupplier);
        return supplier;
    }
}