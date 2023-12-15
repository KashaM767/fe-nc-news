import { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useParams } from "react-router-dom";
import { addArticleComment } from "../utils/api";

const PostComment = () => {
    const [body, setBody] = useState("");
    const [comments, setComments] = useState([]);
    const { article_id } = useParams();
    const [isError, setIsError] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false);
    const username = "grumpy19"

    let newComment = {
        username, body
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        setComments((currComments) => {
            return [newComment, ...currComments];
        });

        addArticleComment(article_id, newComment)
            .then(() => {
                newComment = {}
                setBody("")
                setIsError(false)
                setIsSuccess(true)
            })
            .catch((err) => {
                setIsError(true)
                setIsSuccess(false)
            });
    }

    return (
        <form id="comment-form" onSubmit={handleSubmit} className="post-comment"
            noValidate autoComplete="off" variant='outlined'>
            <h3>Add comment</h3>
            {isSuccess ? <p>Your comment has been posted &#128512;</p> : null}

            <TextField className="form-input" id="comment-body" label="comment" variant="outlined" margin="dense" multiline required
                value={body}
                onChange={(e) => setBody(e.target.value)}
            />

            <Button color="primary" onClick={handleSubmit} disabled={body === ""}>Submit</Button>
        </form>
    )
}

export default PostComment;