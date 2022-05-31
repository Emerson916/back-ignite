import { Request, Response } from "express";
import { FindAllAvailableUseCase } from "./FindAllAvailableUseCase";

export class FindAllAvailableController {
    async handle(req: Request, resp: Response) {
        const findAllAvailableUseCase = new FindAllAvailableUseCase()

        const deliveries = await findAllAvailableUseCase.execute();

        return resp.json(deliveries)
    }
}