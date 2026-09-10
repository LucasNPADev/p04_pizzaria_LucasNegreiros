import prismaClient from '../../prisma'

interface OrderRequest {
  order_id: string
}

class FinishOrderService {
  async execute({ order_id }: OrderRequest) {
    if (!order_id) {
      throw new Error('ID do pedido não informado.')
    }

    const order = await prismaClient.order.update({
      where: {
        id: order_id,
      },
      data: {
        status: true,
      },
    })

    return order
  }
}

export { FinishOrderService }