import { Request, Response } from "express";
import { ListSupplierService } from "../../services";

export class ListSupplierController {
    private readonly _listSupplierService: ListSupplierService;

    constructor(listSupplierService: ListSupplierService){
        this._listSupplierService = listSupplierService;
    }

    list = async(request: Request, response: Response): Promise<Response> => {
        try {
            const result = await this._listSupplierService.execute();
            return response.status(200).json(result);
        } catch (error) {
            return response.status(404).json(error);
        }
    }
}