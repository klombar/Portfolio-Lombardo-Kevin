import Main from '../Components/Layout/Main.jsx';
import Card from '../Components/Card.jsx';
import Logo from '../Components/Logo.jsx';
import Carrousel from '../Components/Carrousel.jsx';
import Form from '../Components/Form.jsx';
import Silverline from '../Components/Silverline.jsx';
import photoKevin from '../Assets/Images/Photos/photo kevin transparente.png';
import html from '../Assets/Images/Logo/logo HTML.png';
import css from '../Assets/Images/Logo/logo CSS.png';
import git from '../Assets/Images/Logo/logo Git.png';
import github from '../Assets/Images/Logo/logo GitHub.png';
import sass from '../Assets/Images/Logo/logo SASS.png';
import javascript from '../Assets/Images/Logo/logo javascript.png';
import react from '../Assets/Images/Logo/logo REACT.png';
import redux from '../Assets/Images/Logo/logo REDUX.png';
import api from '../Assets/Images/Logo/logo API.png';
import notion from '../Assets/Images/Logo/logo notion.png';
import feedly from '../Assets/Images/Logo/logo feedly.png';

function HomePage() {
  return (
    <>
      <Main>
        
        <section className='presentation'> 
          <div className='presentation_title'>
            <h1 className='presentation_title_portfolio'>
              <span className='por'>Developper </span>
              <span className='tfo'>Front-end </span>
              <span className='lio'>Junior</span>
            </h1>
          </div>
          <div className='presentation_container_card'>
            <Card image={photoKevin} name='Lombardo Kevin' age='38' location='Arpajon' className='presentation_container_card_img'/>
            <p className='presentation_container_description'>
            Je suis en reconversion professionnelle pour devenir développeur web. Récemment diplômé de la formation OpenClassrooms, je suis désormais prêt à mettre en pratique les compétences acquises. Motivé et déterminé, je suis à la recherche d&apos;une entreprise qui me donnera l&apos;opportunité de m&apos;investir pleinement.<br />Ouvert à un emploi ou à une alternance, je suis prêt à relever de nouveaux challenges et à contribuer activement au succès de l&apos;équipe.
            </p>
          </div>
        </section>

        <Silverline />

        <section className='competences' id='competences'>
          <div className='competences_title_container'>
            <h2 className='competences_title_container_developper'>Compétences techniques</h2>
          </div>
          <div className='competences_logo_container'>
              <Logo className='competences_logo_container_html' src={html}/>
              <Logo className='competences_logo_container_git' src={git}/>
              <Logo className='competences_logo_container_sass' src={sass}/>
              <Logo className='competences_logo_container_react' src={react}/>
              <Logo className='competences_logo_container_api' src={api}/>
              <Logo className='competences_logo_container_feedly' src={feedly}/>
            <div className='competences_logo_container_line'></div>
              <Logo className='competences_logo_container_css' src={css}/>
              <Logo className='competences_logo_container_github' src={github}/>
              <Logo className='competences_logo_container_javascript' src={javascript}/>
              <Logo className='competences_logo_container_redux' src={redux}/>
              <Logo className='competences_logo_container_notion' src={notion}/>
          </div>
        </section>

        <Silverline />

        <section className='projets' id='projets'>
          <h2 className='projets_title'>Projets</h2>
            <Carrousel />
        </section>

        <Silverline />

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