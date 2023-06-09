import { Request, Response } from "express";
import { DeleteItemService } from "../../services";

export class DeleteItemController {
    private readonly _deleteItemService: DeleteItemService;

    constructor(deleteItemService: DeleteItemService){
        this._deleteItemService = deleteItemService;
    }

    delete = async(request: Request, response: Response): Promise<Response> => {
        try {
            const {id} = request.params;
            const result = await this._deleteItemService.execute(id);
            return response.status(200).json(result);
        } catch (error) {
            return response.status(404).json(error);
        }
    }
}