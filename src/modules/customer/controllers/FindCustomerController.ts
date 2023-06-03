import CustomerInMemoryRepository from "../repositories/CustomerInMemoryRepository";
import { FindCustomerService } from "../services";
import { Request, Response } from "express";

export class FindCustomerController {
    private readonly _findCustomerService: FindCustomerService;

    constructor(){
        this._findCustomerService = new FindCustomerService(CustomerInMemoryRepository);
    }

    find = async(request: Request, response: Response): Promise<Response> => {
        try {
            const {id} = request.params;
            const result = await this._findCustomerService.execute(id);
            return response.status(200).json(result);
        } catch (error) {
            return response.status(404).json({message: error.message});
        }
    }
}