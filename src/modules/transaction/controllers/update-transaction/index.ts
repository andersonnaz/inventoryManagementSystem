import TransactionInMemoryRepository from "../../repositories/TransactionInMemoryRepository";
import { UpdateTransactionService } from "../../services";
import { UpdateTransactionController } from "./UpdateTransactionController";

const updateTransactionService = new UpdateTransactionService(TransactionInMemoryRepository);
const updateTransactionController = new UpdateTransactionController(updateTransactionService);

export { updateTransactionController };