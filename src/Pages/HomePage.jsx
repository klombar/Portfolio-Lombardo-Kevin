import Main from '../Components/Layout/Main.jsx';
import Carrousel from '../Components/Carrousel.jsx';
import Form from '../Components/Form.jsx';
import Competences from '../Components/Competences.jsx';
import Presentation from '../Components/Presentation.jsx';

function HomePage() {
  return (
    <>
      <Main>

        <Presentation />

        <Competences />

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