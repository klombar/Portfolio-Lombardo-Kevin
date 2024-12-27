function Nav() {
  return (
    <nav className="nav">
      <ul className="liste">

        <li className="liste_accueil_competences">
          <a href="#accueil">Qui suis-je</a>
        </li>
        <li className="liste_accueil_competences">
          <a href="#competences">Compétences techniques</a>
        </li>

        <li className="liste_projets_contact">
          <a href="#projets">Projets</a>
        </li>
        <li className="liste_projets_contact">
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
