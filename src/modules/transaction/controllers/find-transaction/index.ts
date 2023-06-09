import TransactionInMemoryRepository from "../../repositories/TransactionInMemoryRepository";
import { FindTransactionService } from "../../services";
import { FindTransactionController } from "./FindTransactionController";

const findTransactionService = new FindTransactionService(TransactionInMemoryRepository);
const findTransactionController = new FindTransactionController(findTransactionService);

export { findTransactionController };