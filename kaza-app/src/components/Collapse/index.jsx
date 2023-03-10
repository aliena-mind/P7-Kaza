import { useState } from 'react';   // importation de 'useState'

import '../../styles/components/Collapse/index.css' // importation du fichier CSS

const collapseOpen = require('../../assets/collapse/collapse-open.png');
const collapseClose = require('../../assets/collapse/collapse-close.png');

function Collapse(props) {

    // définit l'état 'showContent' initialisé à 'true' (contenu visible)
    const [showContent, setShowContent] = useState(true); 

    return (
        <div className="collapse-container">
            <button onClick={() => setShowContent(!showContent)}>  {/* inverse la valeur de 'showContent' lors du click */}

                {props.text} {/* 'text' transmis via les "props" */}

                {showContent ? ( 
                    // si 'showContent' est 'true', l'image est 'collapseOpen'
                    <img className='collapse-image' src={collapseOpen} alt="collapseOpen" /> 
                ) : (
                    // si 'showContent' est 'false', l'image est 'collapseClose'
                    <img className='collapse-image' src={collapseClose} alt="collapseClose" /> 
                )}
            </button>
            {showContent && ( // affiche le contenu de 'collapse-content' que si 'showContent' est 'true'
                <div className='collapse-content'>
                    {Array.isArray(props.content) ? ( // si props.content est un 'Array' :
                        <ul>
                            {props.content.map((item, index) => ( // pour chaque item de 'props.content' :
                                <li key={index}>{item}</li> // ajout d'un 'li' par item
                            ))}
                        </ul>
                    ) : ( // sinon :
                        props.content
                    )}
                </div>
            )}
        </div>
    )
}
 
export default Collapse