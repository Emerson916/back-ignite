import { Router } from "express";
import { ensureAuthenticateClient } from "./middlewares/ensureAuthenticateClient";
import { AuthenticateDeliverymanController } from "./modules/account/authenticateDeliveryman/AuthenticateDeliverymanController";
import { AuthenticateClientController } from "./modules/account/authenticateUser/AuthenticateClientController";
import { CreateClientController } from "./modules/clients/useCases/createClient/CreateClientController";
import { CreateDeliveryController } from "./modules/deliveries/useCases/createDelivery/CreateDeliveryController";
import { CreateDeliverymanController } from "./modules/deliveryman/useCases/createDeliveryman/CreateDeliverymanController";
import { FindAllAvailableController } from "./modules/deliveryman/useCases/findAllAvailable/FindAllAvailableController";

const routes = Router();

const authenticateClientController = new AuthenticateClientController();
const authenticateDeliverymanController =
  new AuthenticateDeliverymanController();
const createClientController = new CreateClientController();
const createDeliverymanController = new CreateDeliverymanController();
const deliverymanController = new CreateDeliveryController();
const findAllAvailableController = new FindAllAvailableController();

routes.post("/client/", createClientController.handle);
routes.post("/client/auth/", authenticateClientController.handle);
routes.post("/deliveryman/", createDeliverymanController.handle);
routes.post("/deliveryman/auth", authenticateDeliverymanController.handle);
routes.post(
  "/delivery",
  ensureAuthenticateClient,
  deliverymanController.handle
);
routes.get("delivery/available", findAllAvailableController.handle);

export { routes };
