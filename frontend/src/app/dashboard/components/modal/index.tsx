import styles from './styles.module.scss'
import { X } from 'lucide-react'
import { use } from 'react'
import { OrderContext } from '@/providers/order'
import { calculateTotalOrder } from '@/lib/helper'

export function Modalorder() {
    const { onRequestClose, order, finishOrder } = use(OrderContext)

    async function handleFinishOrder() {
        if (order && order.length > 0 && order[0]?.order?.id) {
            await finishOrder(order[0].order.id)
        }
    }

    return (
        <dialog className={styles.dialogContainer}>
            <section className={styles.dialogContent}>

                <button className={styles.dialogBack} onClick={onRequestClose}>
                    <X size={40} color='#ff3f4b' />
                </button>

                <article className={styles.container}>
                    <h2>Detalhes do pedido</h2>

                    {(!order || order.length === 0) ? (
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

                            {order.map(item => (
                                <section className={styles.item} key={item.id}>
                                    <span>
                                        Qtd: {item.amount} - <b>{item.product?.name}</b> - R$ {(parseFloat(item.product?.price || '0') * item.amount).toFixed(2)}
                                    </span>
                                    <span className={styles.description}>{item.product?.description}</span>
                                </section>
                            ))}

                            <h3 className={styles.total}>Valor Total: R$ {calculateTotalOrder(order)}</h3>

                            <button className={styles.buttonOrder} onClick={handleFinishOrder}>
                                Concluir pedido
                            </button>
                        </>
                    )}
                </article>
            </section>
        </dialog>
    )
}