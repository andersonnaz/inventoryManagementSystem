import SupplierInMemoryRepository from "../../repositories/SupplierInMemoryRepository";
import { DeleteSupplierService } from "../../services";
import { DeleteSupplierController } from "./DeleteSupplierController";

const deleteSupplierService = new DeleteSupplierService(SupplierInMemoryRepository);
const deleteSupplierController = new DeleteSupplierController(deleteSupplierService);

export { deleteSupplierController };