import { Request, Response } from "express";
import TransactionInMemoryRepository from "../repositories/TransactionInMemoryRepository";
import { UpdateTransactionService } from "../services";
import { UpdateTransactionDTO } from '../dto/UpdateTransactionDTO';

export class UpdateTransactionController {
    private readonly _updateTransactionService: UpdateTransactionService;

    constructor(){
        this._updateTransactionService = new UpdateTransactionService(TransactionInMemoryRepository);
    }

    update = async(request: Request, response: Response): Promise<Response> => {
        try {
            const {id} = request.params;
            const updateTransactionDTO: UpdateTransactionDTO = request.body;
            const result = await this._updateTransactionService.execute(id, updateTransactionDTO);
            return response.status(200).json(result);
        } catch (error) {
            return response.status(404).json(error);
        }
    }
}