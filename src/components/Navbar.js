import { Link } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-8">
                <li className="nav-item">
                    <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/group">Group</Link>
                </li>
            </ul>
        </nav>
     );
}
 
export default Navbar;