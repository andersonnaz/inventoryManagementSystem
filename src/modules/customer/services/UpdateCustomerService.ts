import { Customer } from "../entities/Customer";
import { UpdateCustomerDTO } from '../dto/UpdateCustomerDTO';
import { CustomerRepository } from "../repositories/CustomerRepository";

export class UpdateCustomerService {
    private readonly _customerRepository: CustomerRepository;

    constructor(customerRepository: CustomerRepository){
        this._customerRepository = customerRepository;
    }

    async execute(cpf: string, updateCustomer: UpdateCustomerDTO): Promise<Customer> {
        const customer = await this._customerRepository.update(cpf, updateCustomer);
        return customer;
    }
}