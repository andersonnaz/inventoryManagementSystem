import { Router } from "express";
import {
    CreateSupplierController,
    DeleteSupplierController,
    FindSupplierController,
    ListSupplierController,
    UpdateSupplierController
} from '../controllers';

const supplierRouter = Router();
const createSupplierController = new CreateSupplierController();
const deleteSupplierController = new DeleteSupplierController();
const findSupplierController = new FindSupplierController();
const listSupplierController = new ListSupplierController();
const updateSupplierController = new UpdateSupplierController();

supplierRouter.get('/', listSupplierController.list);
supplierRouter.post('/', createSupplierController.create);
supplierRouter.get('/:id', findSupplierController.find);
supplierRouter.delete('/:id', deleteSupplierController.delete);
supplierRouter.put('/:id', updateSupplierController.update);

export default supplierRouter;

