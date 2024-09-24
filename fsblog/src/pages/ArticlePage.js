import { useParams } from 'react-router-dom'
import articles from './article-contents'
import '../App.css'
import '../styles/ArticleListPages.css'

const ArticlePage = () => {
    const { articleId } = useParams()
    const article = articles.find(article => article.name === articleId)

    // Check if the article exists
    if (!article) {
        return <h1>Article not found</h1>
    }

    return (
        <>
            <h1 className='articleTitle'>{article.title}</h1>
            {article.content.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
            ))}
        </>
    )
}

export default ArticlePage
