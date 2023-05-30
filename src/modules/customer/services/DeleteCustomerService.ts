import { Repository } from "../../../shared/database/Repository";
import { Customer } from "../entities/Customer";

export class DeleteCustomerService {
    private readonly _customerRepository: Repository<Customer>;

    constructor(customerRepository: Repository<Customer>){
        this._customerRepository = customerRepository;
    }

    async execute(cpf: string): Promise<boolean> {
        await this._customerRepository.delete(cpf);
        return true;
    }
}