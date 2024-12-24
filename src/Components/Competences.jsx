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
                    <Logo className='competences_logo_container_css' src={css}/>
                    <Logo className='competences_logo_container_sass' src={sass}/>
                    <Logo className='competences_logo_container_javascript' src={javascript}/>
                    <Logo className='competences_logo_container_react' src={react}/>
                    <Logo className='competences_logo_container_redux' src={redux}/>
                    <Logo className='competences_logo_container_html' src={html}/>
                  </div>
                </div>

                <div className='competences_logo_container_outils'>
                  <h3 className='competences_logo_container_outils_title'>Outils :</h3>
                  <div className='competences_logo_container_outils_logo'>
                    <Logo className='competences_logo_container_git' src={git}/>
                    <Logo className='competences_logo_container_github' src={github}/>
                    <Logo className='competences_logo_container_api' src={api}/>
                    <Logo className='competences_logo_container_notion' src={notion}/>
                    <Logo className='competences_logo_container_feedly' src={feedly}/>
                    <Logo className='competences_logo_container_jest' src={jest}/>
                  </div>
                </div>

              </div>

                <div className='competences_logo_container_connaissances'>
                  <h3 className='competences_logo_container_connaissances_title'>Connaissances :</h3>
                  <div className='competences_logo_container_connaissances_container'>
                    <div className='competences_logo_container_connaissances_container_connaissance'>
                      <Logo className='competences_logo_container_jest' src={tick}/> 
                      Clean code
                    </div>
                    <div className='competences_logo_container_connaissances_container_connaissance'>
                      <Logo className='competences_logo_container_jest' src={tick}/> 
                      Optimisation des performances
                    </div>
                    <div className='competences_logo_container_connaissances_container_connaissance'>
                      <Logo className='competences_logo_container_jest' src={tick}/> 
                      Bonne pratique SEO
                    </div>
                    <div className='competences_logo_container_connaissances_container_connaissance'>
                      <Logo className='competences_logo_container_jest' src={tick}/> 
                      Tests unitaires
                    </div>
                    <div className='competences_logo_container_connaissances_container_connaissance'>
                      <Logo className='competences_logo_container_jest' src={tick}/> 
                      Methode Agile
                    </div>
                    <div className='competences_logo_container_connaissances_container_connaissance'>
                      <Logo className='competences_logo_container_jest' src={tick}/> 
                      UI / UX
                    </div>
                    <div className='competences_logo_container_connaissances_container_connaissance'>
                      <Logo className='competences_logo_container_jest' src={tick}/> 
                      Responsive web design
                    </div>
                  </div>
                </div> 

          </div> 
      </section>
   )
}

export default Competence;


            


            
            

            


            