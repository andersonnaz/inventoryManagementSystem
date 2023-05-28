import { Repository } from "../../../shared/database/Repository";
import { Customer } from "../entities/Customer";

class CustomerInMemoryRepository implements Repository<Customer> {
    private _database: Customer[] = [];

    save(customer: Customer) {
        this._database.push(customer);
    }

}

export default new CustomerInMemoryRepository();