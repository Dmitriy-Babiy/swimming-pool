import React from 'react'

export default function FirstScreen({title, subTitle}) {
  return (
    <section className="first-screen">
      <div className="container-main">
        <div className="first-screen-wrapper">
          <img className="first-screen__img" src="img/main-title-img.png" alt="" />
          <p className="first-screen__sub-title">{subTitle}</p>
          <h1 className="first-screen__title">{title}</h1>
        </div>
      </div>
    </section>
  )
}
