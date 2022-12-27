import React from 'react'

export default function Services({title}) {
  return (
    <section className="services">
      <div className="container-main">
        <div className="title">{title}</div>
        <div className="services-wrapper">
          <div className="services-grid">
            <div className="services-grid__body">
              <div className="services-grid__item services-grid__item-big">Стандартный RitmStyle</div>
              <div className="services-grid__item">RitmStyle для пар</div>
              <div className="services-grid__item">RitmStyle для беременных</div>
              <div className="services-grid__item">RitmStyle с полным {'\n'} погружением под воду</div>
              <div className="services-grid__item">RitmStyle + красочная {'\n'}подводная фотосессия</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
