import { useState, useEffect } from 'react';
import Logo from './Logo';

const Competence = () => {
  const [logosData, setLogosData] = useState(null);

  useEffect(() => {
    fetch('/Portfolio-Lombardo-Kevin/competencesData.json')
      .then((response) => response.json())
      .then((data) => setLogosData(data))
      .catch((error) => console.error('Erreur lors du chargement des logos:', error));
  }, []);

  if (!logosData) {
    return <p>Chargement des logos...</p>;
  }

  return (
    <section className="competences" id="competences">
      <div className="competences_title_container">
        <h2 className="competences_title_container_developpeur">Compétences techniques</h2>
      </div>

      <div className="competences_logo_container">
        <div className="competences_logo_container_competences_outils">
          <div className="competences_logo_container_competences">
            <h3 className="competences_logo_container_competences_title">Compétences :</h3>
            <div className="competences_logo_container_competences_logo">
              {logosData.competences.map((logo, index) => (
                <Logo key={index} className={logo.className} src={logo.src} alt={logo.alt} />
              ))}
            </div>
          </div>

          <div className="competences_logo_container_outils">
            <h3 className="competences_logo_container_outils_title">Outils :</h3>
            <div className="competences_logo_container_outils_logo">
              {logosData.outils.map((logo, index) => (
                <Logo key={index} className={logo.className} src={logo.src} alt={logo.alt} />
              ))}
            </div>
          </div>
        </div>

        <div className="competences_logo_container_connaissances">
          <h3 className="competences_logo_container_connaissances_title">Connaissances :</h3>
          <div className="competences_logo_container_connaissances_container">
            {logosData.connaissances.map((connaissance, index) => (
              <div key={index} className="competences_logo_container_connaissances_container_connaissance">
                <Logo className={connaissance.className} src={connaissance.src} alt={connaissance.alt} />
                {connaissance.text}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Competence;
