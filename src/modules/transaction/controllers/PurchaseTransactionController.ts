import ItemInMemoryRepository from '../../item/repositories/ItemInMemoryRepository';
import TransactionInMemoryRepository from '../repositories/TransactionInMemoryRepository';
import { PurchaseTransactionService } from '../services/PurchaseTransactionService';
import SupplierInMemoryRepository from '../../supplier/repositories/SupplierInMemoryRepository';
import { Request, Response } from 'express';

export class PurchaseTransactionController {
    private readonly _purchaseTransactionService: PurchaseTransactionService;

    constructor(){
        this._purchaseTransactionService = new PurchaseTransactionService(
            TransactionInMemoryRepository,
            SupplierInMemoryRepository,
            ItemInMemoryRepository
        );
    }

    purchase = async(request: Request, response: Response): Promise<Response> => {
        try {
            const {id} = request.params;
            const {items} = request.body;
            const result = await this._purchaseTransactionService.execute(id, items);
            return response.status(201).json(result);
        } catch (error) {
            return response.status(404).json(error);
        }
    }
}