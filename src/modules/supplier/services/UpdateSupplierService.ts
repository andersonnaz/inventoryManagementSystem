import { Supplier } from "../entities/Supplier";
import { SupplierRepository } from "../repositories/SupplierRepository";

export class UpdateSupplierService {
    private readonly _supplierRepository: SupplierRepository;
    
    constructor(supplierRepository: SupplierRepository){
        this._supplierRepository = supplierRepository;
    }

    async execute(cnpj: string, updateSupplier: Partial<Supplier>): Promise<Supplier> {
        const supplier = await this._supplierRepository.update(cnpj, updateSupplier);
        return supplier;
    }
}