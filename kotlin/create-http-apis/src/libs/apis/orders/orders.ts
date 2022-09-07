export const getOrders = async () => {
    return await fetch("http://localhost:8080/orders")
}

export const getOrder = async (orderId: string) => {
    return await fetch(`http://localhost:8080/orders/${encodeURIComponent(orderId)}`, {
         headers: {
      'Content-Type': 'application/json'
    },
    })
}

export const getOrderTotal = async (orderId: string) => {
    return await fetch(`http://localhost:8000/orders/${encodeURIComponent(orderId)}/total`)
}