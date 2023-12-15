import { getTopics } from "../utils/api";
import { useState, useEffect } from "react";
import TopicsCard from "./TopicsCard";

function TopicsList() {
    const [topics, setTopics] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false)



    useEffect(() => {
        getTopics().then((TopicsArray) => {
            setTopics(TopicsArray)
            setIsLoading(false)
        })
            .catch((err) => {
                console.log(err)
                setIsError(true)
            })
    }, [])


    if (isLoading) return <p>Loading...</p>
    if (isError) return <p>Something went wrong</p>

    return (

        <ul>
            {topics.map((topic) => {
                return <TopicsCard topic={topic} key={topic.slug} />
            })}
        </ul>
    )
}


export default TopicsList;