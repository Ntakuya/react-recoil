import { Route, Routes } from "react-router-dom"

export function ChildNestedPage() {
    return (
        <Routes>
            <Route index element={<div>child nested root</div>} />
            <Route path="a" element={<div>child nested page a</div>} />
            <Route path="b" element={<div>child nested page b</div>} />
        </Routes>
    )
}

export default ChildNestedPage