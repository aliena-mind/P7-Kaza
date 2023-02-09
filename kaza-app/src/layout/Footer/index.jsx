import logo from '../../assets/logo/logo-footer.webp'
import '../../styles/layout/Footer/index.css'

function Footer() {
    return (
        <div className='footer'>
            <img className='logo-kaza' src={logo} alt="Logo Kasa"/>
            <p className='footer-text'>© 2020 Kasa. All rights reserved</p>
        </div>
    )
}

export default Footer