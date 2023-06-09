import { CreateItemService } from '../../services';
import { Request, Response } from 'express';
import { CreateItemDTO } from '../../dto/CreateItemDTO';

export class CreateItemController {
    private readonly _createItemService: CreateItemService;

    constructor(createItemService: CreateItemService){
        this._createItemService = createItemService;
    }

    create = async(request: Request, response: Response): Promise<Response> => {
        try {
            const createItemDTO: CreateItemDTO = request.body;
            const result = await this._createItemService.execute(createItemDTO);
            return response.status(201).json(result);
        } catch (error) {
            return response.status(404).json(error);
        }
    }
}