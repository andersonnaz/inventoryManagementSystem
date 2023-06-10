import { Supplier } from "../entities/Supplier";
import { SupplierRepository } from "../repositories/SupplierRepository";

export class FindSupplierService {
    private readonly _supplierRepository: SupplierRepository;

    constructor(supplierRepository: SupplierRepository){
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