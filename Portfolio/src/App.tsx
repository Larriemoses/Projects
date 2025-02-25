import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from './Components/Nav'
import Home from './Components/Home'

import './App.css'

function App() {


  return (
    <>
    <Nav/>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

      </Routes>
    </BrowserRouter>
        
    </>
  )
}

export default App
