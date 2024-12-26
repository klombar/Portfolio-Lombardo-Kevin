import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Layout/Header/Header.jsx';
import Footer from './Components/Layout/Footer/Footer.jsx';
import HomePage from './Pages/HomePage.jsx';
import '../src/Style/main.scss';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/Portfolio-Lombardo-Kevin/" element={<HomePage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

/*

Il n'y avait pas grand interet a utiliser react-routeur-dom ici, néanmoins c'est une compétence que j'ai acquise
lors de ma formation, je vous la présente donc ici.
je sais aussi utiliser les routes sécurisées, les paramètres de route, les routes imbriquées, les redirections, les liens actifs, etc.

*/