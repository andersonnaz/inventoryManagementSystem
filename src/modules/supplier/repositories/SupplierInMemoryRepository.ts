import { Repository } from "../../../shared/database/Repository";
import { Supplier } from "../entities/Supplier";

class SupplierInMemoryRepository implements Repository<Supplier>{
    private _database: Supplier[] = [];

    save(supplier: Supplier) {
        this._database.push(supplier);
    }

    list(): Supplier[] {
        return this._database;
    }
}

export default new SupplierInMemoryRepository();