import { Request, Response } from "express";
import { ListByCategoryService } from "../../services";

export class ListItemByCategoryController {
    private readonly _listItemByCategoryService: ListByCategoryService;

    constructor(listItemByCategoryService: ListByCategoryService){
        this._listItemByCategoryService = listItemByCategoryService;
    }

    listItemByCategory = async(request: Request, response: Response): Promise<Response> => {
        try {
            const {category} = request.params;
            const result = await this._listItemByCategoryService.execute(category);
            return response.status(200).json(result);
        } catch (error) {
            return response.status(404).json(error);
        }
    }
}