import { Router } from "express";
import {
    createItemController,
    deleteItemController,
    findItemController,
    listItemController,
    listItemByCategoryController,
    listItemBySupplierController,
    updateItemController
} from '../controllers';

const itemsRouter = Router();

itemsRouter.get('/', listItemController.list);
itemsRouter.post('/', createItemController.create);
itemsRouter.get('/:id', findItemController.find);
itemsRouter.delete('/:id', deleteItemController.delete);
itemsRouter.put('/:id', updateItemController.update);
itemsRouter.get('/category/:category', listItemByCategoryController.listItemByCategory);
itemsRouter.get('/supplier/:supplier', listItemBySupplierController.listItemBySupplier);

export default itemsRouter;