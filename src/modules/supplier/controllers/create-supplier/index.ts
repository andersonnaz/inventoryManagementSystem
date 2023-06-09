import SupplierInMemoryRepository from "../../repositories/SupplierInMemoryRepository";
import { CreateSupplierService } from "../../services";
import { CreateSupplierController } from "./CreateSupplierController";

const createSupplierService = new CreateSupplierService(SupplierInMemoryRepository);
const createSupplierController = new CreateSupplierController(createSupplierService);

export { createSupplierController };