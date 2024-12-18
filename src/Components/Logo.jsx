import proptypes from 'prop-types';

function Logo({className, src}) {
  return (
    <div className="logo-container">
      <img src={src} alt="logo react" className={className} />
    </div>
  );
}

export default Logo;

Logo.propTypes = {
  className: proptypes.string.isRequired,
  src: proptypes.string.isRequired,
}