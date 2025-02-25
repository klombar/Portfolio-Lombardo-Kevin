import { useState, useEffect, useCallback } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import Overlay from '../Overlay/Overlay.jsx';
import StarFilled from '../NotationStars/StarFilled.jsx';
import StarEmpty from '../NotationStars/StarEmpty.jsx';

const Carrousel = () => {
  const [slides, setSlides] = useState([]); 
  const [currentIndex, setCurrentIndex] = useState(0); 

  useEffect(() => {
    fetch('/carrouselData.json')
      .then(response => response.json())
      .then(data => setSlides(data.reverse()))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  }, [slides.length]);

  return (
    <div className="carrousel-container">
      <button className="carrousel-button-prev" onClick={prevSlide}>
        &#10094;
      </button>

      <div className="slide-container">
        {slides.map((slide, index) => (
          <div
            key={slide.id} 
            className={`slide ${index === currentIndex ? 'active' : ''}`}
          >
            <div className="carrousel-image-overlay">
              <img src={slide.image} alt={slide.alt} loading="lazy" />
              <Overlay>
                <div className="overlay_title_difficultyNotation_container">
                  <h3>{slide.title}</h3>
                  <div className="difficultyNotation">
                    Difficulté :
                    {Array.from({ length: 5 }, (_, i) =>
                      i < parseInt(slide.difficultyRating.split('/')[0], 10)
                        ? <StarFilled key={uuidv4()} />
                        : <StarEmpty key={uuidv4()} />
                    )}
                  </div>
                </div>
                <p>{slide.description}</p>
              </Overlay>
            </div>
            <div className="carrousel_button_container">
              <Link to={`/project/${slide.id}`} className="carrousel_link_projetDescription">
                Voir les détails
              </Link>
              <Button link={slide.link} classname="carrousel_link_button">
                Lien Github
              </Button>
            </div>
          </div>
        ))}
      </div>

      <button className="carrousel-button-next" onClick={nextSlide}>
        &#10095;
      </button>
    </div>
  );
};

export default Carrousel;
