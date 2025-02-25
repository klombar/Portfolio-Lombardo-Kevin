import proptypes from 'prop-types';

function Card({ image, name, age, location, className }) {
   return (
     <div className={className}>
      <div>
          <img className="card_image" src={image} alt="Photo portrait de Lombardo Kevin" loading="eager"/>
       </div>
       <div className="card_body">
          <h2 className="card_name">{name}</h2>
          <p className="card_age">{age}</p>
          <p className="card_location">{location}</p>
       </div> 
     </div> 
   );
 }

export default Card;

Card.propTypes = {
image: proptypes.string.isRequired,
name: proptypes.string.isRequired,
age: proptypes.string.isRequired,
location: proptypes.string.isRequired,
className: proptypes.string.isRequired
}