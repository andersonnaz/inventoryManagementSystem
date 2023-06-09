import { UpdateCustomerController } from "./UpdateCustomerController";
import CustomerInMemoryRepository from "../../repositories/CustomerInMemoryRepository";
import { UpdateCustomerService } from "../../services";

const updateCustomerService = new UpdateCustomerService(CustomerInMemoryRepository);
const updateCustomerController = new UpdateCustomerController(updateCustomerService);

export { updateCustomerController };