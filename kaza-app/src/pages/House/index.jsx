import { useParams } from "react-router-dom"
import housingList from "../../datas/housingList" // importation des datas "housingList"


function House() {
    const { id } = useParams(window.location.href) // récupère le paramètre id dans l'url

    const houseElement = housingList.find((object) => object.id === id) // cherche l'objet de meme id disponible dans 'housingList'

    return (
        <div>
            <p> { houseElement.id } </p>
        </div>
    )
}
 
export default House