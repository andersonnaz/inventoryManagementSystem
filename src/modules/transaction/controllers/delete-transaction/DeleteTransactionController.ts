import { Request, Response } from "express";
import TransactionInMemoryRepository from "../../repositories/TransactionInMemoryRepository";
import { DeleteTransactionService } from "../../services/DeleteTransactionService";

export class DeleteTransactionController {
    private readonly _deleteTransactionService: DeleteTransactionService;

    constructor(deleteTransactionService: DeleteTransactionService){
        this._deleteTransactionService = deleteTransactionService;
    }

    delete = async(request: Request, response: Response): Promise<Response> => {
        try {
            const {id} = request.params;
            const result = await this._deleteTransactionService.execute(id);
            return response.status(200).json(result);
        } catch (error) {
            return response.status(404).json(error);
        }
    }
}