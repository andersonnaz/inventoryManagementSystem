import { Request, Response } from 'express';
import TransactionInMemoryRepository from '../../repositories/TransactionInMemoryRepository';
import { FindTransactionService } from '../../services/FindTransactionService';

export class FindTransactionController {
    private readonly _findTransactionService: FindTransactionService;

    constructor(findTransactionService: FindTransactionService){
        this._findTransactionService = findTransactionService;
    }

    find = async(request: Request, response: Response): Promise<Response> => {
        try {
            const {id} = request.params;
            const result = await this._findTransactionService.execute(id);
            return response.status(200).json(result);
        } catch (error) {
            return response.status(404).json(error);
        }
    }
}