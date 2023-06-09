import ItemInMemoryRepository from "../../repositories/ItemInMemoryRepository";
import { ListByCategoryService } from "../../services";
import { ListItemByCategoryController } from "./ListItemByCategoryController";

const listItemByCategoryService = new ListByCategoryService(ItemInMemoryRepository);
const listItemByCategoryController = new ListItemByCategoryController(listItemByCategoryService);

export { listItemByCategoryController };