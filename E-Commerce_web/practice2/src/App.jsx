import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import Form from './pages/form'
import Home from './home'
import Navbar from './navbar';
import About from './pages/about'

function App() {
  return (
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/form' element={<Form />} />
      <Route path='/about' element={<About />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
