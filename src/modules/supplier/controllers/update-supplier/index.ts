import { UpdateSupplierService } from "../../services";
import { UpdateSupplierController } from "./UpdadeSupplierController";
import SupplierInMemoryRepository from '../../repositories/SupplierInMemoryRepository';

const updateSupplierService = new UpdateSupplierService(SupplierInMemoryRepository);
const updateSupplierController = new UpdateSupplierController(updateSupplierService);

export { updateSupplierController };