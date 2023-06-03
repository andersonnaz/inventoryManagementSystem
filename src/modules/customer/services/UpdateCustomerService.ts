import { Repository } from "../../../shared/database/Repository";
import { Customer } from "../entities/Customer";

export class UpdateCustomerService {
    private readonly _customerRepository: Repository<Customer>;

    constructor(customerRepository: Repository<Customer>){
        this._customerRepository = customerRepository;
    }

    async execute(cpf: string, updateCustomer: Partial<Customer>): Promise<Customer> {
        const customer = await this._customerRepository.update(cpf, updateCustomer);
        return customer;
    }
}