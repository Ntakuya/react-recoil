import { useOrders } from "../hooks/use-orders"

export const OrderList = () => {
    const { orders, } = useOrders()

    console.log(orders)

    return (
        <div>sample</div>
    )
}