import { compare } from "bcrypt";
import { prisma } from "../../../database/prismaClient";
import { sign } from "jsonwebtoken";

interface AuthenticateClient {
  username: string;
  password: string;
}

export class AuthenticateClientUseCase {
  async execute({ username, password }: AuthenticateClient) {
    //Receber o username e o password

    //Verificar se o username está cadastrado
    const client = await prisma.clients.findFirst({
      where: {
        username: username,
      },
    });

    if (!client) {
      throw new Error("Username or password invalid!");
    }

    //Verificar se senha corresponde ao username
    const passwordMatch = await compare(password, client.password);

    if (!passwordMatch) {
      throw new Error("Username or password invalid!");
    }

    //Gerar o token
    const token = sign({ username }, "b43fdd98b1fd705ae4c3a10cf25aad8a", {
        subject: client.id, expiresIn: "1h",
    });

    return token
  }
}
