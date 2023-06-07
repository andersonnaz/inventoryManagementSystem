import { Repository } from "../../../shared/database/Repository";
import { CreateCustomerDTO } from "../dto/CreateCustomerDTO";
import { Customer } from '../entities/Customer';

export class CreateCustomerService {
    private readonly _customerRepository: Repository<Customer>;

    constructor(customerRepository: Repository<Customer>){
        this._customerRepository = customerRepository;
    }

    async execute(data: CreateCustomerDTO): Promise<Customer> {
        const customer = Customer.create(data.name, data.cpf, data.address, data.phone);
        await this._customerRepository.save(customer);
        return customer;
    }
}