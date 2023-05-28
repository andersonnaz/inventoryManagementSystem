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

    findOne(param: string): Supplier | undefined {
        const suppliers = this.list();
        const supplier = suppliers.find((supplier) => {
            if(supplier.cnpj === param){return supplier};
            if(supplier.name === param){return supplier};
        });
        if(!supplier){
            throw new Error('supplier not found!');
        }
        return supplier;
    }
}

export default new SupplierInMemoryRepository();