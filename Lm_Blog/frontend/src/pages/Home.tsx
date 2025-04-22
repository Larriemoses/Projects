import React, { useEffect, useState } from 'react';
import ArticleCard from '../components/ArticleCard';

interface Article {
    id: number;
    title: string;
    content: string;
}

const Home: React.FC = () => {
    const [articles, setArticles] = useState<Article[]>([]);

    useEffect(() => {
        const fetchArticles = async () => {
            const response = await fetch('http://localhost:8000/api/articles/');
            const data = await response.json();
            setArticles(data);
        };

        fetchArticles();
    }, []);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-4xl font-bold mb-6">Blog Articles</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {articles.map((article) => (
                    <ArticleCard key={article.id} article={article} />
                ))}
            </div>
        </div>
    );
};

export default Home;