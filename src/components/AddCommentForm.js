import axios from "axios";
import { useState } from "react";
import useUser from "../hooks/useUser";

const AddCommentForm = ({articleId, onArticleUpdated}) => {
    const [commentText, setCommentText] = useState('');
    const {user} = useUser();

    const addComment = async () => {
        const token = user && await user.getIdToken();
        const headers = token ? { authtoken: token} : {}; 
        const response = await axios.post(`http://localhost:8000/api/article/${articleId}/comments`, {
            postedBy: user.email,
            text: commentText,
        }, {headers});
        const updatedArticle = response.data;
        onArticleUpdated(updatedArticle);
        setCommentText('');
    }
    return (
        <div id="add-comment-form">
            <label>
                {user && <p>You are commenting as {user.email}</p>}
                <textarea 
                    value={commentText}
                    onChange = {e => setCommentText(e.target.value)}
                    rows="4"
                    cols="50"/>
            </label>
            <button onClick={addComment}>Add comment</button>
        </div>
    )
}

export default AddCommentForm;