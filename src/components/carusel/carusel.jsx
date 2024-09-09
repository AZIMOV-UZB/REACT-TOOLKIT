import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
const Carusel = () => {
  return (
    <Swiper
      pagination={{
        dynamicBullets: true,
      }}
      modules={[Pagination]}
      className="mySwiper"
    >
      <SwiperSlide>
        <img
          className="w-full h-[400px] object-contain"
          src="https://storage.kun.uz/source/uploads/2018fevral/images002/0202/qotil10.jpg "
          alt="foto"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="w-full h-[400px] object-contain"
          src="https://storage.kun.uz/source/uploads/2018fevral/images002/0202/qotil6.jpg"
          alt="foto"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="w-full h-[400px] object-contain"
          src="https://storage.kun.uz/source/uploads/2018fevral/images002/0202/qotil3.jpg"
          alt="foto"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="w-full h-[400px] object-contain"
          src="https://storage.kun.uz/source/uploads/2018fevral/images002/0202/qotil8.jpg"
          alt="foto"
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default Carusel;
