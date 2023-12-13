
const CommentsCard = (props) => {
    const { comment } = props;
    return (
        <div className="comment-box">
            <li><p>{comment.body}</p></li>
            <li><p id="author">{comment.author} on {comment.created_at.slice(0, 10)}</p></li>
            <li><p>{comment.votes} comments  </p></li>
            <li><p>{comment.votes} votes</p></li>
        </div>
    )
}

export default CommentsCard;