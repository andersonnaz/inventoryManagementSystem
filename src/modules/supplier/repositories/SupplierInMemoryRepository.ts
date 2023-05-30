import { Repository } from "../../../shared/database/Repository";
import { Supplier } from "../entities/Supplier";

type IUpdateSupplier = Partial<Supplier>;

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
            return undefined;
        }
        return supplier;
    }

    update(cnpj: string, updateSupplier: IUpdateSupplier): Supplier {
        const supplier = this.findOne(cnpj);
        if(!supplier){
            throw new Error('supplier not found');
        }
        Object.assign(supplier, updateSupplier);
        return supplier;
    }

    delete(cnpj: string) {
        const suppliers = this.list();
        const filteredSuppliers = suppliers.filter((supplier) => {
            return supplier.cnpj !== cnpj;
        })
        if(filteredSuppliers.length === 0) {
            throw new Error('supplier not found!');
        }
        this._database = filteredSuppliers;
    }

}

export default new SupplierInMemoryRepository();