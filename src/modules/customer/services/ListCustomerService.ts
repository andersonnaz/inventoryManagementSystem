import { Customer } from "../entities/Customer";
import { CustomerRepository } from "../repositories/CustomerRepository";

export class ListCustomerService {
    private readonly _customerRepository: CustomerRepository;

    constructor(customerRepository: CustomerRepository){
        this._customerRepository = customerRepository;
    }

    async execute(): Promise<Customer[]> {
        const customers = await this._customerRepository.list();
        return customers;
    }
}