import { Repository } from "../../../shared/database/Repository";
import { Supplier } from "../entities/Supplier";

class SupplierInMemoryRepository implements Repository<Supplier>{
    private _database: Supplier[] = [];
}

export default new SupplierInMemoryRepository();