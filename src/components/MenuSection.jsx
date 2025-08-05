import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import './Menu.css';

const menuItems = [
  { name: ' Ramen Noodles', image: '/assets/ramen.jpg' },
  { name: ' Dumplings', image: '/assets/dumpling.jpg' },
  { name: ' Sushi Combo', image: '/assets/sushi.jpg' },
  { name: ' Curry Bowl', image: '/assets/curry.jpg' },
  { name: ' Fresh Salads', image: '/assets/salad.jpg' },
];

export default function Menu() {
  return (
    <section className="menu-section">
      <h2 className="menu-title">Our Menu</h2>

      <Swiper
        modules={[Autoplay, Navigation]}
        spaceBetween={40}
        slidesPerView={3}
        loop={true}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        navigation
        className="menu-swiper"
      >
        {menuItems.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="menu-card">
              <img src={item.image} alt={item.name} className="menu-image" />
              <p className="menu-text">{item.name}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
