import { lazy, Suspense } from "react"
import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
import { ErrorBoundary } from "./error-boundary"

const ChildPage = lazy(() => import("./child-page"))
const ChildNestedPage = lazy(() => import("./child-nested-page"))

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <ul>
            <li><Link to="/">root</Link></li>
            <li><Link to="/child">child</Link></li>
            <li><Link to="/child-nested">child nested root</Link></li>
            <li><Link to="/child-nested/a">child nested a</Link></li>
            <li><Link to="/child-nested/b">child nested b</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="" element={<div>main</div>} />
          <Route path="child-nested/*" element={
            <ErrorBoundary>
              <Suspense fallback={<div>Loading...</div>}>
                <ChildNestedPage />
              </Suspense>
            </ErrorBoundary>
          } />
          <Route path="child" element={
            <ErrorBoundary>
              <Suspense fallback={<div>Loading...</div>}>
                <ChildPage />
              </Suspense>
            </ErrorBoundary>
          } />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
