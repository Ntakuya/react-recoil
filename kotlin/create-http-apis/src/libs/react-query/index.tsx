import { QueryClient, QueryClientProvider as RootQueryProvider } from "react-query";
import type { ReactNode } from "react"

const client = new QueryClient()

export interface QueryClientProviderProps {
    children: ReactNode
} 


export function QueryClientProvider(props: QueryClientProviderProps) {
    return (
        <RootQueryProvider client={client}>
            {props.children}
        </RootQueryProvider>
    )
}
