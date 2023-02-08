import '../../styles/pages/About/index.css'

import Banner from '../../components/Banner'; // importation du composant Banner
import banner from '../../assets/banner/banner-about.png' // importation de l'image de la bannière

import Collapse from '../../components/Collapse'; // importation du composant Collapse

function About() {
    return (
        <div className="about">
            <Banner image={banner} className="about-banner-container"/>
            <h1>À propos..</h1>
            <Collapse text='Fiabilité' />
            <Collapse text='Respect' />
            <Collapse text='Service' />
            <Collapse text='Responsabilité' />
        </div>
    )
}
 
export default About