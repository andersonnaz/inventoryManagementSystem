import { Request, Response } from 'express';
import { CreateSupplierService } from '../../services';
import { CreateSupplierDTO } from '../../dto/CreateSupplierDTO';

export class CreateSupplierController {
    private readonly _createSupplierService: CreateSupplierService;

    constructor(createSupplierService: CreateSupplierService){
        this._createSupplierService = createSupplierService;
    }

    create = async(request: Request, response: Response): Promise<Response> => {
        try {
            const createSupplierDTO: CreateSupplierDTO = request.body;
            const result = await this._createSupplierService.execute(createSupplierDTO);
            return response.status(201).json(result);
        } catch (error) {
            return response.status(404).json(error);
        }
    }
}