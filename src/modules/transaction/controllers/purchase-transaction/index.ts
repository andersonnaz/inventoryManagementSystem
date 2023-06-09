import { PurchaseTransactionService } from "../../services/PurchaseTransactionService";
import TransactionInMemoryRepository from '../../repositories/TransactionInMemoryRepository';
import SupplierInMemoryRepository from '../../../supplier/repositories/SupplierInMemoryRepository';
import ItemInMemoryRepository from '../../../item/repositories/ItemInMemoryRepository';
import { PurchaseTransactionController } from "./PurchaseTransactionController";

const purchaseTransactionService = new PurchaseTransactionService(
    TransactionInMemoryRepository,
    SupplierInMemoryRepository,
    ItemInMemoryRepository
);
const purchaseTransactionController = new PurchaseTransactionController(purchaseTransactionService);

export { purchaseTransactionController };