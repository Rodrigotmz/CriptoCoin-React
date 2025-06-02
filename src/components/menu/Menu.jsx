import './Menu.css'
import { NavLink } from 'react-router-dom'
import Loader from '../helps/loader';

const Menu = () =>{
    return (
        <nav className="main-menu">
            <img srcSet="" alt="logo"/>
            <ul>
                <li><NavLink to="/">Inicio</NavLink></li>
                <li><NavLink to="/criptos">Lista de criptos</NavLink></li>
            </ul>
        </nav>
    );
}

export default Menu;