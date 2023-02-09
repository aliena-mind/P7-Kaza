import '../../styles/components/Collapse/index.css'
import { useState } from 'react';

const collapseOpen = require('../../assets/collapse/collapse-open.png');
const collapseClose = require('../../assets/collapse/collapse-close.png');

function Collapse(props) {

    // définit l'état 'showContent' initialisé à 'false' (contenu masqué)
    const [showContent, setShowContent] = useState(false); 

    return (
        <div className="collapse-container">
            <button onClick={() => setShowContent(!showContent)}>  {/* inverse la valeur de 'showContent' lors du click */}
                {props.text} {/* 'text' transmis via les "props" */}
                {showContent ? (
                    <img className='collapse-image' src={collapseOpen} alt="collapseOpen" /> // si 'showContent' est 'true', l'image est 'collapseOpen'
                ) : (
                    <img className='collapse-image' src={collapseClose} alt="collapseClose" /> // si 'showContent' est 'false', l'image est 'collapseClose'
                )}
            </button>
            {showContent && ( // affiche le contenu de 'collapse-content' si 'showContent' est 'true'
                <div className='collapse-content'> {/* ajout de la classe 'show-content' si 'showContent' est 'true'  */}
                    {props.content} {/* 'content' transmis via les "props" */}
                </div>
            )}
        </div>
    )
}
 
export default Collapse