import { useQuery } from "react-query";
import {  OrderAPI} from "../../../libs/apis/orders"

export function useOrders() {
    const { isLoading, error, data } = useQuery("getOrders", () => OrderAPI.getOrder("2020-04-06-01").then(res => res.json()))

    return {isLoading, error, orders: data}
}