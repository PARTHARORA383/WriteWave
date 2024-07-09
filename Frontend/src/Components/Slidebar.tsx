
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Import required modules
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

export const SlideBar = () => {
  const categories = [
    "Blockchain",
    "Artificial Intelligence",
    "Javascript",
    "Self Improvement",
    "Python",
    "React",
    "Studies",
    "Finance",
    "Newspaper"
  ];

  return (
    <div>
      <Swiper
       cssMode
        keyboard controller={{}}
        slidesPerGroup={1} // Move 1 slide at a time
        navigation ={{enabled : true}}
        pagination={{ clickable: true}}
        modules={[Navigation, Pagination, Autoplay]}
      >
        {categories.map((category, index) => (
          <SwiperSlide key={index}>
            <Link
              to="#"
              className="text-supabaseGray-300 hover:text-supabaseGray-100 px-3 py-1 border-b border-transparent hover:border-white transition whitespace-nowrap"
            >
              {category}
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
