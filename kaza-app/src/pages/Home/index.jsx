import '../../styles/pages/Home/index.css' // importation du fichier CSS

// importation des composants :
import Banner from '../../components/Banner'; 
import Cards from '../../components/Cards' 

function Home() {

  // importation de l'image de la bannière
  const banner = require('../../assets/banner/banner-home.webp'); 

  return (
    <div className="home">
      <Banner image={banner} className="home-banner-container"/> {/* props 'image' */}
      <div className='text-container'>
        <p className='banner-text'>Chez vous, partout et ailleurs </p>
      </div>
      <Cards />
    </div>
  );
}

export default Home;
