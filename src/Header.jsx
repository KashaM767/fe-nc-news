import { Link } from "react-router-dom";


const Header = () => {
    return (
        <nav id="nav">
            <h1 id="header">NC News</h1>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/articles" >Articles</Link></li>
            <li><Link to="/topics" >Topics</Link></li>
            <p id="user">logged in as grumpy19</p>
        </nav>

    )
}

export default Header;