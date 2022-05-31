import { Request, Response } from "express";
import { FindDeliveriesDeliverymanUseCase } from "./FindAllDeliveriesDeliverymanUseCase";

export class FindAllDeliveriesDeliverymanController {
  async handle(req: Request, resp: Response) {
    const { id_client } = req;

    const findAllDeliveriesDeliverymanUseCase = new FindDeliveriesDeliverymanUseCase();
    const deliveries = await findAllDeliveriesDeliverymanUseCase.execute(id_client);

    return resp.json(deliveries);
  }
}
