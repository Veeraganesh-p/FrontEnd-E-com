import {Link} from "react-router-dom";
import './Navbar.css'

function Navbar() {
    return (
        <nav className="nav">
            <div className="nav-logo">Veera Market</div>
            <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/products"> Products </Link>
            <Link to="/cart"> Cart </Link>
            <Link to="/contact"> Contact Us</Link>
            </div>
        </nav>
    )
}
export default Navbar