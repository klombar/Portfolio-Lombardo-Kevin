import PropTypes from 'prop-types';

function Button({ children, onClick, link, classname }) {

  if (onClick) {
    return (
      <button onClick={onClick} className={classname}>
        {children}
      </button>
    );
  }

  return (
    <a href={link} target="_blank" className={classname} rel="noopener noreferrer">
      {children}
    </a>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired, 
  onClick: PropTypes.func,  
  link: PropTypes.string,  
  classname: PropTypes.string.isRequired,
};

export default Button;