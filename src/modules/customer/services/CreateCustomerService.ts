import { CreateCustomerDTO } from "../dto/CreateCustomerDTO";
import { Customer } from '../entities/Customer';
import { CustomerRepository } from '../repositories/CustomerRepository';

export class CreateCustomerService {
    private readonly _customerRepository: CustomerRepository;

    constructor(customerRepository: CustomerRepository){
        this._customerRepository = customerRepository;
    }

    async execute(data: CreateCustomerDTO): Promise<Customer> {
        const customer = Customer.create(data.name, data.cpf, data.address, data.phone);
        await this._customerRepository.save(customer);
        return customer;
    }
}