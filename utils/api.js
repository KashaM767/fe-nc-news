import axios from "axios";



const newsApi = axios.create({
    baseURL: "https://smarticles.onrender.com/api",
});

export const getArticles = () => {
    return newsApi.get("/articles")
        .then(({ data }) => {
            return data.articles
        });
};

export const getArticle = (id) => {
    return newsApi.get(`/articles/${id}`)
        .then(({ data }) => {
            return data.article
        });
};