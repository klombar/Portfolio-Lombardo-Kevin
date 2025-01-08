import { useRef, useLayoutEffect } from 'react';
import Main from '../Components/Layout/Main/Main.jsx';
import Carrousel from '../Components/UI/Carrousel.jsx';
import Form from '../Components/UI/Form.jsx';
import Presentation from '../Components/UI/Presentation.jsx';
import Competences from '../Components/UI/Competences.jsx';

function HomePage() {

  const competencesRef = useRef(null);
  const projetsRef = useRef(null);
  const contactRef = useRef(null);


  useLayoutEffect(() => {
    const observerOptions = { threshold: 0.1 }; 


    const createObserver = (ref) => {
      const element = ref.current;

      if (!element) return; 

      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add('visible');
          observer.unobserve(element); 
        }
      }, observerOptions);

      observer.observe(element); 
    };


    createObserver(competencesRef);
    createObserver(projetsRef);
    createObserver(contactRef);
  }, []); 

  return (
    <>
      <Main>
        <section className='presentation' id='presentation'>
          <Presentation />
        </section>

        <section
          ref={competencesRef}
          className={`competences hidden`} 
          id='competences'
        >
          <Competences />
        </section>

        <section
          ref={projetsRef}
          className={`projets hidden`} 
          id='projets'
        >
          <h2 className='projets_title'>Voici mes projets récents !</h2>
          <p className='projets_description'>
          Le carrousel ci-dessous présente une sélection de mes réalisations. Chaque projet est accompagné d&apos;une description et d&apos;une évaluation de la difficulté. 
          <br />
          <strong>Cliquez sur le bouton &quot;Voir les détails&quot; pour en savoir plus sur chaque projet.</strong>
          <br />
          Si vous êtes intéressé par un projet, vous pouvez aussi accéder directement à son <strong>lien GitHub</strong> pour explorer le code source.
          </p>
          <Carrousel />
        </section>

        <section
          ref={contactRef}
          className={`contact hidden`} // Commence par hidden
          id='contact'
        >
          <h2 className='contact_title'>Contact</h2>
          <div className='contact_formContainer'>
            <p className='contact_formTitle'>
              Si vous souhaitez échanger sur un projet ou collaborer, contactez-moi via ce formulaire !
            </p>
            <Form />
          </div>
        </section>
      </Main>
    </>
  );
}

export default HomePage;
