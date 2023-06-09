import { Router } from "express";
import { 
    createCustomerController,
    deleteCustomerController,
    findCustomerController,
    listCustomerController,
    updateCustomerController
 } from "../controllers";

const customersRouter = Router();

customersRouter.get('/', listCustomerController.list);
customersRouter.post('/', createCustomerController.create);
customersRouter.delete('/:id', deleteCustomerController.delete);
customersRouter.get('/:id', findCustomerController.find);
customersRouter.put('/:id', updateCustomerController.update);

export default customersRouter;