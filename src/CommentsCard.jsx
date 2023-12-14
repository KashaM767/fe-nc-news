import DeleteIcon from '@mui/icons-material/Delete';
import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import { deleteArticleComment } from '../utils/api';
import { useState } from "react";


const loggedInUser = "grumpy19"

const CommentsCard = (props) => {
    const { comment } = props;
    const [isSuccess, setIsSuccess] = useState(false);

    const handledeleteClick = () => {
        deleteArticleComment(comment.comment_id)
            .then(() => {
                setIsSuccess(true)
            })
            .catch((err) => {
                setIsSuccess(false)
            });
    };

    return (
        <div className="comment-box">
            <li><p>{comment.body}</p></li>
            <li><p id="author">{comment.author} on {comment.created_at.slice(0, 10)}</p></li>
            <li><p>{comment.votes} comments  </p></li>
            <li><p>{comment.votes} votes</p></li>
            <IconButton aria-label="delete" color="primary" id="delete-button" disabled={comment.author !== loggedInUser}
                onClick={handledeleteClick}>

                <DeleteIcon />
                Delete comment
            </IconButton>
            {isSuccess ? <p>Your comment has been deleted</p> : null}
        </div>
    )
}

export default CommentsCard;