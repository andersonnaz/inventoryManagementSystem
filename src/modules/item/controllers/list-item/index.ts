import ItemInMemoryRepository from "../../repositories/ItemInMemoryRepository";
import { ListItemService } from "../../services";
import { ListItemController } from "./ListItemController";

const listItemService = new ListItemService(ItemInMemoryRepository);
const listItemController = new ListItemController(listItemService);

export { listItemController };