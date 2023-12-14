import DeleteIcon from '@mui/icons-material/Delete';
import * as React from 'react';
import IconButton from '@mui/material/IconButton';

const CommentsCard = (props) => {
    const { comment } = props;
    return (
        <div className="comment-box">
            <li><p>{comment.body}</p></li>
            <li><p id="author">{comment.author} on {comment.created_at.slice(0, 10)}</p></li>
            <li><p>{comment.votes} comments  </p></li>
            <li><p>{comment.votes} votes</p></li>
            <IconButton aria-label="delete" color="primary" id="delete-button">
                <DeleteIcon />
                Delete comment
            </IconButton>
        </div>
    )
}

export default CommentsCard;