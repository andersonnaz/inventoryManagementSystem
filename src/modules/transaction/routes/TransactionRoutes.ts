import { Router } from "express";
import {
    deleteTransactionController,
    findTransactionController,
    listByPurchaseTransactionController,
    listBySaleTransactionController,
    listTransactionController,
    purchaseTransactionController,
    saleTransactionController,
    updateTransactionController
} from '../controllers';

const transactionsRouter = Router();

transactionsRouter.get('/', listTransactionController.list);
transactionsRouter.get('/sale', listBySaleTransactionController.listBySale);
transactionsRouter.get('/purchase', listByPurchaseTransactionController.listByPurchase);
transactionsRouter.post('/sale/:id', saleTransactionController.sale);
transactionsRouter.post('/purchase/:id', purchaseTransactionController.purchase);
transactionsRouter.get('/:id', findTransactionController.find);
transactionsRouter.delete('/:id', deleteTransactionController.delete);
transactionsRouter.put('/:id', updateTransactionController.update);

export default transactionsRouter;