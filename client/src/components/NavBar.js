import { Link } from 'react-router-dom'; // Import the Link component
import '../css/NavBar.css'; // Import the NavBar CSS

function NavBar() {
    return (
        <nav className="nav-bar">
            {/* Logo (placed on the left) */}
            <div className="logo">
                <img src={process.env.PUBLIC_URL + "/images/SmartLogo.png"} alt="Logo" />
            </div>

            {/* Navigation Links (placed on the right) */}
            <div className="nav-links">
                <Link to="/campaigns" className="nav-link">
                    Campaigns
                </Link>
                <Link to="/register" className="nav-link">
                    Login / SignUp
                </Link>
            </div>
        </nav>
    );
}



export default NavBar;