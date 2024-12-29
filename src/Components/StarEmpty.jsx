import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as faStarEmpty } from '@fortawesome/free-solid-svg-icons'; 

function StarEmpty() {
  return <FontAwesomeIcon icon={faStarEmpty} style={{ opacity: 0.3 }} />;  
}

export default StarEmpty;