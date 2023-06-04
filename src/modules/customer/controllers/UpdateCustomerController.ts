import { Request, Response } from "express";
import CustomerInMemoryRepository from "../repositories/CustomerInMemoryRepository";
import { UpdateCustomerService } from "../services";
import { UpdateCustomerDTO } from "../dto/UpdateCustomerDTO";

export class UpdateCustomerController {
    private readonly _updateCustomerService: UpdateCustomerService;

    constructor(){
        this._updateCustomerService = new UpdateCustomerService(CustomerInMemoryRepository);
    }

    update = async(request: Request, response: Response): Promise<Response> => {
        try {
            const {id} = request.params;
            const updateCustomerDTO: UpdateCustomerDTO = request.body;
            const result = await this._updateCustomerService.execute(id, updateCustomerDTO);
            return response.status(200).json(result);
        } catch (error) {
            return response.status(404).json(error);
        }
    }
}