import { Request, Response } from 'express'
import { FinishOrderService } from '../../services/order/FinishOrderService'

class FinishOrderController {
  async handle(req: Request, res: Response) {
    const { order_id } = req.body

    if (!order_id) {
      return res.status(400).json({ error: 'order_id é obrigatório.' })
    }

    try {
      const finishOrderService = new FinishOrderService()
      const order = await finishOrderService.execute({ order_id })

      return res.json(order)
    } catch (err) {
      return res.status(400).json({ error: 'Erro ao finalizar o pedido.' })
    }
  }
}

export { FinishOrderController }