import { useLocation, Link } from 'react-router-dom'; 
import { scrollToSection } from '../../Utils/NavScrolltoSection.jsx'; 

function Nav() {

  const location = useLocation();

  const isProjectPage = location.pathname.startsWith('/project/');

  return (
    <nav className="nav">
      <ul className="liste">
        {isProjectPage ? (
          <div className="nav-return">
            <Link to="/" className="return-home">Retour à l&apos;accueil</Link>
          </div>
          
        ) : (

          <>
            <div className="liste_accueil_competences">
              <li onClick={() => scrollToSection('presentation')}>Présentation</li>
              <li onClick={() => scrollToSection('competences')}>Compétences techniques</li>
            </div>
            <div className="liste_projets_contact">
              <li onClick={() => scrollToSection('projets')}>Projets</li>
              <li onClick={() => scrollToSection('contact')}>Contact</li>
            </div>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Nav;
