import ItemInMemoryRepository from "../../repositories/ItemInMemoryRepository";
import { ListBySupplierService } from "../../services";
import { ListItemBySupplierController } from "./ListItemBySupplierController";

const listItemBySupplierService = new ListBySupplierService(ItemInMemoryRepository);
const listItemBySupplierController = new ListItemBySupplierController(listItemBySupplierService);

export { listItemBySupplierController };