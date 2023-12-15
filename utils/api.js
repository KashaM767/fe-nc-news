import axios from "axios";



const newsApi = axios.create({
    baseURL: "https://smarticles.onrender.com/api",
});

export const getArticles = (topic) => {
    return newsApi.get("/articles", {
        params: { topic: topic },
    })
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

export const addArticleComment = (id, obj) => {
    return newsApi.post(`/articles/${id}/comments`, obj)
        .then(({ data }) => {
            return data.comment
        })
}

export const deleteArticleComment = (id) => {
    return newsApi.delete(`/comments/${id}`)
}

export const getTopics = () => {
    return newsApi.get(`/topics`)
        .then(({ data }) => {
            return data.topics
        })
}