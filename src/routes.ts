import { Router } from "express";
import { AuthenticateClientController } from "./modules/account/authenticateUser/AuthenticateClientController";
import { CreateClientController } from "./modules/clients/useCases/createClient/CreateClientController";

const routes = Router();

const authenticateClientController = new AuthenticateClientController();
const createClientController = new CreateClientController();

routes.post("/client/", createClientController.handle);
routes.post("/auth/", authenticateClientController.handle);

export { routes };
