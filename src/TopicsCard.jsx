import { getTopics } from '../utils/api';
import { useState } from "react";
import { Link } from 'react-router-dom';


const TopicsCard = (props) => {
    const { topic } = props;


    return (
        <div className="topics-list">
            <li><Link to={`/topics/${topic.slug}/articles`} id={topic.slug}>{topic.slug}</Link></li>
        </div>
    )

}

export default TopicsCard;