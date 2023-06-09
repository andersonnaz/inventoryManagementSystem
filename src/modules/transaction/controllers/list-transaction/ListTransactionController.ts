import { Request, Response } from "express";
import TransactionInMemoryRepository from "../../repositories/TransactionInMemoryRepository";
import { ListTransactionService } from "../../services";

export class ListTransactionController {
    private readonly _listTransactionService: ListTransactionService;

    constructor(listTransactionService: ListTransactionService){
        this._listTransactionService = listTransactionService;
    }

    list = async(request: Request, response: Response): Promise<Response> => {
        try {
            const result = await this._listTransactionService.execute();
            return response.status(200).json(result);
        } catch (error) {
            return response.status(404).json(error);
        }
    }
}