import { Item } from "../../item/entities/Item";
import { ItemRepository } from "../../item/repositories/ItemRepository";
import { Transaction } from "../entities/Transaction";
import { TransactionRepository } from "../repositories/TransactionRepository";
import { SupplierRepository } from '../../supplier/repositories/SupplierRepository';

const REGEX_VALIDATE_CNPJ = /^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$/;

export class PurchaseTransactionService {
    private readonly _transactionRepository: TransactionRepository;
    private readonly _supplierRepository: SupplierRepository;
    private readonly _itemRepository: ItemRepository;

    constructor(transactionRepository: TransactionRepository,
        supplierRepository: SupplierRepository,
        itemRepository: ItemRepository
        ){
        this._transactionRepository = transactionRepository;
        this._supplierRepository = supplierRepository;
        this._itemRepository = itemRepository;
    }

    async execute(cnpj: string, items: Item[]): Promise<Transaction> {
        if(!REGEX_VALIDATE_CNPJ.test(cnpj)){
            throw new Error('invalid cnpj!');
        }
        const supplier = await this._supplierRepository.findOne(cnpj);
        if(!supplier){
            throw new Error('Supplier not found!');
        }
        Transaction.validate(items, supplier);
        await this.updateItemrepository(items);
        const transaction = Transaction.create(items, supplier);
        await this._transactionRepository.save(transaction);
        return transaction;

    }

    private async updateItemrepository(items: Item[]) {
        items.forEach(async (item) => {
            const itemCheck = await this._itemRepository.findOne(item.id);
            if(!itemCheck){ throw new Error('item not found!') };
            itemCheck.quantity += item.quantity;
        })
    }
}