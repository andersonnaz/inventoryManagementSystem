import { Request, Response } from "express";
import TransactionInMemoryRepository from "../../repositories/TransactionInMemoryRepository";
import { ListBySaleTransactionService } from "../../services";

export class ListBySaleTransactionController {
    private readonly _listBySaleTransactionService: ListBySaleTransactionService;

    constructor(listBySaleTransactionService: ListBySaleTransactionService){
        this._listBySaleTransactionService = listBySaleTransactionService;
    }

    listBySale = async(request: Request, response: Response): Promise<Response> => {
        try {
            const result = await this._listBySaleTransactionService.execute();
            return response.status(200).json(result);
        } catch (error) {
            return response.status(404).json(error);
        }
    }
}