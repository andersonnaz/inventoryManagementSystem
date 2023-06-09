import SupplierInMemoryRepository from "../../repositories/SupplierInMemoryRepository";
import { FindSupplierService } from "../../services";
import { FindSupplierController } from "./FindSupplierController";

const findSupplierService = new FindSupplierService(SupplierInMemoryRepository);
const findSupplierController = new FindSupplierController(findSupplierService);

export { findSupplierController };