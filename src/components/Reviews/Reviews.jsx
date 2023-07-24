// import Swiper JS
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Pagination } from "swiper/modules";
import ReviewCard from "./ReviewCard";
import Container from "../Shared/Container/Container";

const Reviews = () => {
  return (
    <Container>
      <div className="text-center my-10">
        <p className="uppercase text-primary font-medium underline underline-offset-4 decoration-4 mb-2">
          testimonials
        </p>
        <h2 className="capitalize font-Poppins text-4xl font-bold">
          Let's hear from students
        </h2>
      </div>
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
