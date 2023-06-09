import { Request, Response } from "express";
import { ListCustomerService } from "../../services";

export class ListCustomerController {
    private readonly _listCustomerService: ListCustomerService;

    constructor(listCustomerService: ListCustomerService){
        this._listCustomerService = listCustomerService;
    }

    list = async(request: Request, response: Response): Promise<Response> => {
        try {
            const result = await this._listCustomerService.execute();
            return response.status(200).json(result);
        } catch (error) {
            return response.status(404).json(error)
        }
    }
}