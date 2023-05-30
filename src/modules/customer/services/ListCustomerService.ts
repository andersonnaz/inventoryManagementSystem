import { Repository } from "../../../shared/database/Repository";
import { Customer } from "../entities/Customer";

export class ListCustomerService {
    private readonly _customerRepository: Repository<Customer>;

    constructor(customerRepository: Repository<Customer>){
        this._customerRepository = customerRepository;
    }

    async execute(): Promise<Customer[]> {
        const customers = await this._customerRepository.list();
        return customers;
    }
}