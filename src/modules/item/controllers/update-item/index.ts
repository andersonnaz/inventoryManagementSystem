import ItemInMemoryRepository from "../../repositories/ItemInMemoryRepository";
import { UpdateItemService } from "../../services";
import { UpdateItemController } from "./UpdateItemController";

const updateItemService = new UpdateItemService(ItemInMemoryRepository);
const updateItemController = new UpdateItemController(updateItemService);

export { updateItemController };