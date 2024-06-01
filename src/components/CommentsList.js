
const CommentsList = ({comments}) => {
    return (
        <>
            <h3>Comments: </h3>
            {comments.map((comment, i) => 
                <div key={i} className="comment">
                    <h4> {comment.postedBy} </h4>
                    {comment.text}
                </div>
            )}
        </>
    )
}

export default CommentsList;