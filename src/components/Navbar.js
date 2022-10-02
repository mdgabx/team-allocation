import { Link } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-8">
                <li class="nav-item">
                    <Link className="nav-link" to="/">Home</Link>
                </li>
                <li class="nav-item">
                    <Link className="nav-link" to="/group">Group</Link>
                </li>
            </ul>
        </nav>
     );
}
 
export default Navbar;