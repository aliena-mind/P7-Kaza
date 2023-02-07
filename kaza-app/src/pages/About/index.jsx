import '../../styles/pages/About/index.css'

import Banner from '../../components/Banner'; // importation du composant Banner
import banner from '../../assets/banner/banner-about.png' // importation de l'image de la bannière

function About() {
    return (
        <div className="about">
            <Banner image={banner} className="about-banner-container"/>
            <h1>À propos..</h1>
        </div>
    )
}
 
export default About