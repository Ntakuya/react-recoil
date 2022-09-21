import { useQuery } from "@tanstack/react-query";

export function useArticles() {
    const controller = new AbortController()

    const abortRequest = () => {
        if (controller) {
            controller.abort()
        }
    }
    
    const { isLoading, error, data } = useQuery(["/articles"], () => fetch("http://0.0.0.0:8080/articles", { signal: controller.signal }))

    return ({ isLoading, error, articles: data, abortRequest })
}