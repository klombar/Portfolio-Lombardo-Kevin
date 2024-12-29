import proptypes from 'prop-types';

function Logo({className, src, alt}) {
  return (
    <>
      <img src={src} alt={alt} className={className} />
    </>
  );
}

export default Logo;

Logo.propTypes = {
  className: proptypes.string.isRequired,
  src: proptypes.string.isRequired,
  alt: proptypes.string.isRequired
}