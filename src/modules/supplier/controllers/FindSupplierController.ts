import { Request, Response } from "express";
import SupplierInMemoryRepository from "../repositories/SupplierInMemoryRepository";
import { FindSupplierService } from "../services";

export class FindSupplierController {
    private readonly _findSupplierService: FindSupplierService;

    constructor(){
        this._findSupplierService = new FindSupplierService(SupplierInMemoryRepository);
    }

    find = async(request: Request, response: Response): Promise<Response> => {
        try {
            const {id} = request.params;
            const result = await this._findSupplierService.execute(id);
            return response.status(200).json(result);
        } catch (error) {
            return response.status(200).json({message: error.message});
        }
    }
}