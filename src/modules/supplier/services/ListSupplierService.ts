import { Repository } from "../../../shared/database/Repository";
import { Supplier } from "../entities/Supplier";

export class ListSupplierService {
    private readonly _supplierRepository: Repository<Supplier>;

    constructor(supplierRepository: Repository<Supplier>){
        this._supplierRepository = supplierRepository;
    }

    async execute(): Promise<Supplier[]> {
        const suppliers = await this._supplierRepository.list();
        return suppliers;
    }
}