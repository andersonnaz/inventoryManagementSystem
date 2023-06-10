import { Customer } from "../entities/Customer";
import { CustomerRepository } from "../repositories/CustomerRepository";

export class FindCustomerService {
    private readonly _customerRepository: CustomerRepository;

    constructor(customerRepository: CustomerRepository){
        this._customerRepository = customerRepository;
    }

    async execute(param: string): Promise<Customer> {
        const customer = await this._customerRepository.findOne(param);
        if(!customer) {
            throw new Error('customer not found!');
        }
        return customer;
    }
}