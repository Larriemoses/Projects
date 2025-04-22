import React from 'react';

interface ArticleCardProps {
    article: {
        id: number;
        title: string;
        content: string;
    };
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
    return (
        <div className="p-4 border rounded">
            <h2 className="text-lg font-bold">{article.title}</h2>
            <p>{article.content}</p>
        </div>
    );
};

export default ArticleCard;