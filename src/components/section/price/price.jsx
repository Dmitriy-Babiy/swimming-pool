export default function Price({title}) {
  return (
    <section className="price">
      <div className="container-sub">
        <h2 className="title">{title}</h2>
        <div className="price-wrapper">
          <div className="grid">
            <div className="grid__body">
              <div className="grid__item-name">RitmStyle с погружением</div>
              <div className="grid__item-price">1000р.</div>
              <div className="grid__item-name">Абонемент на RitmStyle</div>
              <div className="grid__item-price">5500р.</div>
              <div className="grid__item-name">RitmStyle для пар</div>
              <div className="grid__item-price">6000р.</div>
              <div className="grid__item-name">RitmStyle для беременных</div>
              <div className="grid__item-price">13500р.</div>
              <div className="grid__item-name">RitmStyle + фотосессия</div>
              <div className="grid__item-price">11500р.</div>
            </div>
          </div>
          <div className="certificate">
            <img className="certificate__img" src="img/certificate.png" alt="" />
            <p className="certificate__text">Подарочный сертификат </p>
          </div>
        </div>
      </div>
    </section>
  )
}
