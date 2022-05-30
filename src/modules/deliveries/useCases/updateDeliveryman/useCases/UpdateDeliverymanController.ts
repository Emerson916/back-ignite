import { Request, Response } from "express";
import { UpdateDeliverymanUseCase } from "./UpdateDeliverymanUseCaso";

export class UpdateDeliverymanController {
  async handle(req: Request, resp: Response) {
    const { id_deliveryman } = req;
    const { id: id_delivery } = req.params;

    const updateDeliverymanUseCase = new UpdateDeliverymanUseCase();
    const delivery = await updateDeliverymanUseCase.execute({
      id_deliveryman,
      id_delivery,
    });

    return resp.json(delivery);
  }
}
