import proptypes from 'prop-types';

function Overlay({ children }) {
  return <div className="overlay">{children}</div>;
};

export default Overlay;

Overlay.propTypes = {
  children: proptypes.node.isRequired,
};