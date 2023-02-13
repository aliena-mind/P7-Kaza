import { useState } from 'react'; // importation de 'useState'

import '../../styles/components/Slideshow/index.css' // importation du fichier CSS

// importation des images requises :
const slideshowPrevious = require('../../assets/slideshow/slideshow-previous.png');
const slideshowNext = require('../../assets/slideshow/slideshow-next.png');

function Slideshow(props) {

    // définit l'état 'currentIndex' initialisé à '0' (index = 0)
    const [currentIndex, setCurrentIndex] = useState(0);

    // fonction fléchée appelée lorsque l'utilisateur clique sur le bouton 'Suivant'
    const nextSlide = () => {
        // si 'currentIndex + 1' >= 'props.pictures.length', 'currentIndex = 0', sinon 'currentIndex = currentIndex + 1'
        setCurrentIndex(currentIndex + 1 >= props.pictures.length ? 0 : currentIndex + 1); 
    };

    // fonction fléchée appelée lorsque l'utilisateur clique sur le bouton 'Précédent'
    const previousSlide = () => {
        // si 'currentIndex - 1 < 0', 'currentIndex = props.pictures.length - 1', sinon 'currentIndex = currentIndex - 1'
        setCurrentIndex(currentIndex - 1 < 0 ? props.pictures.length - 1 : currentIndex - 1);
    };

    return (
        <div className="slideshow">
            <div>
                <ul>
                    {/* pour chaque image de 'props.pictures' : */}
                    {props.pictures.map((picture, index) => ( 
                        // Si l'index est égal à la valeur de 'currentIndex', l'image correspondante sera affiché
                        <li className='pictures-container' key={picture} style={{ display: index === currentIndex ? 'block' : 'none' }}> 
                            <img className='slide-picture' src={picture} alt="Housing" />
                        </li>
                    ))}
                </ul>
            </div>
            <div className='button-container'>
                {/* Si props.pictures.length > 1, alors les boutons seront affichés */}
                {props.pictures.length > 1 && (
                    <> {/* raccourci création d'un élément React vide, 'Fragment', les boutons seront ajouté à l'élément parent */}
                    <div className='slideshow-buttons'>
                        <button className="slide-button" onClick={previousSlide}> 
                            <img className='slide-button-img' src={slideshowPrevious} alt="Précédent" />
                        </button>
                        <button className="slide-button" onClick={nextSlide}>
                            <img className='slide-button-img' src={slideshowNext} alt="Suivant" />
                        </button>
                        <div className="slideshow-number">
                            {currentIndex + 1}/{props.pictures.length}
                        </div>
                    </div>
                    </>
                )}
            </div>
        </div>
    )
}

export default Slideshow