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

    findOne(param: string): Customer | undefined {
        const customer = this._database.find((customer) => {
            if(customer.cpf === param){return customer};
            if(customer.name === param){return customer};
        })
        if(!customer){
            throw new Error('customer not found');
        }
        return customer;
    }

}

export default new CustomerInMemoryRepository();