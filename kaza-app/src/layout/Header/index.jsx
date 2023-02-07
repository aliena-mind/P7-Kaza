import { useState } from 'react';
import { Link } from 'react-router-dom'
import logo from '../../assets/logo/logo.svg'
import '../../styles/layout/Header/index.css'
 
function Header() {

    // définit l'état 'activeLink' initialisé avec la valeur "home"
    const [activeLink, setActiveLink] = useState("home"); 

    // fonction fléchée appelée lorsque l'utilisateur clique sur le lien de classe nav-link-logo
    const handleClick = () => {
        setActiveLink("home"); //  modifie la valeur de l'état activeLink vers 'home'
    }
    
    return (
        <div className='header'>
            <Link className='nav-link-logo' to="/" onClick={handleClick}>
                <img className='logo-kaza' src={logo} alt="Logo Kasa"/>
            </Link>
            <nav className='nav'>
                <Link to="/" className={`nav-link ${activeLink === "home" ? "active" : ""}`} // si 'activeLink = 'home', le lien ajoutera la classe "active"
                    onClick={() => setActiveLink("home")}>ACCUEIL {/* modifie la valeur de l'état activeLink vers 'home' */}
                </Link>
                <Link to="/about" className={`nav-link ${activeLink === "about" ? "active" : ""}`} // si 'activeLink = 'about', le lien ajoutera la classe "active"
                    onClick={() => setActiveLink("about")}>ABOUT {/* modifie la valeur de l'état activeLink vers 'about' */}
                </Link>
            </nav>
        </div>
    )
}

export default Header