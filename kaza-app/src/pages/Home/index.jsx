import '../../styles/pages/Home/index.css' // importation du CSS de la page

import Banner from '../../components/Banner'; // importation du composant Banner
import banner from '../../assets/banner/banner-home.png' // importation de l'image de la bannière
import Cards from '../../components/Cards' // importation du component "Cards"


function Home() {
  return (
    <div className="home">
      <Banner image={banner} />
      <Cards />
    </div>
  );
}

export default Home;
