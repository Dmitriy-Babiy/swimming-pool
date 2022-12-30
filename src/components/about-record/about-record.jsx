import React from 'react'

export default function AboutRecord({title, text, statusRevert}) {
  return (
    <div style={statusRevert ? {flexDirection: 'row', marginTop: '100px'}: {}} className="about-wrapper">
      <div className="about__img">
        <img src="/img/about-ritm-style.png" alt="" />
      </div>
      <div className="about__description">
        <h3 className="about__title">{title}</h3>
        <p className="about__text">{text}</p>
      </div>
    </div>
  )
}
