import { Request, Response } from "express";
import ItemInMemoryRepository from "../repositories/ItemInMemoryRepository";
import { ListBySupplierService } from "../services";

export class ListItemBySupplierController {
    private readonly _listItemBySupplierService: ListBySupplierService;

    constructor(){
        this._listItemBySupplierService = new ListBySupplierService(ItemInMemoryRepository);
    }

    listItemBySupplier = async(request: Request, response: Response): Promise<Response> => {
        try {
            const {supplier} = request.params;
            const result = await this._listItemBySupplierService.execute(supplier);
            return response.status(200).json(result);
        } catch (error) {
            return response.status(404).json({message: error.message});
        }
    }
}