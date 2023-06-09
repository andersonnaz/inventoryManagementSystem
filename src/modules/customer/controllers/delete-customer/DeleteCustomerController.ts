import { Request, Response } from "express";
import { DeleteCustomerService } from "../../services";

export class DeleteCustomerController {
    private readonly _deleteCustomerService: DeleteCustomerService;

    constructor(deleteCustomerService: DeleteCustomerService){
        this._deleteCustomerService = deleteCustomerService;
    }

    delete = async(request: Request, response: Response): Promise<Response> => {
        try {
            const {id} = request.params;
            const result = await this._deleteCustomerService.execute(id);
            return response.status(200).json(result);
        } catch (error) {
            return response.status(404).json(error);
        }
    }
}