import { Link } from "react-router-dom";
import TopicsList from "./TopicsList";




const Home = () => {
    return (
        <div id="home-links">
            <p><Link to="/articles">All articles</Link></p>
            <p><Link to="/topics">All topics</Link></p>

        </div>
    )
}

export default Home;