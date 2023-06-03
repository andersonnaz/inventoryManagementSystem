import { CreateItemService } from '../services';
import ItemInMemoryRepository from '../repositories/ItemInMemoryRepository';
import SupplierInMemoryRepository from '../../supplier/repositories/SupplierInMemoryRepository';
import { Request, Response } from 'express';
import { CreateItemDTO } from '../dto/CreateItemDTO';

export class CreateItemController {
    private readonly _createItemService: CreateItemService;

    constructor(){
        this._createItemService = new CreateItemService(ItemInMemoryRepository, SupplierInMemoryRepository);
    }

    create = async(request: Request, response: Response): Promise<Response> => {
        try {
            const createItemDTO: CreateItemDTO = request.body;
            const result = await this._createItemService.execute(createItemDTO);
            return response.status(201).json(result);
        } catch (error) {
            return response.status(404).json({message: error.message});
        }
    }
}