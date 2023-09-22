import { Link, NavLink } from 'react-router-dom';
import './Nav.scss'
const Nav = () => {
    return (
        <div className="topnav">
            <NavLink to="Home">Home</NavLink>
            <NavLink to="CustomersList">CustomersList</NavLink>
            <NavLink to="Timer">Timer</NavLink>
            <NavLink to="TodosList">TodosList</NavLink>
            <NavLink to="Blogs">Blogs</NavLink>
        </div>
    )
}
export default Nav;
