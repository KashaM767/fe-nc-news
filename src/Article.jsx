import { useState, useEffect } from "react";
import { getArticle, patchArticleVote } from '../utils/api';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useParams } from "react-router-dom";
import CommentsList from "./CommentsList";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import PostComment from "./PostComment";

const Article = () => {
    const [article, setArticle] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false)
    const { article_id } = useParams();
    const [showComments, setShowComments] = useState(false);
    const [addVote, setAddVote] = useState(0);


    const handleLikeClick = () => {
        const copyArticle = { ...article }
        setArticle(copyArticle)
        copyArticle.votes++
        setAddVote((currVote) => currVote + 1);
        setIsError(false);
        patchArticleVote(article_id, { inc_votes: 1, })
            .catch((err) => {
                setIsError(true);
            });
    };

    const handleDislikeClick = () => {
        const copyArticle = { ...article }
        setArticle(copyArticle)
        copyArticle.votes--
        setAddVote((currVote) => currVote - 1);
        setIsError(false);
        patchArticleVote(article_id, { inc_votes: -1, })
            .catch((err) => {
                setIsError(true);
            });
    };


    useEffect(() => {
        getArticle(article_id).then((article) => {
            setArticle(article)
            setIsLoading(false)
        })
            .catch((err) => {
                setIsLoading(false)
                setIsError(true)
            })
    }, [])

    if (isLoading) return <p>Loading...</p>
    if (isError) return <p>Something went wrong</p>

    return (
        <Card sx={{ maxWidth: 300 }} id='single-card'>
            <CardMedia
                component="img"
                height="140"
                alt={article.title}
                image={article.article_img_url}
            />
            <CardContent>
                <Typography variant="h5" component="div" id="article_title">
                    <li>{article.title}</li>
                </Typography>
                <Typography variant="h6" component="div" id="card-links">
                    <li>{article.body}</li>
                </Typography>
                <Typography variant="h6" component="div" id="author">
                    <li>{article.author} on {article.created_at.slice(0, 10)}</li>
                </Typography>
                <Typography variant="h6" component="div" id="card-links">
                    <li>{article.comment_count} comments</li>
                    <li>{article.votes} votes</li>
                </Typography>
                <div>
                    <Stack spacing={5} direction="row">
                        <Button variant="text" onClick={handleLikeClick}>Like</Button>
                        <Button variant="text" onClick={handleDislikeClick}>Dislike</Button>
                    </Stack>
                </div>
                <PostComment />
                <button id="show" className="btn" onClick={() => setShowComments(!showComments)}>{showComments ? "Hide Comments" : "Show Comments"}</button>
                {showComments ? <CommentsList /> : null}

            </CardContent>
        </Card>

    )
}


export default Article;