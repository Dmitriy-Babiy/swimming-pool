import React from 'react'

export default function NewsCardRoom({ date, title, text }) {
  return (
    <div className='news-card-room'>
      <div className='container-main'>
        <div className="news-card-room-wrapper">
          <div className="news-card-room-description">
            <div className='news-card-room__data'>
              {date}
            </div>
            <h3 className="news-card-room__title">{title}</h3>
            <p className="news-card-room__text">{text}</p>
          </div>
          <div className="news-card-room__img">
            <img src="/img/news-card-room.png" alt="" />
          </div>
        </div>
      </div>
    </div>

  )
}
