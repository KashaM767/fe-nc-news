import { Link } from "react-router-dom";
;

const Home = () => {
    return (
        <div >
            <p className="home-links"><Link to="/articles">All articles</Link></p>
            <p className="home-links"><Link to="/topics">All topics</Link></p>

        </div>
    )
}

export default Home;