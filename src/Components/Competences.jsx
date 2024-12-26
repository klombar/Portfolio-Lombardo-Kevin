import Logo from './Logo';
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
import jest from '../Assets/Images/Logo/jest.png';
import feedly from '../Assets/Images/Logo/logo feedly.png';
import tick from '../Assets/Images/Logo/tick.png';

function Competence() {
   return(
      <section className='competences' id='competences'>
        <div className='competences_title_container'>
          <h2 className='competences_title_container_developpeur'>Compétences techniques</h2>
        </div>
          <div className='competences_logo_container'>

              <div className='competences_logo_container_competences_outils'>

                <div className='competences_logo_container_competences'>
                  <h3 className='competences_logo_container_competences_title'>
                    Competences :
                  </h3>
                  <div className='competences_logo_container_competences_logo'>
                    <Logo className='competences_logo_container_css' src={css} alt='logo css'/>
                    <Logo className='competences_logo_container_sass' src={sass} alt='logo sass'/>
                    <Logo className='competences_logo_container_javascript' src={javascript} alt='logo javascript'/>
                    <Logo className='competences_logo_container_react' src={react} alt='logo react'/>
                    <Logo className='competences_logo_container_redux' src={redux} alt='logo redux'/>
                    <Logo className='competences_logo_container_html' src={html} alt='logo html'/>
                  </div>
                </div>

                <div className='competences_logo_container_outils'>
                  <h3 className='competences_logo_container_outils_title'>Outils :</h3>
                  <div className='competences_logo_container_outils_logo'>
                    <Logo className='competences_logo_container_git' src={git} alt='logo git'/>
                    <Logo className='competences_logo_container_github' src={github} alt='logo github'/>
                    <Logo className='competences_logo_container_api' src={api} alt='logo api'/>
                    <Logo className='competences_logo_container_notion' src={notion} alt='logo notion'/>
                    <Logo className='competences_logo_container_feedly' src={feedly} alt='logo feedly'/>
                    <Logo className='competences_logo_container_jest' src={jest} alt='logo jest'/>
                  </div>
                </div>

              </div>

                <div className='competences_logo_container_connaissances'>
                  <h3 className='competences_logo_container_connaissances_title'>Connaissances :</h3>
                  <div className='competences_logo_container_connaissances_container'>
                    <div className='competences_logo_container_connaissances_container_connaissance'>
                      <Logo className='competences_logo_container_jest' src={tick} alt='logo représentant une case coché'/> 
                      Clean code
                    </div>
                    <div className='competences_logo_container_connaissances_container_connaissance'>
                      <Logo className='competences_logo_container_jest' src={tick} alt='logo représentant une case coché'/> 
                      Optimisation des performances
                    </div>
                    <div className='competences_logo_container_connaissances_container_connaissance'>
                      <Logo className='competences_logo_container_jest' src={tick} alt='logo représentant une case coché'/> 
                      Bonne pratique SEO
                    </div>
                    <div className='competences_logo_container_connaissances_container_connaissance'>
                      <Logo className='competences_logo_container_jest' src={tick} alt='logo représentant une case coché'/> 
                      Tests unitaires
                    </div>
                    <div className='competences_logo_container_connaissances_container_connaissance'>
                      <Logo className='competences_logo_container_jest' src={tick} alt='logo représentant une case coché'/> 
                      Methode Agile
                    </div>
                    <div className='competences_logo_container_connaissances_container_connaissance'>
                      <Logo className='competences_logo_container_jest' src={tick} alt='logo représentant une case coché'/> 
                      UI / UX
                    </div>
                    <div className='competences_logo_container_connaissances_container_connaissance'>
                      <Logo className='competences_logo_container_jest' src={tick} alt='logo représentant une case coché'/> 
                      Responsive web design
                    </div>
                  </div>
                </div> 

          </div> 
      </section>
   )
}

export default Competence;


            


            
            

            


            