import { Link } from 'react-router-dom' // importation de la fonction "Link"
import housingList from "../../datas/housingList" // importation des datas "housingList"
import '../../styles/components/Cards/index.css'

function Cards() {

	return (
        <div className="card-container">
            {housingList.map((house) => ( // pour chaque 'house' de 'housingList' :
                <Link to={`/house/${house.id}`} className="card" key={house.id}> {/* lien vers la page 'house' de l'id récupéré dans les paramètres de l'URL :*/}
                    <ul>
                        <li className="card-cover-container">
                            <img className='card-cover' src={house.cover} alt={`${house.title} cover`} /> {/* le 'src' et le 'alt' de l'image est définit en fonction de l'élémment "housingList" affiché */}
                        </li>
                        <li className="card-title">{house.title}</li> {/* le titre est définit en fonction de l'élémment "housingList" affiché */}
                    </ul>
                </Link>
            ))}
        </div>
    )
}

export default Cards
