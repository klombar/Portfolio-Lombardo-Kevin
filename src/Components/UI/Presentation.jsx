import Card from './Card';
import photoKevin from '../../assets/Images/Photos/photo portfolio kevin.webp';

function Presentation () {
  return (
   <> 
   <div className='presentation_title'>
     <h1 className='presentation_title_portfolio'>
       <span className='por'>Développeur </span>
       <span className='tfo'>Front-end </span>
       <span className='lio'>Junior</span>
     </h1>
   </div>
   <div className='presentation_container_card'>
     <Card image={photoKevin} name='Lombardo Kevin' age='38' location='Arpajon' className='presentation_container_card_img'/>
     <p className='presentation_container_description'>
     Je suis en reconversion professionnelle pour devenir développeur web front-end. Récemment diplômé de la formation OpenClassrooms, je suis désormais prêt à mettre en pratique les compétences acquises. Motivé et déterminé, je suis à la recherche d&apos;une entreprise qui me donnera l&apos;opportunité de m&apos;investir pleinement.<br />Ouvert à un emploi ou à une alternance, je suis prêt à relever de nouveaux challenges et à contribuer activement au succès de l&apos;équipe.
     </p>
   </div>
 </>
  );
}

export default Presentation;