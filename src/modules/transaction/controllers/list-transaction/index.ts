import TransactionInMemoryRepository from "../../repositories/TransactionInMemoryRepository";
import { ListTransactionService } from "../../services";
import { ListTransactionController } from "./ListTransactionController";

const listTransactionService = new ListTransactionService(TransactionInMemoryRepository);
const listTransactionController = new ListTransactionController(listTransactionService);

export { listTransactionController };