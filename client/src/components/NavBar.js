import { Link } from 'react-router-dom'; // Import the Link component
import '../css/NavBar.css'; // Import the NavBar CSS

function NavBar() {
    return (
        <nav className="nav-bar">
            {/* Logo (placed on the left) */}
            <div className="logo">Your Logo</div>

            {/* Navigation Links (placed on the right) */}
            <div className="nav-links">
                <Link to="/login" className="nav-link">
                    Login
                </Link>
                <Link to="/campaigns" className="nav-link">
                    Campaigns
                </Link>
            </div>
        </nav>
    );
}



export default NavBar;