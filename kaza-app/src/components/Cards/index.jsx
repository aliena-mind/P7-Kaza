import { Link } from 'react-router-dom' // importation de la fonction "Link"
import housingList from "../../datas/housingList" // importation des datas "housingList"
import '../../styles/components/Cards/index.css'

function Cards() {

	return (
        <div className="card-container">
            {housingList.map((house) => (
                <Link to={`/house/${house.id}`} className="card" key={house.id}>
                    <ul>
                        <li className="card-cover-container">
                            <img className='card-cover' src={house.cover} alt={`${house.title} cover`} />
                            {/* house.description */} 
                        </li>
                        <li className="card-title">{house.title}</li>
                    </ul>
                </Link>
            ))}
        </div>
    )
}

export default Cards
