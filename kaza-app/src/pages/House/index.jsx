import { useEffect } from 'react'
import { useParams, useNavigate } from "react-router-dom"
import housingList from "../../datas/housingList" // importation des datas 'housingList'
import Slideshow from "../../components/Slideshow" // importation du composant 'SlideShow'
import Collapse from '../../components/Collapse' // importation du composant 'Collapse'
import '../../styles/pages/House/index.css' // importation du CSS


function House() {
    const { id } = useParams(window.location.href) // récupère le paramètre id dans l'url

    const houseElement = housingList.find((house) => house.id === id) // cherche 'house' de meme id disponible dans 'housingList'
    
    let navigate = useNavigate();

    useEffect(() => { 
        if (!houseElement) { // si 'houseElement' n'existe pas :
          navigate("/error"); // redirection de la page vers le path '/error', or tous les path non définit sont redirigé vers 'Error' 
        }
      }, [houseElement, navigate]); // 'useEffect' sera exécuté à chaque fois que houseElement est modifiée

    if (houseElement) {
        return (
            <div>
                <Slideshow pictures= { houseElement.pictures }/> {/* props 'picture' de 'houseElement' */}
                <div className='house-description'>
                    <h1 className='house-title'> { houseElement.title } </h1> {/* props 'title' de 'houseElement' */}
                    <p className='house-location'> { houseElement.location }</p> {/* props 'location' de 'houseElement' */}
                    <div className='tags'>
                        {houseElement.tags.map(tag => ( // pour chaque 'tag' parmi 'tags' comprise dans 'houseElement' :
                            <div className='tag' key={tag}>{tag}</div>
                        ))}
                    </div>
                    <div className='house-collapse'>
                        <div>
                            <Collapse className='house-collapse' text='Description' content={houseElement.description}/> {/* 'text' envoyé via les props */}
                        </div>
                        <div>
                            <Collapse className='house-collapse' text='Équipements' content={houseElement.equipments.join(', ')} /> 
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
 
export default House