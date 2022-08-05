import { Route, Routes } from "react-router-dom"
import { IndexPage } from "./pages/index"
import { IntroducingPage } from "./pages/introducing-page"

export function ReactRoutes() {
    return (
        <Routes>
            <Route index element={<IndexPage />} />
            <Route path="a" element={ <IntroducingPage />} />
        </Routes>
    )
}

export default ReactRoutes
