import { Request, Response } from 'express';
import { CreateCustomerService } from '../services';

export class CreateCustomerController {
    private readonly _createCustomerService: CreateCustomerService;

    constructor(createCustomerService: CreateCustomerService){
        this._createCustomerService = createCustomerService;
    }

    create = async(request: Request, response: Response): Promise<Response> => {
        try {
            const { name, cpf, address, phone } = request.body;
            const result = await this._createCustomerService.execute({name, cpf, address, phone});
            return response.status(201).json(result);
        } catch (error) {
            return response.status(404).json(error);          
        }
    }
}