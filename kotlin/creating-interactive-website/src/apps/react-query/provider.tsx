import { FC, ReactElement } from "react"
import { queryClient } from "./client"
import { QueryClientProvider } from '@tanstack/react-query'


export const QueryProvider: FC<{ children: ReactElement }> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      { children }
    </QueryClientProvider>
  )
}
