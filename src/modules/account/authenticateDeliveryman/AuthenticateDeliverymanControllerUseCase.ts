import { compare } from "bcrypt";
import { prisma } from "../../../database/prismaClient";
import { sign } from "jsonwebtoken";

interface AuthenticateDeliveryman {
  username: string;
  password: string;
}

export class AuthenticateDeliverymanUseCase {
  async execute({ username, password }: AuthenticateDeliveryman) {
    //Receber o username e o password

    //Verificar se o username está cadastrado
    const deliveryman = await prisma.deliveryman.findFirst({
      where: {
        username: username,
      },
    });

    if (!deliveryman) {
      throw new Error("Username or password invalid!");
    }

    //Verificar se senha corresponde ao username
    const passwordMatch = await compare(password, deliveryman.password);

    if (!passwordMatch) {
      throw new Error("Username or password invalid!");
    }

    //Gerar o token
    const token = sign({ username }, "b43fdd98b1fd705ae4c3a10cf25aad8a", {
        subject: deliveryman.id, expiresIn: "1h",
    });

    return token
  }
}
