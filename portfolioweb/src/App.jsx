import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Home from './pages/Home';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/footer';


function App() {
  return (
    <div className='App'>
     <Router>
        <Navbar />
        <Routes>
          <Route path ="/" element={<Home />} />
          <Route path ="/projects" element={<Projects />} />
          <Route path ="/experience" element={<Experience />} />
        </Routes>
        <Footer /> 
     </Router>
    </div>
  )
}

export default App
