'use client'

import styles from './styles.module.scss'
import { X } from 'lucide-react'
import { use } from 'react'
import { OrderContext } from '@/providers/order'
import { calculateTotalOrder } from '@/lib/helper'
import Image from 'next/image'

export function Modalorder() {
  const { onRequestClose, order, finishOrder } = use(OrderContext)

  async function handleFinishOrder() {
    const orderId = order[0]?.order_id || order[0]?.order?.id

    if (orderId) {
      await finishOrder(orderId)
      onRequestClose()
    }
  }

  return (
    <dialog className={styles.dialogContainer}>
      <section className={styles.dialogContent}>
        <button className={styles.dialogBack} onClick={onRequestClose} type="button">
          <X size={40} color="#ff3f4b" />
        </button>

        <article className={styles.container}>
          <h2>Detalhes do pedido</h2>

          {!order || order.length === 0 ? (
            <p style={{ marginTop: 20, color: '#FFF' }}>
              Carregando itens ou pedido sem produtos...
            </p>
          ) : (
            <>
              <span className={styles.table}>
                Mesa <b>{order[0]?.order?.table}</b>
              </span>

              {order[0]?.order?.name && (
                <span className={styles.name}>
                  <b>{order[0].order.name}</b>
                </span>
              )}

              {order.map((item) => (
                <section className={styles.item} key={item.id}>
                  {item.product?.banner && (
                    <Image
                      src={item.product.banner}
                      alt={item.product?.name || "Foto do Produto"}
                      width={120}
                      height={120}
                      style={{ objectFit: 'cover', borderRadius: '8px' }}
                    />
                  )}
                  <span>
                    Qtd: {item.amount} - <b>{item.product?.name}</b> - R${' '}
                    {(parseFloat(item.product?.price || '0') * item.amount).toFixed(2)}
                  </span>
                  <span className={styles.description}>{item.product?.description}</span>
                </section>
              ))}

              <h3 className={styles.total}>
                Valor Total: R$ {calculateTotalOrder(order)}
              </h3>

              <button className={styles.buttonOrder} onClick={handleFinishOrder} type="button">
                Concluir pedido
              </button>
            </>
          )}
        </article>
      </section>
    </dialog>
  )
}