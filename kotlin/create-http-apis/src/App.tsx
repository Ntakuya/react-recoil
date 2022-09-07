import CustomerList from "./features/customer/components/customer-list"
import { OrderList } from "./features/order/components/order-list"
import { QueryClientProvider } from "./libs/react-query"

function App() {

  return (
    <div className="App">
      <QueryClientProvider>
        <CustomerList />
        <OrderList />
      </QueryClientProvider>
    </div>
  )
}

export default App
