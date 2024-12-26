import PropTypes from 'prop-types';

function Button({ children, onClick, link, classname, type }) {

  if (link) {
    return (
      <a href={link} target="_blank" className={classname} rel="noopener noreferrer">
        {children}
      </a>
    );
  }


  return (
    <button type={type} onClick={onClick} className={classname}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  link: PropTypes.string, 
  classname: PropTypes.string.isRequired,
  type: PropTypes.string, 
};

export default Button;
