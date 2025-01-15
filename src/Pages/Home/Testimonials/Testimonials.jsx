import React, { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import axios from "axios";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";

function Testimonials() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/reviews")
      .then((res) => setReviews(res.data));
  }, []);

  return (
    <div className="my-16">
      <section>
        <SectionTitle
          subTitle={"What Our Client Says"}
          title={"Testimonials"}
        />
      </section>

      {/* testimonials section  */}

      <section>
        <div>
          <Swiper
            pagination={true}
            navigation={true}
            modules={[Navigation]}
            autoplay={true}
          >
            {reviews.map((review, idx) => (
              <SwiperSlide key={idx}>
                <div className="flex flex-col justify-center text-center mx-auto max-w-[800px]">
                  <Rating
                    className="mx-auto my-5"
                    style={{ maxWidth: 150 }}
                    value={review.rating}
                  />
                  <p className="font-semibold">{review.details}</p>
                  <h3 className="font-semibold text-2xl mt-2">{review.name}</h3>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </div>
  );
}

export default Testimonials;
