import { useCustomers } from "../hooks/use-customers";

export function CustomerList() {
    const { isLoading, error, customers } = useCustomers()

    return (
        <div>sample</div>
    )
}

export { CustomerList as default }