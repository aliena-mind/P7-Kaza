import '../../styles/pages/About/index.css'

import Banner from '../../components/Banner'; // importation du composant Banner
import banner from '../../assets/banner/banner-about.webp' // importation de l'image de la bannière

import Collapse from '../../components/Collapse'; // importation du composant Collapse

function About() {
    return (
        <div className="about">
            <Banner image={banner} className="about-banner-container"/>
            <h1>À propos..</h1>
            <Collapse text='Fiabilité' content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes." /> {/* 'text' envoyé via les props */}
            <Collapse text='Respect' content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme." /> 
            <Collapse text='Service' content="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question" />
            <Collapse text='Responsabilité' content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes." />
        </div>
    )
}
 
export default About