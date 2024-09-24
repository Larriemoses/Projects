import React from 'react'
import { Link } from 'react-router-dom'
import articles from '../pages/article-contents'

const ArticlesList = ( { articles }) => {
  return (
    <>   
    <h1>Articles</h1>
    {articles.map(article =>(
      <Link key={article.name} to={`/articles/${article.name}`} className='articlesList'>
         
        <h3>{article.title}</h3>
       
        <p>{article.content[0].substring(0, 100)}...</p>
        <hr />
      </Link>
      
    ))}
 </>
  )
}

export default ArticlesList