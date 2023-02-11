import { Link } from 'react-router-dom' // importation de la fonction "Link"
import housingList from "../../datas/housingList" // importation des datas "housingList"

import '../../styles/components/Cards/index.css' // importation du CSS

function Cards() { // fonction avec argument 'props'

	return (
        <div className="card-container">
            {housingList.map((house) => ( // pour chaque 'house' de 'housingList' :

                // lien vers la page 'house' de l'id récupéré dans les paramètres de l'URL :
                <Link to={`/house/${house.id}`} className="card" key={house.id}> 
                    <ul>
                        <li className="card-cover-container">

                            {/* le 'src' et le 'alt' de l'image est définit en fonction de l'élémment "housingList" affiché */}
                            <img className='card-cover' src={house.cover} alt={`${house.title} cover`} /> 
                        </li>

                        {/* le titre est définit en fonction de l'élémment "housingList" affiché */}
                        <li className="card-title">{house.title}</li> 
                    </ul>
                </Link>
            ))}
        </div>
    )
}

export default Cards
