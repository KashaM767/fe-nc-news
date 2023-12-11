import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';



const ArticleCard = (props) => {
    const { article } = props
    return (
        <Card sx={{ maxWidth: 225 }} className='item-card'>
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
                <button id="read-more" onClick={() => { console.log(article.article_id) }}>Read more</button>
            </CardContent>
        </Card>
    )
}

export default ArticleCard;