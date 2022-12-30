import { Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import ReviewsCard from '../reviews-card/reviews-card';
import { reviewsData } from '../../mocks/mocks';
import 'swiper/css';
import 'swiper/css/pagination';

export default function ReviewsSlider() {
  return (
    <div className="swiper-container">
      <Swiper
        modules={[Pagination, A11y]}
        pagination={{ type: 'bullets', clickable: true}}
        slidesPerView={3}
        spaceBetween={110}
        speed={150}
        loop={true}
        centeredSlides={true}
        slideToClickedSlide={true}
      >
        {reviewsData.map((card) => (
          <SwiperSlide key={card.id}>
            <ReviewsCard title={card.title} text={card.text} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
