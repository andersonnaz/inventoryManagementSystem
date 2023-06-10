import { Router } from "express";
import {
    deleteTransactionController,
    findTransactionController,
    listByPurchaseTransactionController,
    listBySaleTransactionController,
    listTransactionController,
    purchaseTransactionController,
    saleTransactionController
} from '../controllers';

const transactionsRouter = Router();

transactionsRouter.get('/', listTransactionController.list);
transactionsRouter.get('/sale', listBySaleTransactionController.listBySale);
transactionsRouter.get('/purchase', listByPurchaseTransactionController.listByPurchase);
transactionsRouter.post('/sale/:id', saleTransactionController.sale);
transactionsRouter.post('/purchase/:id', purchaseTransactionController.purchase);
transactionsRouter.get('/:id', findTransactionController.find);
transactionsRouter.delete('/:id', deleteTransactionController.delete);

export default transactionsRouter;