import Main from '../Components/Layout/Main/Main.jsx';
import Carrousel from '../Components/UI/Carrousel.jsx';
import Form from '../Components/UI/Form.jsx';
import Competences from '../Components/UI/Competences.jsx';
import Presentation from '../Components/UI/Presentation.jsx';

function HomePage() {
  return (
    <>
      <Main>

        <section className='presentation'>
          <Presentation />
        </section>

        <section className="competences" id="competences">
          <Competences />
        </section>

        <section className='projets' id='projets'>
          <h2 className='projets_title'>Voici mes projets récents !</h2>
          <p className='projets_description'>
          Le carrousel ci-dessous présente une sélection de mes réalisations. Chaque projet est accompagné d&apos;une description et d&apos;une évaluation de la difficulté. 
          <br />
          <strong>Cliquez sur les images pour en savoir plus</strong> sur chaque projet.
          <br />
          Si vous êtes intéressé par un projet, vous pouvez aussi accéder directement à son <strong>lien GitHub</strong> pour explorer le code source.
        </p>
          <Carrousel />
        </section>

        <section className='contact' id='contact'>
          <h2 className='contact_title'>Contact</h2>
          <div className='contact_formContainer'>
            <Form />
          </div>
        </section>

      </Main>
    </>
  );
}

export default HomePage;