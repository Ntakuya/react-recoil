import { useArticles } from "../store/article";

export function Articles() {
    const { isLoading, error, articles } = useArticles()
    console.log(isLoading, error, articles)

    return (
        <div>sample</div>
    )
}