import '../../styles/pages/Home/index.css' // importation du CSS de la page
import banner from '../../assets/banner/banner.svg' // importation de la bannière
import Cards from '../../components/Cards' // importation du component "Cards"


function Home() {
  return (
    <div className="home">
      <div className='banner-container'>
        <img src= {banner} alt="BannerImage" className="banner-image" />
      </div>
      <Cards />
    </div>
  );
}

export default Home;
