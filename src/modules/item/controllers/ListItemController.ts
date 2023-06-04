import { Request, Response } from "express";
import ItemInMemoryRepository from "../repositories/ItemInMemoryRepository";
import { ListItemService } from "../services";

export class ListItemController {
    private readonly _listItemService: ListItemService;

    constructor(){
        this._listItemService = new ListItemService(ItemInMemoryRepository);
    }

    list = async(request: Request, response: Response): Promise<Response> => {
        try {
            const result = await this._listItemService.execute();
            return response.status(200).json(result);
        } catch (error) {
            return response.status(404).json(error);
        }
    }
}