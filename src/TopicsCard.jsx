import { getTopics } from '../utils/api';
import { useState } from "react";

const TopicsCard = (props) => {
    const { topic } = props;

    return (
        <div className="topics-list">
            <li>{topic.slug}</li>
        </div>
    )

}

export default TopicsCard;