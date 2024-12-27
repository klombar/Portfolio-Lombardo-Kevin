import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCreative, Navigation, Autoplay } from 'swiper/modules';
import {v4 as uuidv4} from 'uuid';
import Button from './Button';
import Overlay from './Overlay';
import 'swiper/css';
import 'swiper/css/effect-creative';
import 'swiper/css/navigation';

const Carrousel = () => {
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    fetch('/carrouselData.json')
      .then(response => response.json())
      .then(data => setSlides(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <Swiper
      grabCursor={true}
      effect={'creative'}
      creativeEffect={{
        prev: {
          shadow: true,
          translate: ['-20%', 0, -1],
        },
        next: {
          translate: ['100%', 0, 0],
        },
      }}
      loop={true}
      modules={[EffectCreative, Navigation, Autoplay]}
      autoplay={{
        delay: 6000,
        disableOnInteraction: true,
        pauseOnMouseEnter: true,
      }}
      speed={1200}
      navigation={{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }}
      slidesPerView={1} // Ajustez ce paramètre
      slidesPerGroup={1} // Ajustez ce paramètre
      className="mySwiper3"
    >
      {slides.map((slide) => (
        <SwiperSlide key={uuidv4()}>
          <div className='image-overlay'>
            <img src={slide.image} alt={slide.alt} />
            <Overlay>
              <h3>{slide.title}</h3>
              <p>{slide.description}</p>
            </Overlay>
          </div>
          <Button link={slide.link} classname='carrousel_link_button'>
            Lien Github
          </Button>
        </SwiperSlide>
      ))}
      <div className="swiper-button-prev"></div>
      <div className="swiper-button-next"></div>
    </Swiper>
  );
};

export default Carrousel;