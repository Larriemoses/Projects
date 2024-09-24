
import ArticlesList from '../components/ArticlesList'
import articles from './article-contents'
import '../styles/ArticleListPages.css'

const ArticlesListPage = () => {
  return (
    <>   
    <h1>Articles</h1>
   <ArticlesList articles = { articles } />
 </>

  )
}

export default ArticlesListPage

