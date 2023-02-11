import redStar from '../../assets/stars/red-star.png';
import greyStar from '../../assets/stars/grey-star.png';
import'../../styles/components/Ratings/index.css';

const Stars = (props) => {

  let stars = [];

    for (let i = 0; i < 5; i++) { // boucle 5 fois :
        if (i < props.rating) { // si i inférieur à 'props.rating' :
            stars.push(<img src={redStar} alt='red star' key={i} />); // ajoute une image 'redStar' au tableau 'stars'
        } else { // sinon :
            stars.push(<img src={greyStar} alt='grey star' key={i} />); // ajoute une image 'greyStar' au tableau 'stars'
        }
    }

    return (
        <div className='stars'>
            {stars}
        </div>
    );
};

export default Stars;