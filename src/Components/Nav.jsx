import { scrollToSection } from '../Components/Utils/NavScrolltoSection.jsx';

function Nav() {
  return (
    <nav className="nav">
      <ul className="liste">
        <div className='liste_accueil_competences'>
          <li onClick={() => scrollToSection('projets')}> Projets</li>
          <li onClick={() => scrollToSection('competences')}> Compétences techniques</li>
        </div>
        <div className='liste_projets_contact'>
          <li onClick={() => scrollToSection('contact')}> Contact</li>
          <li onClick={() => scrollToSection('footer')}> Socials</li>
        </div>
      </ul>
    </nav>
  );
}

export default Nav;