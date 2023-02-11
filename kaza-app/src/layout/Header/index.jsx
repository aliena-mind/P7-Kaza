import { NavLink } from 'react-router-dom' // importation de 'NavLink'

import '../../styles/layout/Header/index.css' // importation du fichier CSS
 
const logo = require('../../assets/logo/logo-header.webp'); // importation du logo requise

function Header() {
    return (
        <div className='header'>
            <NavLink to="/">
                <img className='logo-kaza' src={logo} alt="Logo Kasa"/>
            </NavLink>
            <nav className='nav'>
                <NavLink className='nav-link' to="/">ACCUEIL</NavLink>
                <NavLink className='nav-link' to="/about">À PROPOS</NavLink>
            </nav>
        </div>
    )
}

export default Header