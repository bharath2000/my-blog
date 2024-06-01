import articles from "./articles-content";
import ArticlesList from "../components/ArticlesList";

const AriclesListPage = () => {
    
    return (
        <>
            <h1>Articles</h1>
            <ArticlesList articles={articles}/>
        </>
        
    )
}

export default AriclesListPage;