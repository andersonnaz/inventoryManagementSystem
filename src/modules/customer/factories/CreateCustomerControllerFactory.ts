import {CreateCustomerController} from '../controllers';
import { CreateCustomerService } from '../services';
import CustomerInMemoryRepository from '../repositories/CustomerInMemoryRepository';

const createCustomerService = new CreateCustomerService(CustomerInMemoryRepository);
const createCustomerController = new CreateCustomerController(createCustomerService);

export { createCustomerController };