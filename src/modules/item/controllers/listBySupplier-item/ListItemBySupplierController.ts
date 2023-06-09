import { Request, Response } from "express";
import { ListBySupplierService } from "../../services";

export class ListItemBySupplierController {
    private readonly _listItemBySupplierService: ListBySupplierService;

    constructor(listItemBySupplierService: ListBySupplierService){
        this._listItemBySupplierService = listItemBySupplierService;
    }

    listItemBySupplier = async(request: Request, response: Response): Promise<Response> => {
        try {
            const {supplier} = request.params;
            const result = await this._listItemBySupplierService.execute(supplier);
            return response.status(200).json(result);
        } catch (error) {
            return response.status(404).json(error);
        }
    }
}