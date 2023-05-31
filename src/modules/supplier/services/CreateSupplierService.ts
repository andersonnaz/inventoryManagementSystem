import { Repository } from '../../../shared/database/Repository';
import { Supplier } from '../entities/Supplier';

export class CreateSupplierService {
    private readonly _supplierRepository: Repository<Supplier>;

    constructor(supplierRepository: Repository<Supplier>){
        this._supplierRepository = supplierRepository;
    }

    async execute(name: string, cnpj: string, address: string, phone: string): Promise<Supplier> {
        const supplier = Supplier.create(name, cnpj, address, phone);
        await this._supplierRepository.save(supplier);
        return supplier;
    }
}