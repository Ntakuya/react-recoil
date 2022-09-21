import { QueryProvider } from "./apps/react-query"
import { Articles } from './components/article'

function App() {
  return (
    <div className="App">
      <QueryProvider>
        <>
          <Articles />
        </>
      </QueryProvider>
    </div>
  )
}

export default App
