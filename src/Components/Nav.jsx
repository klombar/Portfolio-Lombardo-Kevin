function Nav() {
  return (
    <nav className="nav">
      <ul className="liste">
        <div className='liste_accueil_competences'>
          <li><a href="#accueil">Qui suis-je</a></li>
          <li><a href="#competences">Compétences techniques</a></li>
        </div>
        <div className='liste_projets_contact'>
          <li><a href="#projets">Projets</a></li>
          <li><a href="#contact">Contact</a></li>
        </div>
      </ul>
    </nav>
  );
}

export default Nav;