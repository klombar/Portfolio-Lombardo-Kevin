import { Link } from 'react-router-dom';
import proptypes from 'prop-types';

function Logo({className, src, alt}) {
  return (
      <Link to="/">
        <img src={src} alt={alt} className={className}/>
      </Link>
  );
}

export default Logo;

Logo.propTypes = {
  className: proptypes.string.isRequired,
  src: proptypes.string.isRequired,
  alt: proptypes.string.isRequired
}