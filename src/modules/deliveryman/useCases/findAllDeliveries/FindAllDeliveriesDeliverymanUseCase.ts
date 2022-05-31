import { prisma } from "../../../../database/prismaClient";

export class FindDeliveriesDeliverymanUseCase {
  async execute(id_deliveryman: string) {
    const deliveries = await prisma.deliveryman.findMany({
      where: {
        id: id_deliveryman,
      },
      select: {
        deliveries: true,
        id: true,
        username: true,
      },
    });
    return deliveries;
  }
}
