import { Customer } from "../entities/Customer";
import { CustomerRepository } from "./CustomerRepository";

type IUpdateCustomer = Partial<Customer>;
class CustomerInMemoryRepository implements CustomerRepository {
        
    private _database: Customer[] = [];

    save(customer: Customer): void {
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
            return undefined;
        }
        return customer;
    }

    update(cpf: string, updateCustomer: IUpdateCustomer): Customer {
        const customer = this.findOne(cpf);
        if(!customer){
            throw new Error('customer not found!');
        }
        Object.assign(customer, updateCustomer);
        return customer;
    }

    delete(cpf: string): void {
        const customers = this.list();
        const filteredCustomers = customers.filter((customer) => {
            return customer.cpf !== cpf;
        })
        if(customers.length === 0){
            throw new Error('customer not found!');
        }
        this._database = filteredCustomers;
    }

}

export default new CustomerInMemoryRepository();