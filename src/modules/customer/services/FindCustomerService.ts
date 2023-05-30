import { Repository } from "../../../shared/database/Repository";
import { Customer } from "../entities/Customer";

export class FindCustomerService {
    private readonly _customerRepository: Repository<Customer>;

    constructor(customerRepository: Repository<Customer>){
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