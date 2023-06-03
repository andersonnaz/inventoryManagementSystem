import { Router } from "express";
import { 
    CreateItemController,
    DeleteItemController,
    FindItemController,
    ListItemByCategoryController,
    ListItemBySupplierController,
    ListItemController,
    UpdateItemController
} from '../controllers';

const itemsRouter = Router();
const createItemController = new CreateItemController();
const deleteItemController = new DeleteItemController();
const findItemController = new FindItemController();
const listItemController = new ListItemController();
const listItemByCategoryController = new ListItemByCategoryController();
const listItemBySupplierController = new ListItemBySupplierController();
const updateItemController = new UpdateItemController();

itemsRouter.get('/', listItemController.list);
itemsRouter.post('/', createItemController.create);
itemsRouter.get('/:id', findItemController.find);
itemsRouter.delete('/:id', deleteItemController.delete);
itemsRouter.put('/:id', updateItemController.update);
itemsRouter.get('/:category', listItemByCategoryController.listItemByCategory);
itemsRouter.get('/:supplier', listItemBySupplierController.listItemBySupplier);

export default itemsRouter;