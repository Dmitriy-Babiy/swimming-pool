import ReviewsSlider from '../../swiper-slider/reviews-slider'

export default function Reviews({ title }) {
  return (
    <section className="reviews">
      <h2 className="title">{title}</h2>
      <ReviewsSlider />
    </section>
  )
}
