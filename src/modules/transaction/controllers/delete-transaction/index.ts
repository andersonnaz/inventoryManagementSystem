import TransactionInMemoryRepository from "../../repositories/TransactionInMemoryRepository";
import { DeleteTransactionService } from "../../services";
import { DeleteTransactionController } from "./DeleteTransactionController";

const deleteTransactionService = new DeleteTransactionService(TransactionInMemoryRepository);
const deleteTransactionController = new DeleteTransactionController(deleteTransactionService);

export { deleteTransactionController };