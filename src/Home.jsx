import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div id="home-links">
            <p><Link to="/articles">Articles</Link></p>
            <p>Topics</p>
        </div>
    )
}

export default Home;