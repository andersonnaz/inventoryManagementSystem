import { Repository } from '../../../shared/database/Repository';
import { Supplier } from '../entities/Supplier';
import { CreateSupplierDTO } from '../dto/CreateSupplierDTO';

export class CreateSupplierService {
    private readonly _supplierRepository: Repository<Supplier>;

    constructor(supplierRepository: Repository<Supplier>){
        this._supplierRepository = supplierRepository;
    }

    async execute({name, cnpj, address, phone}: CreateSupplierDTO ): Promise<Supplier> {
        const supplier = Supplier.create(name, cnpj, address, phone);
        await this._supplierRepository.save(supplier);
        return supplier;
    }
}