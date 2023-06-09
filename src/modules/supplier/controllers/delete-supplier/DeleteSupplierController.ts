import { Request, Response } from "express";
import { DeleteSupplierService } from "../../services";

export class DeleteSupplierController {
    private readonly _deleteSupplierService: DeleteSupplierService;

    constructor(deleteSupplierService: DeleteSupplierService){
        this._deleteSupplierService = deleteSupplierService;
    }

    delete = async(request: Request, response: Response): Promise<Response> => {
        try {
            const {id} = request.params;
            const result = await this._deleteSupplierService.execute(id);
            return response.status(200).json(result);
        } catch (error) {
            return response.status(404).json(error);
        }
    }
}