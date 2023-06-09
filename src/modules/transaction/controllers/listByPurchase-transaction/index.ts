import TransactionInMemoryRepository from "../../repositories/TransactionInMemoryRepository";
import { ListByPurchaseTransactionService } from "../../services";
import { ListByPurchaseTransactionController } from "./ListByPurchaseTransactionController";

const listByPurchaseTransactionService = new ListByPurchaseTransactionService(TransactionInMemoryRepository);
const listByPurchaseTransactionController = new ListByPurchaseTransactionController(listByPurchaseTransactionService);

export { listByPurchaseTransactionController };