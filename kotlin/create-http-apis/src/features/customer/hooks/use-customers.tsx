import { useQuery } from "react-query"
import * as CustomerAPI from "../../../libs/apis/customer/get-customers"

export function useCustomers() {
    const { isLoading, error, data } = useQuery("getCustomers", () => CustomerAPI.getCustomers().then(res => res.json))

    return { isLoading, error, customers: data }
}