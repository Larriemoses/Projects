import Nav from "./Components/Nav";
// import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Articles from "./Components/Articles";
import Home from "./Components/Home";


function App() {
  return (
    
    <BrowserRouter>
    <Nav />
      <Routes>
       
        <Route path="/" element={<Home />} />
        <Route path="articles" element={<Articles />} />
              
        
      </Routes>
    </BrowserRouter>
  );

  
}


export default App
