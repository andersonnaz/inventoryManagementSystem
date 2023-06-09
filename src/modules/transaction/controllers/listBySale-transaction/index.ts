import TransactionInMemoryRepository from "../../repositories/TransactionInMemoryRepository";
import { ListBySaleTransactionService } from "../../services";
import { ListBySaleTransactionController } from "./ListBySaleTransactionController";

const listBySaleTransactionService = new ListBySaleTransactionService(TransactionInMemoryRepository);
const listBySaleTransactionController = new ListBySaleTransactionController(listBySaleTransactionService);

export { listBySaleTransactionController };