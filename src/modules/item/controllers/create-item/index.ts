import SupplierInMemoryRepository from "../../../supplier/repositories/SupplierInMemoryRepository";
import ItemInMemoryRepository from "../../repositories/ItemInMemoryRepository";
import { CreateItemService } from "../../services";
import { CreateItemController } from "./CreateItemController";

const createItemService = new CreateItemService(ItemInMemoryRepository, SupplierInMemoryRepository);
const createItemController = new CreateItemController(createItemService);

export { createItemController };