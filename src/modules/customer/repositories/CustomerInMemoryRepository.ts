import { Repository } from "../../../shared/database/Repository";
import { Customer } from "../entities/Customer";

class CustomerInMemoryRepository implements Repository<Customer> {
    private _database: Customer[] = [];

    save(customer: Customer) {
        this._database.push(customer);
    }

    list(): Customer[] {
        return this._database;
    }

}

export default new CustomerInMemoryRepository();