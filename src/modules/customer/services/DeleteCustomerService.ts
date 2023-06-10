import { CustomerRepository } from "../repositories/CustomerRepository";

export class DeleteCustomerService {
    private readonly _customerRepository: CustomerRepository;

    constructor(customerRepository: CustomerRepository){
        this._customerRepository = customerRepository;
    }

    async execute(cpf: string): Promise<boolean> {
        await this._customerRepository.delete(cpf);
        return true;
    }
}