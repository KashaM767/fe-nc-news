import ArticleCard from "./ArticleCard";
import { useState, useEffect } from "react";

const ArticleList = () => {
    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        fetch(`https://smarticles.onrender.com/api/articles`)
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                setArticles(data.articles)
                setIsLoading(false)
            })
    }, [])

    if (isLoading) return <p>Loading...</p>

    return (

        <ul>
            {articles.map((article) => {
                return <ArticleCard article={article} key={article.article_id} />
            })}
        </ul>
    )
}


export default ArticleList;