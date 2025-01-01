import { useLocation, Link } from 'react-router-dom'; // Importation de useLocation et Link
import { scrollToSection } from '../Utils/NavScrolltoSection'; // Ton utilitaire pour le scroll

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
            {/* Menu classique */}
            <div className="liste_accueil_competences">
              <li onClick={() => scrollToSection('projets')}>Projets</li>
              <li onClick={() => scrollToSection('competences')}>Compétences techniques</li>
            </div>
            <div className="liste_projets_contact">
              <li onClick={() => scrollToSection('contact')}>Contact</li>
              <li onClick={() => scrollToSection('footer')}>Socials</li>
            </div>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Nav;
