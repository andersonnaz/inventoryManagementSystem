import { Request, Response } from "express";
import SupplierInMemoryRepository from "../repositories/SupplierInMemoryRepository";
import { DeleteSupplierService } from "../services";

export class DeleteSupplierController {
    private readonly _deleteSupplierService: DeleteSupplierService;

    constructor(){
        this._deleteSupplierService = new DeleteSupplierService(SupplierInMemoryRepository);
    }

    delete = async(request: Request, response: Response): Promise<Response> => {
        try {
            const {id} = request.params;
            const result = await this._deleteSupplierService.execute(id);
            return response.status(200).json(result);
        } catch (error) {
            return response.status(404).json({message: error.message});
        }
    }
}