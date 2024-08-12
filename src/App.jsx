import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LineChart from './components/LineChart'
import ProductsCarousel from './components/product'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <LineChart/>
      <ProductsCarousel/>
    </>
  )
}

export default App
