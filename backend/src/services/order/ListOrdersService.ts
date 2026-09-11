import prismaClient from "../../prisma";

class ListOrdersService {
  async execute() {
    const orders = await prismaClient.order.findMany({
      where: {
        draft: false,
        status: false // Adicionado para trazer apenas pedidos em aberto
      },
      orderBy: {
        created_at: 'desc'
      }
    });

    return orders;
  }
}

export { ListOrdersService };