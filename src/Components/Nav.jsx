import { Link } from 'react-router-dom';

function Nav() {
   return (
     <nav className="nav">
       <ul className="liste">
         <li><a href="#accueil">Home</a></li>
         <li><a href="#competences">Compétences techniques</a></li>
         <li><a href="#projets">Projets</a></li>
         <li>Contact</li>
       </ul>
     </nav>
   );
 }

 export default Nav;