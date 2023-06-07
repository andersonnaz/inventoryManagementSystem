import { FindCustomerController } from "../controllers";
import CustomerInMemoryRepository from "../repositories/CustomerInMemoryRepository";
import { FindCustomerService } from "../services";

const findCustomerService = new FindCustomerService(CustomerInMemoryRepository);
const findCustomerController = new FindCustomerController(findCustomerService);

export { findCustomerController };
