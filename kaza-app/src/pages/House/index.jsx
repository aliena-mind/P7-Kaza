import { useEffect } from 'react' // importation de 'useEffect' 
import { useParams, useNavigate } from "react-router-dom" // importation de 'useParams' & 'useNavigate'

import housingList from "../../datas/housingList" // importation des datas 'housingList'

// importation des composants : 
import Slideshow from "../../components/Slideshow" 
import Ratings from '../../components/Ratings' 
import Collapse from '../../components/Collapse' 

import '../../styles/pages/House/index.css' // importation du fichier CSS


function House() {
    const { id } = useParams(window.location.href) // récupère le paramètre id dans l'url

    // houseElement = 'house' de meme 'id' disponible dans 'housingList' :
    const houseElement = housingList.find((house) => house.id === id) 
    
    let navigate = useNavigate();

    useEffect(() => { 
        if (!houseElement) { // si 'houseElement' n'existe pas :
          navigate("/error"); // redirection de la page vers le path '/error', or tous les path non définit sont redirigé vers 'Error' 
        }
      }, [houseElement, navigate]); // 'useEffect' sera exécuté à chaque fois que houseElement est modifiée

    if (houseElement) {
        return (
            <div className='house'>
                <Slideshow pictures= { houseElement.pictures }/> {/* props 'picture' de 'houseElement' */}
                <div className='house-description-ratings'>
                    <div className='house-description'>
                        <h1 className='house-title'> { houseElement.title } </h1> {/* props 'title' de 'houseElement' */}
                        <p className='house-location'> { houseElement.location }</p> {/* props 'location' de 'houseElement' */}
                        <div className='tags'>
                            {houseElement.tags.map(tag => ( // pour chaque 'tag' parmi 'tags' compris dans 'houseElement' :
                                <div className='tag' key={tag}>{tag}</div>
                            ))}
                        </div>
                    </div>
                    <div className='house-ratings-host'>
                        <div className='host'>
                            <p>{houseElement.host.name}</p>
                            <img className='host-image' src={houseElement.host.picture} alt="Host" />
                        </div>
                        <Ratings rating={houseElement.rating}/>
                    </div>
                </div>
                <div className='house-collapse'>
                    <div>

                        {/* 'text' & 'content' envoyé via les props */}
                        <Collapse className='house-collapse' text='Description' content={houseElement.description}/> 
                    </div>
                    <div>
                        {/* 'text' & 'content' envoyé via les props */}
                        <Collapse className='house-collapse' text='Équipements' content={houseElement.equipments} /> 
                    </div>
                </div>
                
            </div>
        )
    }
}
 
export default House