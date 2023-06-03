import { Router } from "express";
import {
    CreateCustomerController,
    DeleteCustomerController,
    FindCustomerController,
    ListCustomerController,
    UpdateCustomerController
} from '../controllers';

const customersRouter = Router();
const createCustomerController = new CreateCustomerController();
const deleteCustomerController = new DeleteCustomerController();
const findCustomerController = new FindCustomerController();
const listCustomerController = new ListCustomerController();
const updateCustomerController = new UpdateCustomerController();

customersRouter.get('/', listCustomerController.list);
customersRouter.post('/', createCustomerController.create);
customersRouter.delete('/', deleteCustomerController.delete);
customersRouter.get('/:id', findCustomerController.find);
customersRouter.put('./:id', updateCustomerController.update);

export default customersRouter;