import ItemInMemoryRepository from "../../repositories/ItemInMemoryRepository";
import { DeleteItemService } from "../../services";
import { DeleteItemController } from "./DeleteItemController";

const deleteItemService = new DeleteItemService(ItemInMemoryRepository);
const deleteItemController = new DeleteItemController(deleteItemService);

export { deleteItemController };