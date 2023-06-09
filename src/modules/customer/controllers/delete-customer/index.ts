import { DeleteCustomerController } from "./DeleteCustomerController";
import CustomerInMemoryRepository from "../../repositories/CustomerInMemoryRepository";
import { DeleteCustomerService } from "../../services";

const deleteCustomerService = new DeleteCustomerService(CustomerInMemoryRepository);
const deleteCustomerController = new DeleteCustomerController(deleteCustomerService);

export { deleteCustomerController };