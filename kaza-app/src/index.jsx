import React from 'react' // importation du module React
import ReactDOM from 'react-dom' // importation du module ReactDOM

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom' // importation du router et de(s) route(s)

// importation des differents éléments du site :
import Header from './components/Header'
import Home from './pages/Home' 

// affichage des éléments :
ReactDOM.render( 
  <React.StrictMode>
    <Router>
      <Header /> 
      <Routes>
        <Route exact path="/" element={<Home/>} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
