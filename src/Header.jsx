import { Link } from "react-router-dom";


const Header = () => {
    return (
        <header>
            <h1 id="header">NC News</h1>
            <Link to="/">Home</Link><br />
            <Link to="/articles">Articles</Link>

        </header>

    )
}

export default Header;