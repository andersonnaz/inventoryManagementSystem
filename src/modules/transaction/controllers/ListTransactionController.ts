import { Request, Response } from "express";
import TransactionInMemoryRepository from "../repositories/TransactionInMemoryRepository";
import { ListTransactionService } from "../services";

export class ListTransactionController {
    private readonly _listTransactionService: ListTransactionService;

    constructor(){
        this._listTransactionService = new ListTransactionService(TransactionInMemoryRepository);
    }

    list = async(request: Request, response: Response): Promise<Response> => {
        try {
            const result = await this._listTransactionService.execute();
            return response.status(200).json(result);
        } catch (error) {
            return response.status(404).json({message: error.message});
        }
    }
}