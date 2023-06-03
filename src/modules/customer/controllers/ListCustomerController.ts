import { Request, Response } from "express";
import CustomerInMemoryRepository from "../repositories/CustomerInMemoryRepository";
import { ListCustomerService } from "../services";

export class ListCustomerController {
    private readonly _listCustomerService: ListCustomerService;

    constructor(){
        this._listCustomerService = new ListCustomerService(CustomerInMemoryRepository);
    }

    list = async(request: Request, response: Response): Promise<Response> => {
        try {
            const result = await this._listCustomerService.execute();
            return response.status(200).json(result);
        } catch (error) {
            return response.status(404).json({message: error.message})
        }
    }
}