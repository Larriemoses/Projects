import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Nav from './Components/Nav'
import Home from './Components/LarrieM'
// import About from './Components/'
import Education from './Components/Education'
import Experience from './Components/Experience'

// import './App.css'


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    
    <Router>
    <Nav />
      <Routes>
       
  
          <Route path='/' Component={Home} />     
          <Route path='/education' Component={Education} />
          <Route path='/experience' Component={Experience} />
 
      </Routes>
    </Router>
    </>
  )
}

export default App

