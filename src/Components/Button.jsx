import PropTypes from 'prop-types';

function Button({ children, onClick, link, classname, type }) {
  // Si un lien est passé, on retourne une balise <a>
  if (link) {
    return (
      <a href={link} target="_blank" className={classname} rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  // Sinon, on garde le comportement classique du bouton
  return (
    <button type={type} onClick={onClick} className={classname}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  link: PropTypes.string, // Le lien GitHub
  classname: PropTypes.string.isRequired,
  type: PropTypes.string, // Type du bouton, ex. "submit" ou "button"
};

export default Button;
