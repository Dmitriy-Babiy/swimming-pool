export default function ContactsCard({ title, street, metro, description }) {
  return (
    <>
      <div className='conctact-card-wrapper'>
        <div className='conctact-card__title'>{title}</div>
        <ul className='conctact-card__list'>
          <li className='conctact-card__item'>{street}</li>
          <li className='conctact-card__item'>{metro}</li>
          <li className='conctact-card__item'>{description}</li>
        </ul>
        <button className='conctact-card__button'>Записаться на сеанс</button>
      </div>
    </>
  )
}
