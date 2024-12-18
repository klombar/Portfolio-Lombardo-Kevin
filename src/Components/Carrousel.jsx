import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, EffectCreative } from 'swiper/modules';
import Button from './Button';
import ridingCities from '../Assets/Images/Image vitrine projet carrousel/riding cities.png'
import booki from '../Assets/Images/Image vitrine projet carrousel/Booki.png'
import ohmyfood from '../Assets/Images/Image vitrine projet carrousel/Ohmyfood.png'
import printIt from '../Assets/Images/Image vitrine projet carrousel/print it.png'
import sophieBluel from '../Assets/Images/Image vitrine projet carrousel/Sophie Bluel.png'
import kasa from '../Assets/Images/Image vitrine projet carrousel/Kasa.png'
import ninaCarducci from '../Assets/Images/Image vitrine projet carrousel/Nina Carducci Photographie.png'
import events724 from '../Assets/Images/Image vitrine projet carrousel/724events.png'
import argentbank from '../Assets/Images/Image vitrine projet carrousel/Argentbank.png'
import qwenta from '../Assets/Images/Image vitrine projet carrousel/qwenta.png'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-creative';

const Carrousel = () => {
   return (
      <>
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
          modules={[EffectCreative, Pagination]}
          pagination={{ clickable: true,
            type: 'bullets',
           }}
          className="mySwiper3"
        >
          <SwiperSlide>
            <img src={ridingCities} alt="riding cities" />
            <Button link='https://github.com/klombar/Projet-Riding-Cities' classname='carrousel_link_button'>
               Lien Github
            </Button>
          </SwiperSlide>
          <SwiperSlide>
            <img src={booki} alt="booki" />
            <Button link='https://github.com/klombar/Projet-Booki' classname='carrousel_link_button'>
               Lien Github
            </Button>
          </SwiperSlide>
          <SwiperSlide>
            <img src={ohmyfood} alt="ohmyfood" />
            <Button link='https://github.com/klombar/Projet-OhMyFood-Openclassrooms' classname='carrousel_link_button'>
               Lien Github
            </Button>
          </SwiperSlide>
          <SwiperSlide>
            <img src={printIt} alt="printIt" />
            <Button link='https://github.com/klombar/Projet-Print_it-OpenClassRooms' classname='carrousel_link_button'>
               Lien Github
            </Button>
          </SwiperSlide>
          <SwiperSlide>
            <img src={sophieBluel} alt="sophieBluel" />
            <Button link='https://github.com/klombar/Projet-ArchiWebos-Sophie-Bluel' classname='carrousel_link_button'>
               Lien Github
            </Button>
          </SwiperSlide>
          <SwiperSlide>
            <img src={kasa} alt="kasa" />
            <Button link='https://github.com/klombar/Projet-Kasa' classname='carrousel_link_button'>
               Lien Github
            </Button>
          </SwiperSlide>
          <SwiperSlide>
            <img src={ninaCarducci} alt="ninaCarducci" />
            <Button link='https://github.com/klombar/Projet-Nina-Carducci' classname='carrousel_link_button'>
               Lien Github
            </Button>
          </SwiperSlide>
          <SwiperSlide>
            <img src={events724} alt="724events" />
            <Button link='https://github.com/klombar/Projet-724events' classname='carrousel_link_button'>
               Lien Github
            </Button>
          </SwiperSlide>
          <SwiperSlide>
            <img src={argentbank} alt="argentBank" />
            <Button link='https://github.com/klombar/Projet-Argentbank' classname='carrousel_link_button'>
               Lien Github
            </Button>
          </SwiperSlide>
          <SwiperSlide>
            <img src={qwenta} alt="argentBank" />
            <Button link='https://github.com/klombar/Projet-Qwenta-MenuMaker' classname='carrousel_link_button'>
               Lien Github
            </Button>
          </SwiperSlide>
        </Swiper>
        
      </>
    );
  }
  

export default Carrousel;