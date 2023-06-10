import { Item } from "../../item/entities/Item";
import { ItemRepository } from "../../item/repositories/ItemRepository";
import { Transaction } from "../entities/Transaction";
import { TransactionRepository } from "../repositories/TransactionRepository";
import { CustomerRepository } from '../../customer/repositories/CustomerRepository';

const REGEX_VALIDATE_CPF = /([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})/;

export class SaleTransactionService {
    private readonly _transactionRepository: TransactionRepository;
    private readonly _itemRepository: ItemRepository;
    private readonly _customerRepository: CustomerRepository;

    constructor(transactionRepository: TransactionRepository,
        itemRepository: ItemRepository,
        customerRepository: CustomerRepository
        ){
        this._transactionRepository = transactionRepository;
        this._itemRepository = itemRepository;
        this._customerRepository = customerRepository;
    }

    async execute(cpf: string, items: Item[]): Promise<Transaction> {
        if(!REGEX_VALIDATE_CPF.test(cpf)){
            throw new Error('invalid cpf!');
        }
        const entity = await this._customerRepository.findOne(cpf);
        if(!entity){
            throw new Error('Customer not found!');
        }
        Transaction.validate(items, entity);
        await this.updateItemrepository(items);
        const transaction = Transaction.create(items, entity);
        await this._transactionRepository.save(transaction);
        return transaction;

    }

    private async updateItemrepository(items: Item[]) {
        items.forEach(async (item) => {
            const itemCheck = await this._itemRepository.findOne(item.id);
            if(!itemCheck){ throw new Error('item not found!') };
            itemCheck.quantity -= item.quantity;
        })
    }
}