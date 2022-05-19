import { prisma } from "../../../../database/prismaClient";
import { hash } from "bcrypt";

interface CreateClient {
  username: string;
  password: string;
}

export class CreateClientUseCase {
  async execute({ username, password }: CreateClient) {
    //Validando se o usuário existe
    const clientExist = await prisma.clients.findFirst({
      where: {
        username: {
          mode: "insensitive",
        },
      },
    });

    if (clientExist) {
      throw new Error("Client already exists");
    }

    //criptografando a senha
    const hashPassword = await hash(password, 10);

    // Salvando o client
    await prisma.clients.create({
        data: {
            username,
            password: hashPassword,
        }
    })
  }
}
