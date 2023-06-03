import { Request, Response } from "express";
import ItemInMemoryRepository from "../repositories/ItemInMemoryRepository";
import { UpdateItemService } from "../services";
import { UpdateItemDTO } from '../dto/UpdateItemDTO';

export class UpdateItemController {
    private readonly _updateItemService: UpdateItemService;

    constructor(){
        this._updateItemService = new UpdateItemService(ItemInMemoryRepository);
    }

    update = async(request: Request, response: Response): Promise<Response> => {
        try {
            const {id} = request.params;
            const updateItemDTO: UpdateItemDTO = request.body;
            const result = await this._updateItemService.execute(id, updateItemDTO);
            return response.status(200).json(result);
        } catch (error) {
            return response.status(404).json({message: error.message});
        }
    }
}