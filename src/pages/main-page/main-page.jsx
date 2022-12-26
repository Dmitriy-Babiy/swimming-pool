import Header from "../../components/header/header"
import AboutRecord from "../../components/about-record/about-record"
import ContactsCard from "../../contacts-card/contacts-card"
import ReviewsSlider from "../../components/swiper-slider/reviews-slider"

import { dataAboutRecord } from "../../mocks/mocks"
import MapYandex from '../../components/map/map'

export default function MainPage() {
  return (
    <>
      <Header />

      <main className="main-page">

        <section className="first-screen">
          <div className="container-main">
            <div className="first-screen-wrapper">
              <img className="first-screen__img" src="img/main-title-img.png" alt="" />
              <p className="first-screen__sub-title">Укрепление здоровья</p>
              <h1 className="first-screen__title">Акватерапия {"\n"} RitmStyle</h1>
            </div>
          </div>
        </section>

        <section className="reviews">
          <h2 className="title">Отзывы</h2>
          <ReviewsSlider />
        </section>

        <section className="about">
          <div className="container-sub">
            <h2 className="title">Об RitmStyle</h2>
            {dataAboutRecord.map((record) => (
              <AboutRecord key={record.id} title={record.title} text={record.text} statusRevert={record.tatusRevert} />
            ))}
          </div>
        </section>

        <section className="price">
          <div className="container-sub">
            <h2 className="title">Стоимость сеансов</h2>
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

        <section className="contacts">
          <div className="container-main">
            <div className="contacts-wrapper">
              <MapYandex />
              <div className="conctact-cards-wrapper">
                <ContactsCard
                  title='Бассейн WorkClass'
                  street='Невский 140'
                  metro='м. Спасская'
                  description='Запись по договоренности'
                />
                <ContactsCard
                  title='Бассейн "На Гороховой"'
                  street='3-й проезд Иванова'
                  metro='м. Крестовский остров'
                  description='Запись по договоренности'
                />
              </div>
            </div>
          </div>
        </section>

        <footer className="footer">
          <div className="container-main">
            <div className="footer-wrapper">
              <span>© 2018-2022 RitmStyle</span>
              <span>Сделал Dmitriy Babiy</span>
            </div>
          </div>
        </footer>

      </main>
    </>

  )
}
