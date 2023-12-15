import ArticleCard from "./ArticleCard";
import { useState, useEffect } from "react";
import { getArticles } from '../utils/api';
import { findTopic } from "./TopicSelect";


const ArticleList = () => {
    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false)
    const searchTopic = findTopic()

    useEffect(() => {
        getArticles(searchTopic).then((articlesArray) => {
            setArticles(articlesArray)
            setIsLoading(false)
        })
            .catch((err) => {
                console.log(err)
                setIsError(true)
            })
    }, [searchTopic])

    if (isLoading) return <p>Loading...</p>
    if (isError) return <p>Something went wrong</p>

    return (

        <ul>
            {articles.map((article) => {
                return <ArticleCard article={article} key={article.article_id} />
            })}
        </ul>
    )
}


export default ArticleList;