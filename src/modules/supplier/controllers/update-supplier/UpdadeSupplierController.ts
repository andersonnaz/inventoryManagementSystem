import { Request, Response } from "express";
import { UpdateSupplierService } from "../../services";
import { UpdateSupplierDTO } from '../../dto/UpdateSupplierDTO';

export class UpdateSupplierController {
    private readonly _updateSupplierService: UpdateSupplierService;

    constructor(updateSupplierService: UpdateSupplierService){
        this._updateSupplierService = updateSupplierService;
    }

    update = async(request: Request, response: Response): Promise<Response> => {
        try {
            const {id} = request.params;
            const updateSupplier: UpdateSupplierDTO = request.body;
            const result = await this._updateSupplierService.execute(id, updateSupplier);
            return response.status(200).json(result);
        } catch (error) {
            return response.status(404).json(error);
        }
    }
}