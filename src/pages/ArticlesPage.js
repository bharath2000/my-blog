import { useNavigate, useParams } from "react-router-dom";
import articles from "./articles-content";
import NotFoundPage from "./NotFoundPage";
import { useEffect, useState } from "react";
import axios from 'axios'
import CommentsList from "../components/CommentsList";
import AddCommentForm from "../components/AddCommentForm";
import useUser from "../hooks/useUser";
const ArticlesPage = () => {
    const [articleInfo, setArticleInfo ] = useState({upvotes: 0, comments: [], canUpvote: false})
    const params = useParams();
    const { canUpvote } = articleInfo
    const articleId = params.articleId;
    const navigate = useNavigate();

    const {user, isLoading} = useUser();
    
    useEffect(() => {
        const dataLoader = async () => {
            const token = user && await user.getIdToken();
            const headers = token ? { authtoken: token} : {}; 
            const response = await axios.get(`http://localhost:8000/api/article/${articleId}`, { headers });
            const newArticleInfo = response.data;
            setArticleInfo(newArticleInfo);
        }
        
        dataLoader();
        
        
    }, [isLoading, user, articleId]);

    const article = articles.find(article => article.name === articleId);

    const addUpvotes = async () => {
        const token = user && await user.getIdToken();
        const headers = token ? { authtoken: token} : {}; 
        const response = await axios.put(`http://localhost:8000/api/article/${articleId}/upvote`, null, {headers});
        const updatedArticle = response.data;
        setArticleInfo(updatedArticle);
    }
    
    
    if(!article){
        return <NotFoundPage />
    }
    return (
        <>
            <h1>{article.title}</h1>
            <div>
                { user ?  <button onClick={addUpvotes}> {canUpvote ? "upvote" : "Already upvoted"} </button> :
                <button onClick={() => {navigate('/login')}}> Login to upvote </button> 
                }
                <p>{`This article has ${articleInfo.upvotes} upvotes`}</p>
            </div>
            {article.content.map((paragraph, i) => 
                <p key={i}>{paragraph}</p>
            )}
            {
                user ? <AddCommentForm articleId={articleId} onArticleUpdated={updatedArticle => setArticleInfo(updatedArticle)}/> :
                <button onClick={() => {navigate('/login')}}>log in to add comment</button>
            }
            
            <CommentsList comments={articleInfo.comments} /> 
        </>
    )
}

export default ArticlesPage;