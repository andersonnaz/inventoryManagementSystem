import SupplierInMemoryRepository from "../../repositories/SupplierInMemoryRepository";
import { ListSupplierService } from "../../services";
import { ListSupplierController } from "./ListSupplierController";

const listSupplierService = new ListSupplierService(SupplierInMemoryRepository);
const listSupplierController = new ListSupplierController(listSupplierService);

export { listSupplierController };