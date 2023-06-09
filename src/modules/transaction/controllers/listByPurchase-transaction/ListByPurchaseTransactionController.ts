import { Request, Response } from 'express';
import TransactionInMemoryRepository from '../../repositories/TransactionInMemoryRepository';
import { ListByPurchaseTransactionService } from '../../services';

export class ListByPurchaseTransactionController {
    private readonly _listByPurchaseTransactionService: ListByPurchaseTransactionService;

    constructor(listByPurchaseTransactionService: ListByPurchaseTransactionService){
        this._listByPurchaseTransactionService = listByPurchaseTransactionService;
    }

    listByPurchase = async(request: Request, response: Response): Promise<Response> => {
        try {
            const result = await this._listByPurchaseTransactionService.execute();
            return response.status(200).json(result);
        } catch (error) {
            return response.status(404).json(error);
        }
    }
}