
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import HomePage from './pages/HomePage'
import About from './pages/About';
import ArticlePage from './pages/ArticlePage';
import ArticlesListPage from './pages/ArticlesListPage';
import Navbar from './Navbar';


function App() {
  return (
    <Router>
        <div className="App">
     <Navbar />
      <div id="page-body">
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/articles/:articleId' element={<ArticlePage />}/>
        <Route path='/articles' element={<ArticlesListPage />}/>
       </Routes>
      </div>
     
    </div>
    </Router>

  );
}

export default App;
