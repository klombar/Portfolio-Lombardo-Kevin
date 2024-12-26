import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCreative, Navigation } from 'swiper/modules';
import Button from './Button';
import ridingCities from '../Assets/Images/Image vitrine projet carrousel/riding cities.webp'
import booki from '../Assets/Images/Image vitrine projet carrousel/booki (1).webp'
import ohmyfood from '../Assets/Images/Image vitrine projet carrousel/Ohmyfood.webp'
import printIt from '../Assets/Images/Image vitrine projet carrousel/print it.webp'
import sophieBluel from '../Assets/Images/Image vitrine projet carrousel/Sophie Bluel.webp'
import kasa from '../Assets/Images/Image vitrine projet carrousel/Kasa.webp'
import ninaCarducci from '../Assets/Images/Image vitrine projet carrousel/Nina Carducci Photographie.webp'
import events724 from '../Assets/Images/Image vitrine projet carrousel/724events.webp'
import argentbank from '../Assets/Images/Image vitrine projet carrousel/Argentbank.webp'
import qwenta from '../Assets/Images/Image vitrine projet carrousel/qwenta.webp'
import 'swiper/css';
import 'swiper/css/effect-creative';
import 'swiper/css/navigation';
import Overlay from './Overlay';

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
          modules={[EffectCreative, Navigation]}
          navigation={{
            nextEl: '.swiper-button-next', // Sélecteur pour la flèche "suivante"
            prevEl: '.swiper-button-prev', // Sélecteur pour la flèche "précédente"
          }}
          className="mySwiper3"
        >
          <SwiperSlide>
            <div className='image-overlay'>
            <img src={ridingCities} alt="riding cities" />
            <Overlay>
              <h3>Riding Cities :</h3>
              <p>Vous êtes stagiaire développeur junior chez Webonzaï. Votre mission est de mettre à jour la page de Riding Cities, une association de skate, en ajoutant une section sur les membres fondateurs et en modifiant la section des plannings de cours pour inclure deux boutons (enfants/adultes). Le code HTML est à adapter, et le CSS est déjà prêt.</p>
            </Overlay>
            </div>
            <Button link='https://github.com/klombar/Projet-Riding-Cities' classname='carrousel_link_button'>
               Lien Github
            </Button>
          </SwiperSlide>

          <SwiperSlide>
          <div className='image-overlay'>
            <img src={booki} alt="riding cities" />
            <Overlay>
              <h3>Booki :</h3>
              <p>Vous commencez votre alternance chez Booki en tant que développeur web. Votre mission est d’intégrer l’interface du site avec HTML et CSS, en vous basant sur la maquette fournie par Loïc, l’UI designer, et les instructions de Sarah, la CTO. Vous devez compléter la base de code et respecter les spécifications techniques pour créer le site.</p>
            </Overlay>
            </div>
            <Button link='https://github.com/klombar/Projet-Booki' classname='carrousel_link_button'>
               Lien Github
            </Button>
          </SwiperSlide>

          <SwiperSlide>
          <div className='image-overlay'>
            <img src={ohmyfood} alt="riding cities" />
            <Overlay>
              <h3>Oh my food :</h3>
              <p>Vous rejoignez Ohmyfood en tant que développeur junior pour développer un site &quot;mobile first&quot; répertoriant les menus de restaurants gastronomiques. Les clients pourront composer leur repas à l’avance pour éviter les temps d&apos;attente. Vous devez intégrer les maquettes mobile et desktop fournies par l&apos;UX designer et respecter les spécifications du brief créatif. Le site doit être responsive, et vous utiliserez SASS pour organiser le CSS et intégrer des animations.</p>
            </Overlay>
            </div>
            <Button link='https://github.com/klombar/Projet-OhMyFood-Openclassrooms' classname='carrousel_link_button'>
               Lien Github
            </Button>
          </SwiperSlide>

          <SwiperSlide>
          <div className='image-overlay'>
            <img src={printIt} alt="riding cities" />
            <Overlay>
              <h3>Print it :</h3>
              <p>En tant que développeur front-end freelance, vous êtes chargé de dynamiser le site d&apos;une imprimerie familiale, Print it. Votre première mission consiste à créer un carrousel pour le site, en suivant les instructions détaillées fournies par Lucien, le directeur.</p>
            </Overlay>
            </div>
            <Button link='https://github.com/klombar/Projet-Print_it-OpenClassRooms' classname='carrousel_link_button'>
               Lien Github
            </Button>
          </SwiperSlide>

          <SwiperSlide>
          <div className='image-overlay'>
            <img src={sophieBluel} alt="riding cities" />
            <Overlay>
              <h3>Sophie Bluel :</h3>
              <p>En tant que développeur front-end pour l’agence ArchiWebos, vous rejoignez une équipe en renfort pour concevoir le site portfolio d&apos;une architecte d’intérieur. Votre mission consiste à développer la page de présentation des travaux, la page de connexion administrateur et une modale pour uploader des médias. Vous travaillez avec le design Figma, le code back-end et le code front-end existants, tout en suivant les tâches définies dans le Kanban.</p>
            </Overlay>
            </div>
            <Button link='https://github.com/klombar/Projet-ArchiWebos-Sophie-Bluel' classname='carrousel_link_button'>
               Lien Github
            </Button>
          </SwiperSlide>

          <SwiperSlide>
          <div className='image-overlay'>
            <img src={kasa} alt="riding cities" />
            <Overlay>
              <h3>Kasa :</h3>
              <p>En tant que développeur front-end freelance pour Kasa, vous devez refondre le site en React, en intégrant des composants et des routes React Router. Vous suivez les maquettes Figma responsives et implémentez des fonctionnalités comme une galerie d&apos;images interactive et des menus déroulants animés. Le back-end n&apos;est pas encore disponible, donc vous travaillez avec un fichier JSON contenant les 20 dernières annonces.</p>
            </Overlay>
            </div>
            <Button link='https://github.com/klombar/Projet-Kasa' classname='carrousel_link_button'>
               Lien Github
            </Button>
          </SwiperSlide>

          <SwiperSlide>
          <div className='image-overlay'>
            <img src={ninaCarducci} alt="riding cities" />
            <Overlay>
              <h3>Nina Carducci :</h3>
              <p>En tant que développeur freelance, vous proposez vos services d&apos;optimisation SEO à Nina Carducci, une photographe, pour améliorer la vitesse et la visibilité de son site. Vous lui proposez de corriger les problèmes d&apos;images lourdes et d&apos;optimiser le code du site. En retour, vous livrerez un rapport détaillant les améliorations et les résultats obtenus grâce à des audits de performance et d&apos;accessibilité.</p>
            </Overlay>
            </div>
            <Button link='https://github.com/klombar/Projet-Nina-Carducci' classname='carrousel_link_button'>
               Lien Github
            </Button>
          </SwiperSlide>

          <SwiperSlide>
          <div className='image-overlay'>
            <img src={events724} alt="riding cities" />
            <Overlay>
              <h3>724 Events :</h3>
              <p>Vous êtes développeur front-end freelance et l&apos;agence événementielle 724events vous contacte pour finaliser son site vitrine one-page. Le site est fonctionnel mais présente quelques bugs qui doivent être corrigés. Jean-Baptiste, le directeur Marketing, vous envoie le code du site ainsi qu&apos;un cahier de recette à compléter pour s&apos;assurer que tous les problèmes sont résolus. Vous devez rapidement déboguer et tester le site afin de le rendre pleinement opérationnel.</p>
            </Overlay>
            </div>
            <Button link='https://github.com/klombar/Projet-724events' classname='carrousel_link_button'>
               Lien Github
            </Button>
          </SwiperSlide>

          <SwiperSlide>
          <div className='image-overlay'>
            <img src={argentbank} alt="riding cities" />
            <Overlay>
              <h3>ArgentBank :</h3>
              <p>Vous avez rejoint Argent Bank en tant que développeur front-end pour la création d&apos;un tableau de bord utilisateurs. Vous travaillez avec Mila sur l&apos;authentification des utilisateurs : création d&apos;une application React responsive pour la gestion des connexions, la consultation des profils et l&apos;utilisation de Redux pour l&apos;état. Vous suivez les bonnes pratiques de Green Code en optimisant les images et en créant des composants réutilisables.</p>
            </Overlay>
            </div>
            <Button link='https://github.com/klombar/Projet-Argentbank' classname='carrousel_link_button'>
               Lien Github
            </Button>
          </SwiperSlide>

          <SwiperSlide>
          <div className='image-overlay'>
            <img src={qwenta} alt="riding cities" />
            <Overlay>
              <h3>Qwenta :</h3>
              <p>Vous êtes développeur front-end chez Webgencia et devez préparer le projet &quot;Menu Maker&quot; pour Qwenta. En l&apos;absence du Product Owner, Soufiane, vous rédigez un document de spécifications techniques et créez un tableau Kanban pour suivre les tâches. Vous organisez également une veille sur des technologies clés. Enfin, vous préparez une présentation pour Soufiane avant sa réunion avec le client.</p>
            </Overlay>
            </div>
            <Button link='https://github.com/klombar/Projet-Qwenta-MenuMaker' classname='carrousel_link_button'>
               Lien Github
            </Button>
          </SwiperSlide>
          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
        </Swiper>
      </>
    );
  }

export default Carrousel;
