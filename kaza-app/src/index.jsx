import React from 'react' // importation du module React
import ReactDOM from 'react-dom/client' // importation du module ReactDOM

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom' // importation du router et de(s) route(s)

import './styles/reset/reset.css' // importation du reset CSS

// importation des différents éléments du site :
import Header from './layout/Header'
import Home from './pages/Home' 
import About from './pages/About'
import Error from './components/Error'

// affichage des éléments :
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Header /> 
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="*" element={<Error/>} />
      </Routes>
    </Router>
  </React.StrictMode>
);
