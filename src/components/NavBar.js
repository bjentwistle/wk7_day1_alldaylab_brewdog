
import {Link} from 'react-router-dom'; 
import './NavBar.css'

const NavBar = () => {  // don't use <a> (attributes) in here 
    return (
        <ul>
            <li>
                <Link to="/"> Home </Link>
            </li>
            <li>
                <Link to="/contacts"> Contacts </Link>
            </li>
            <li>
                <Link to="/shop"> Shop </Link>
            </li>
        </ul>

    );
}

export default NavBar;