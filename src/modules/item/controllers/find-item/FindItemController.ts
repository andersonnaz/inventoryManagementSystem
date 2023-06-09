import { Request, Response } from "express";
import { FindItemService } from "../../services";

export class FindItemController {
    private readonly _findItemService: FindItemService;

    constructor(findItemService: FindItemService){
        this._findItemService = findItemService;
    }

    find = async(request: Request, response: Response): Promise<Response> => {
        try {
            const {id} = request.params;
            const result = await this._findItemService.execute(id);
            return response.status(200).json(result);
        } catch (error) {
            return response.status(404).json(error);
        }
    }
}