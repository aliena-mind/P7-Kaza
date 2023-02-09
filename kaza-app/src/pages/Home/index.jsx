import '../../styles/pages/Home/index.css' // importation du CSS de la page

import Banner from '../../components/Banner'; // importation du composant Banner
import banner from '../../assets/banner/banner-home.webp' // importation de l'image de la bannière
import Cards from '../../components/Cards' // importation du component "Cards"

function Home() {
  return (
    <div className="home">
      <Banner image={banner} className="home-banner-container"/> {/* props 'image' et 'className' */}
      <div className='text-container'>
        <p className='banner-text'>Chez vous, partout et ailleurs </p>
      </div>
      <Cards />
    </div>
  );
}

export default Home;
