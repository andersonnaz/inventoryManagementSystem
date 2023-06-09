import { ListCustomerController } from "./ListCustomerController";
import CustomerInMemoryRepository from "../../repositories/CustomerInMemoryRepository";
import { ListCustomerService } from "../../services";

const listCustomerService = new ListCustomerService(CustomerInMemoryRepository);
const listCustomerController = new ListCustomerController(listCustomerService);

export { listCustomerController };