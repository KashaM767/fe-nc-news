import ArticleList from './ArticleList';

export function findTopic() {
    let topicQuery = window.location.pathname
    topicQuery = topicQuery.split('/')
    return topicQuery[2]
}


const TopicSelect = () => {
    return <ArticleList findTopic />
}

export default TopicSelect;