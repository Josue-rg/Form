import { useState } from 'react'
import './App.css'
import Form from './components/Form'
import Login from './components/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Login/>
    </>
  )
}

export default App
