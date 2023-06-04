import { SaleTransactionService } from "../services/SaleTransactionService";
import TransactionInMemoryRepository from '../repositories/TransactionInMemoryRepository';
import ItemInMemoryRepository from '../../item/repositories/ItemInMemoryRepository';
import CustomerInMemoryRepository from '../../customer/repositories/CustomerInMemoryRepository';
import { Request, Response } from "express";

export class SaleTransactionController {
    private readonly _saleTransactionService: SaleTransactionService;

    constructor(){
        this._saleTransactionService = new SaleTransactionService(
            TransactionInMemoryRepository,
            ItemInMemoryRepository,
            CustomerInMemoryRepository
        );
    }

    sale = async(request: Request, response: Response): Promise<Response> => {
        try {
            const {id} = request.params;
            const {items} = request.body;
            const result = await this._saleTransactionService.execute(id, items);
            return response.status(201).json(result);
        } catch (error) {
            return response.status(404).json(error);
        }
    }
}