import { getComments } from "../utils/api";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CommentsCard from "./CommentsCard";

const CommentsList = () => {
    const [comments, setComments] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false)
    const { article_id } = useParams();

    useEffect(() => {
        getComments(article_id).then((commentsArray) => {
            setComments(commentsArray)
            setIsLoading(false)
        })
            .catch((err) => {
                setIsError(true)
                setIsLoading(false)
            })
    }, [])

    if (isLoading) return <p>Loading...</p>
    if (isError) return <p>Something went wrong</p>

    return (
        <ul>
            {comments.map((comment) => {
                return <CommentsCard comment={comment} key={comment.comment_id} />
            })}
        </ul>
    )
}

export default CommentsList;