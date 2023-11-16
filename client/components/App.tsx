import { useFruits } from '../hooks/useFruits.ts'
import weatherapi from '../apis/weatherapi.ts'

function App() {
  weatherapi()
  return (
    <>
      <div className="app">
        <h1>Fullstack Boilerplate - with Fruits!</h1>
      </div>
    </>
  )
}

export default App
