import { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useParams } from "react-router-dom";
import { addArticleComment } from "../utils/api";



const PostComment = () => {
    const [username, setUsername] = useState("");
    const [body, setBody] = useState("");
    const [usernameError, setUsernameError] = useState(false);
    const [bodyError, setBodyError] = useState(false);
    const [comments, setComments] = useState([]);
    const { article_id } = useParams();
    const [isError, setIsError] = useState(false)

    let newComment = {
        username, body
    }
    console.log(article_id)
    const handleSubmit = (event) => {
        event.preventDefault();

        setUsernameError(false)
        setBodyError(false)

        if (username === "") {
            setUsernameError(true)
        }
        if (body === "") {
            setBodyError(true)
        }
        const copyComments = [...comments];
        setComments((copyComments) => {
            return [newComment, ...copyComments];
        });

        addArticleComment(article_id, newComment)
            .then(() => {
                newComment = {}
            })
            .catch((err) => {
                console.log(newComment)
                setIsError(true);
            });
    }





    return (

        <form id="my-form" onSubmit={handleSubmit} className="post-comment"
            noValidate autoComplete="off" variant='outlined'>
            <h3>Add comment</h3>
            <TextField className="form-input" id="username" label="username" variant="outlined" margin="dense" required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                error={usernameError} />

            <TextField className="form-input" id="comment-body" label="comment" variant="outlined" margin="dense" multiline required
                value={body}
                onChange={(e) => setBody(e.target.value)}
                error={bodyError} />

            <Button color="primary" onClick={handleSubmit}>Submit</Button>
        </form>


    )
}

export default PostComment;