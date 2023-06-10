import { Repository } from '../../../shared/database/Repository';
import { Supplier } from '../entities/Supplier';
import { CreateSupplierDTO } from '../dto/CreateSupplierDTO';
import { SupplierRepository } from '../repositories/SupplierRepository';

export class CreateSupplierService {
    private readonly _supplierRepository: SupplierRepository;

    constructor(supplierRepository: SupplierRepository){
        this._supplierRepository = supplierRepository;
    }

    async execute({name, cnpj, address, phone}: CreateSupplierDTO ): Promise<Supplier> {
        const supplier = Supplier.create(name, cnpj, address, phone);
        await this._supplierRepository.save(supplier);
        return supplier;
    }
}