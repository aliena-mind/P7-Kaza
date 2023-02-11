import '../../styles/layout/Footer/index.css' // importation du fichier CSS

const logo = require('../../assets/logo/logo-footer.webp'); // importation du logo requise

function Footer() {
    return (
        <div className='footer'>
            <img className='logo-kaza' src={logo} alt="Logo Kasa"/>
            <p className='footer-text'>© 2020 Kasa. All rights reserved</p>
        </div>
    )
}

export default Footer