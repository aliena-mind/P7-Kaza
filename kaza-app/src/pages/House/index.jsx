import { useParams } from "react-router-dom"
import housingList from "../../datas/housingList" // importation des datas "housingList"
import Slideshow from "../../components/Slideshow"


function House() {
    const { id } = useParams(window.location.href) // récupère le paramètre id dans l'url

    const houseElement = housingList.find((house) => house.id === id) // cherche 'house' de meme id disponible dans 'housingList'

    return (
        <div>
            <Slideshow pictures= { houseElement.pictures }/> {/* props 'picture' de 'houseElement' */}
            <h1> { houseElement.title } </h1> {/* props 'title' de 'houseElement' */}
            <p> { houseElement.location }</p> {/* props 'location' de 'houseElement' */}
            <div>
                {houseElement.tags.map(tag => ( // pour chaque 'tag' parmi 'tags' comprise dans 'houseElement' :
                    <span key={tag}>{tag}</span>
                ))}
            </div>
        </div>
    )
}
 
export default House