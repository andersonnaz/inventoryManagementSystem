import { Request, Response } from "express";
import { UpdateCustomerService } from "../services";

export class UpdateCustomerController {
    private readonly _updateCustomerService: UpdateCustomerService;

    constructor(updateCustomerService: UpdateCustomerService){
        this._updateCustomerService = updateCustomerService;
    }

    update = async(request: Request, response: Response): Promise<Response> => {
        try {
            const {id} = request.params;
            const {address, phone} = request.body;
            const result = await this._updateCustomerService.execute(id, {address, phone});
            return response.status(200).json(result);
        } catch (error) {
            return response.status(404).json(error);
        }
    }
}