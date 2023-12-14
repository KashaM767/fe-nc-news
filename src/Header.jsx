import { Link } from "react-router-dom";


const Header = () => {
    return (
        <nav id="nav">
            <h1 id="header">NC News</h1>
            <p id="user">logged in as grumpy19</p>
            <Link to="/">Home</Link><br />
            <Link to="/articles">Articles</Link><br />
            <Link to="/topics">Topics</Link>
        </nav>

    )
}

export default Header;