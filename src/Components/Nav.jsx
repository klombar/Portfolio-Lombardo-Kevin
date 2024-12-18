import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav className="nav">
      <ul className="liste">
        <li><a href="#accueil">Qui suis-je</a></li>
        <li><a href="#competences">Compétences techniques</a></li>
        <li><a href="#projets">Projets</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Nav;