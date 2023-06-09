import ItemInMemoryRepository from "../../repositories/ItemInMemoryRepository";
import { FindItemService } from "../../services";
import { FindItemController } from "./FindItemController";

const findItemService = new FindItemService(ItemInMemoryRepository);
const findItemController = new FindItemController(findItemService);

export { findItemController };