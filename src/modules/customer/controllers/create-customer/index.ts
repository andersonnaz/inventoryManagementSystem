import {CreateCustomerController} from './CreateCustomerController';
import { CreateCustomerService } from '../../services';
import CustomerInMemoryRepository from '../../repositories/CustomerInMemoryRepository';

const createCustomerService = new CreateCustomerService(CustomerInMemoryRepository);
const createCustomerController = new CreateCustomerController(createCustomerService);

export { createCustomerController };