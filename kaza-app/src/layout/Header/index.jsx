import { Link } from 'react-router-dom'
import logo from '../../assets/logo/logo.svg'
import '../../styles/layout/Header/index.css'
 
function Header() {
    return (
        <div className='header'>
            <Link to="/">
                <img className='logo-kaza' src={logo} alt="Logo Kasa"/>
            </Link>
            <nav className='nav'>
                <Link className='nav-link' to="/">ACCUEIL</Link>
                <Link className='nav-link' to="/about">À PROPOS</Link>
            </nav>
        </div>
    )
}

export default Header