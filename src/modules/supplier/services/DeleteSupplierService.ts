import { SupplierRepository } from "../repositories/SupplierRepository";

export class DeleteSupplierService {
    private readonly _supplierRepository: SupplierRepository;

    constructor(supplierRepository: SupplierRepository){
        this._supplierRepository = supplierRepository;
    }

    async execute(cnpj: string): Promise<boolean> {
        await this._supplierRepository.delete(cnpj);
        return true;
    }
}