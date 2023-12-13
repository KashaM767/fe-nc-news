import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ArticleCard = (props) => {
    const { article } = props
    const navigate = useNavigate();

    return (
        <Card sx={{ maxWidth: 225 }} className='item-card'>
            <CardActionArea onClick={() => {
                navigate(`/articles/${article.article_id}`);
            }}>
                <CardMedia
                    component="img"
                    height="100"
                    alt={article.title}
                    image={article.article_img_url}
                />
                <CardContent>
                    <Typography variant="h5" component="div" id="article_title">
                        <li>{article.title}</li>
                    </Typography>
                    <Typography variant="h6" component="div" id="author">
                        <li>{article.author}</li>
                    </Typography>
                    <Typography variant="h6" component="div" id="card-links">
                        <li>{article.comment_count} comments</li>
                        <li>{article.votes} votes</li>
                    </Typography>
                </CardContent>
            </CardActionArea >
        </Card>
    )
}

export default ArticleCard;

