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
          <h2 className='projets_title'>Projets</h2>
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