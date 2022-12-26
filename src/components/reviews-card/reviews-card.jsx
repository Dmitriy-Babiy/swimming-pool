import React from 'react'

export default function ReviewsCard({ title, text }) {
  return (
    <div className='card'>
      <div className='card-wrapper'>
        <div className='card__title'>
          <p>{title}</p>
        </div>
        <div className='card__description'>
          <p>{text}</p>
        </div>
      </div>
    </div>
  )
}


