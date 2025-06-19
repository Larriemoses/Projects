uimport React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ArticleDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [article, setArticle] = useState<any>(null);
    const [articles, setArticles] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchArticle = async () => {
            try {
                const response = await fetch(`/api/articles/${id}/`);
                if (!response.ok) {
                    throw new Error('Failed to fetch article');
                }
                const data = await response.json();
                setArticle(data);
            } catch (err) {
                setError((err as Error).message); 
            } finally {
                setLoading(false);
            }
        };

        fetchArticle();
    }, [id]);

    const fetchArticles = async () => {
        try {
            const response = await fetch('http://127.0.0.1:8000/articles/');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            setArticles(data);
        } catch (err) {
            console.error('Fetch error:', err);
            setError((err as Error).message);
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="max-w-2xl mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">{article.title}</h1>
            <p className="text-gray-600 mb-4">{article.published_date}</p>
            <div className="prose">
                <p>{article.content}</p>
            </div>
        </div>

<div></div>
    );
};

export default ArticleDetail;