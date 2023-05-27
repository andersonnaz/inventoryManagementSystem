import { Repository } from "../../../shared/database/Repository";
import { Customer } from "../entities/Customer";

class CustomerInMemoryRepository implements Repository<Customer> {
    private _database: Customer[] = [];

}

export default new CustomerInMemoryRepository();