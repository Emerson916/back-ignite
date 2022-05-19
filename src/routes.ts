import { Router } from "express";
import { AuthenticateDeliverymanController } from "./modules/account/authenticateDeliveryman/AuthenticateDeliverymanController";
import { AuthenticateClientController } from "./modules/account/authenticateUser/AuthenticateClientController";
import { CreateClientController } from "./modules/clients/useCases/createClient/CreateClientController";
import { CreateDeliverymanController } from "./modules/deliveryman/useCases/createDeliveryman/CreateDeliverymanController";
import {} from "./modules/deliveryman/useCases/createDeliveryman/CreateDeliverymanController";

const routes = Router();

const authenticateClientController = new AuthenticateClientController();
const authenticateDeliverymanController = new AuthenticateDeliverymanController();
const createClientController = new CreateClientController();
const createDeliverymanController = new CreateDeliverymanController();

routes.post("/client/", createClientController.handle);
routes.post("/client/auth/", authenticateClientController.handle);
routes.post("/deliveryman/", createDeliverymanController.handle);
routes.post("/deliveryman/auth", authenticateDeliverymanController.handle);

export { routes };
