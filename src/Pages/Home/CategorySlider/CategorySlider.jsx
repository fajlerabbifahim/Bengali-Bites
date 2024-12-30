import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

function CategorySlider() {
  return (
    <div className="w-11/12 mx-auto my-20">
      <SectionTitle
        subTitle={"From 11:00am to 10:00pm"}
        title={"ORDER ONLINE"}
      />
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={true}
        breakpoints={{
          320: { slidesPerView: 2, spaceBetween: 20 },
          480: { slidesPerView: 3, spaceBetween: 10 },
          640: { slidesPerView: 4, spaceBetween: 10 },
        }}
      >
        <SwiperSlide>
          <img src={slide1} alt="" />
          <p className="text-white text-center text-4xl font-semibold -mt-16 uppercase">
            Salad
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="" />
          <p className="text-white text-center text-4xl font-semibold -mt-16 uppercase">
            pizza
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="" />
          <p className="text-white text-center text-4xl font-semibold -mt-16 uppercase">
            Pinky
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} alt="" />
          <p className="text-white text-center text-4xl font-semibold -mt-16 uppercase">
            cake
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide5} alt="" />
          <p className="text-white text-center text-4xl font-semibold -mt-16 uppercase">
            Salad
          </p>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default CategorySlider;
