import { Router } from "express";
import customerRoutes from '../../../modules/customer/routes/CustomerRoutes';
import itemRoutes from '../../../modules/item/routes/ItemRoutes';
import supplierRoutes from '../../../modules/supplier/routes/SupplierRoutes';
import transactionRoutes from '../../../modules/transaction/routes/TransactionRoutes';

const router = Router();

router.use('/api/v1/customer', customerRoutes);
router.use('/api/v1/item', itemRoutes);
router.use('/api/v1/supplier', supplierRoutes);
router.use('/api/v1/transaction', transactionRoutes);

export default router;