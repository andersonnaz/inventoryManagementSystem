import { Repository } from "../../../shared/database/Repository";
import { Customer } from '../entities/Customer';

export class CreateCustomerService {
    private readonly _customerRepository: Repository<Customer>;

    constructor(customerRepository: Repository<Customer>){
        this._customerRepository = customerRepository;
    }

    async execute(name: string, cpf: string, address: string, phone: string): Promise<Customer> {
        const customer = Customer.create(name, cpf, address, phone);
        await this._customerRepository.save(customer);
        return customer;
    }
}