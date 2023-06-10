import { Supplier } from "../entities/Supplier";
import { SupplierRepository } from "../repositories/SupplierRepository";

export class ListSupplierService {
    private readonly _supplierRepository: SupplierRepository;

    constructor(supplierRepository: SupplierRepository){
        this._supplierRepository = supplierRepository;
    }

    async execute(): Promise<Supplier[]> {
        const suppliers = await this._supplierRepository.list();
        return suppliers;
    }
}