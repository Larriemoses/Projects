import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ArticleDetail from './pages/ArticleDetail';
import AddArticle from './pages/AddArticle';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App: React.FC = () => {
    return (
        <Router>
            <div className="flex flex-col min-h-screen">
                <Navbar />
                <main className="flex-grow">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/article/:id" element={<ArticleDetail />} />
                        <Route path="/add-article" element={<AddArticle />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
};

export default App;