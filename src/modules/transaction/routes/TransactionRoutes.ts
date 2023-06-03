import { Router } from "express";
import {
    DeleteTransactionController,
    FindTransactionController,
    ListByPurchaseTransactionController,
    ListBySaleTransactionController,
    ListTransactionController,
    PurchaseTransactionController,
    SaleTransactionController,
    UpdateTransactionController
} from '../controllers';

const transactionsRouter = Router();
const saleTransactionController = new SaleTransactionController();
const purchaseTransactionController = new PurchaseTransactionController();
const deleteTransactionController = new DeleteTransactionController();
const findTransactionController = new FindTransactionController();
const listTransactionController = new ListTransactionController();
const updateTransactionController = new UpdateTransactionController();
const listByPurchaseTransaction = new ListByPurchaseTransactionController();
const listBySaleTransaction = new ListBySaleTransactionController();

transactionsRouter.get('/', listTransactionController.list);
transactionsRouter.post('/sale', saleTransactionController.sale);
transactionsRouter.post('/purchase', purchaseTransactionController.purchase);
transactionsRouter.get('/:id', findTransactionController.find);
transactionsRouter.delete('/:id', deleteTransactionController.delete);
transactionsRouter.put('/:id', updateTransactionController.update);
transactionsRouter.get('/sale', listBySaleTransaction.listBySale);
transactionsRouter.get('/purchase', listByPurchaseTransaction.listByPurchase);

export default transactionsRouter;