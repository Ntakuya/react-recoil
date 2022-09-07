export const getCustomers = async () => {
    return await fetch("http://localhost:8080/customers")
}