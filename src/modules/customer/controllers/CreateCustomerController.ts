import { Request, Response } from 'express';
import { CreateCustomerService } from '../services';
import CustomerInMemoryRepository from '../repositories/CustomerInMemoryRepository';
import { CreateCustomerDTO } from '../dto/CreateCustomerDTO';

export class CreateCustomerController {
    private readonly _createCustomerService: CreateCustomerService;

    constructor(){
        this._createCustomerService = new CreateCustomerService(CustomerInMemoryRepository);
    }

    create = async(request: Request, response: Response): Promise<Response> => {
        try {
            const createCustomerDTO: CreateCustomerDTO = request.body;
            const result = await this._createCustomerService.execute(createCustomerDTO);
            return response.status(201).json(result);
        } catch (error) {
            return response.status(404).json({ message: error.message });          
        }
    }
}