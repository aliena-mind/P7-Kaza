import { Link } from 'react-router-dom' // importation de 'Link'

import '../../styles/components/Error/index.css' // importation du fichier CSS

function Error() {
    return (
        <div>
            <h1 className='h1-error'>404</h1>
            <div className='div-error' >
                <p className='p-error'>Oups ! La page que</p>
                <p className='p-error'>vous demandez n'existe pas</p>
            </div>
            <Link className='home-link' to="/">Retourner sur la page d'accueil</Link>
        </div>
    )
}
 
export default Error