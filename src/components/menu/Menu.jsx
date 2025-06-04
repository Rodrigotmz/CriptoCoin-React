import { useContext } from 'react';
import './Menu.css'
import { NavLink, useNavigate } from 'react-router-dom'
import { UserContext } from '../context/UserContext';

const Menu = () => {
    const navigation = useNavigate()
    const usuario = useContext(UserContext);
    return (
        <nav className="main-menu">
            <img srcSet="" alt="logo" />
            <ul>
                <li><NavLink to="/">Inicio</NavLink></li>
                <li><NavLink to="/criptos">Lista de criptos</NavLink></li>
                <li><NavLink to="/perfil">Perfil de {usuario.name} </NavLink></li>
                <li><a onClick={() => {
                    localStorage.removeItem("tokenReq")
                    navigation("/login")
                }}>Cerrar sesión</a></li>
            </ul>
        </nav>
    );
}

export default Menu;