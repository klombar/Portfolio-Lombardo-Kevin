import proptypes from 'prop-types';

function Logo({className, src}) {
  return (
    <>
      <img src={src} alt="logo react" className={className} />
    </>
  );
}

export default Logo;

Logo.propTypes = {
  className: proptypes.string.isRequired,
  src: proptypes.string.isRequired,
}