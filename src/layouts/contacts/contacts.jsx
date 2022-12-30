import ContactsCard from "../../components/contacts-card/contacts-card";
import MapYandex from "../../components/map-yandex/map-yandex";

import React from 'react'

export default function Contacts() {
  return (
    <section id="contacts" className="contacts">
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
  )
}
