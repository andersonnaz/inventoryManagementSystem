import CustomerInMemoryRepository from "../../../customer/repositories/CustomerInMemoryRepository";
import ItemInMemoryRepository from "../../../item/repositories/ItemInMemoryRepository";
import TransactionInMemoryRepository from "../../repositories/TransactionInMemoryRepository";
import { SaleTransactionService } from "../../services/SaleTransactionService";
import { SaleTransactionController } from "./SaleTransactionController";

const saleTransactionService = new SaleTransactionService(
    TransactionInMemoryRepository,
    ItemInMemoryRepository,
    CustomerInMemoryRepository
);
const saleTransactionController = new SaleTransactionController(saleTransactionService);

export { saleTransactionController };