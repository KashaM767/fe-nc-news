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

export const getComments = (id) => {
    return newsApi.get(`/articles/${id}/comments`)
        .then(({ data }) => {
            return data.comments
        });
};

export const patchArticleVote = (id, obj) => {
    return newsApi.patch(`/articles/${id}`, obj)
        .then(({ data }) => {
            return data.article
        });
};
