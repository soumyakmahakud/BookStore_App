import { useState } from 'react'
import NevBar from './components/NavBar'
import Banner from './components/Banner'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NevBar/>
    <Banner/>
    </>
  )
}

export default App
