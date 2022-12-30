import ReviewsSlider from '../../components/swiper-slider/reviews-slider'
import Title from '../../components/title/title'

export default function Reviews({ title }) {
  return (
    <section id='reviews' className="reviews">
      <Title mb={100}>{title}</Title>
      <ReviewsSlider />
    </section>
  )
}
