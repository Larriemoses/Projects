import React from 'react';

interface ArticleCardProps {
    title: string;
    excerpt: string;
    imageUrl: string;
    articleUrl: string;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ title, excerpt, imageUrl, articleUrl }) => {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-full" src={imageUrl} alt={title} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{title}</div>
                <p className="text-gray-700 text-base">{excerpt}</p>
            </div>
            <div className="px-6 pt-4 pb-2">
                <a href={articleUrl} className="text-blue-500 hover:text-blue-800">
                    Read More
                </a>
            </div>
        </div>
    );
};

export default ArticleCard;