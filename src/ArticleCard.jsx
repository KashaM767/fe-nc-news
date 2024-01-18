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
        <Card sx={{ maxWidth: 300 }} className='item-card'>
            <CardActionArea onClick={() => {
                navigate(`/articles/${article.article_id}`);
            }}>
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
                </CardContent>
            </CardActionArea >
        </Card>
    )
}

export default ArticleCard;

