import { Request, Response } from "express";
import { CreateClientUseCase } from "./CreateClientUserCase";

export class CreateClientController {
  async handle(req: Request, res: Response) {
    const { username, password } = req.body;

    const createClientUseCase = new CreateClientUseCase();
    const result = await createClientUseCase.execute({
      username,
      password,
    });

    return res.json(result);
  }
}
