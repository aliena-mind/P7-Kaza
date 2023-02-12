import'../../styles/components/Ratings/index.css' // importation du fichier CSS

// importation des images requises :
const redStar = require('../../assets/stars/red-star.png'); 
const greyStar = require('../../assets/stars/grey-star.png');

const Stars = (props) => { // fonction avec argument 'props'

    let stars = [];

    // boucle 5 fois (5 étoiles) :
    for (let i = 0; i < 5; i++) { 

        if (i < props.rating) { // si 'i' inférieur à 'props.rating' :

            // ajoute une image 'redStar' au tableau 'stars'
            stars.push(<img className='star' src={redStar} alt='red star' key={i} />); 

        } else { // sinon :

            // ajoute une image 'greyStar' au tableau 'stars'
            stars.push(<img className='star' src={greyStar} alt='grey star' key={i} />); 
        }
    }

    return (
        <div className='stars'>
            {stars} 
        </div>
    );
};

export default Stars;