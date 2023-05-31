import { Repository } from "../../../shared/database/Repository";
import { Supplier } from "../entities/Supplier";

export class DeleteSupplierService {
    private readonly _supplierRepository: Repository<Supplier>;

    constructor(supplierRepository: Repository<Supplier>){
        this._supplierRepository = supplierRepository;
    }

    async execute(cnpj: string): Promise<boolean> {
        await this._supplierRepository.delete(cnpj);
        return true;
    }
}