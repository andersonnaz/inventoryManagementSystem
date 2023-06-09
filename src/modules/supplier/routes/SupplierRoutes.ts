import { Router } from "express";
import {
    createSupplierController,
    deleteSupplierController,
    findSupplierController,
    listSupplierController,
    updateSupplierController
} from '../controllers';

const supplierRouter = Router();

supplierRouter.get('/', listSupplierController.list);
supplierRouter.post('/', createSupplierController.create);
supplierRouter.get('/:id', findSupplierController.find);
supplierRouter.delete('/:id', deleteSupplierController.delete);
supplierRouter.put('/:id', updateSupplierController.update);

export default supplierRouter;

