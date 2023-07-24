// import Swiper JS
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Pagination } from "swiper/modules";
import ReviewCard from "./ReviewCard";
import Container from "../Shared/Container/Container";

const Reviews = () => {
  return (
    <Container>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
      >
        <SwiperSlide className="py-10">
          <ReviewCard />
        </SwiperSlide>
        <SwiperSlide className="py-10">
          <ReviewCard />
        </SwiperSlide>
        <SwiperSlide className="py-10">
          <ReviewCard />
        </SwiperSlide>
        <SwiperSlide className="py-10">
          <ReviewCard />
        </SwiperSlide>
        <SwiperSlide className="py-10">
          <ReviewCard />
        </SwiperSlide>
      </Swiper>
    </Container>
  );
};

export default Reviews;
