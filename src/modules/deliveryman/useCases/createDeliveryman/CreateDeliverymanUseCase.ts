import { hash } from "bcrypt";
import { prisma } from "../../../../database/prismaClient";

interface createDeliveryman {
  username: string;
  password: string;
}

export class CreateDeliverymanUseCase {
  async execute({ username, password }: createDeliveryman) {
    const deliverymanExist = await prisma.deliveryman.findFirst({
      where: {
        username: {
          mode: "insensitive",
        },
      },
    });

    if (deliverymanExist) {
      throw new Error("Client already exists");
    }

    //criptografando a senha
    const hashPassword = await hash(password, 10);

    // Salvando o deliveryman
    await prisma.deliveryman.create({
      data: {
        username,
        password: hashPassword,
      },
    });
  }
}
