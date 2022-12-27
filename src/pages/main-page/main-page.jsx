import Header from "../../components/header/header"
import FirstScreen from "../../components/section/first-screen/first-screen"
import Reviews from "../../components/section/reviews/reviews"
import About from "../../components/section/about/about"
import Price from "../../components/section/price/price"
import Contacts from "../../components/section/contacts/contacts"
import Footer from "../../components/footer/footer"

import { dataAboutRecord } from "../../mocks/mocks"
import Services from "../../components/section/services/services"


export default function MainPage() {
  return (
    <>
      <Header />

      <main className="main-page">

        <FirstScreen title={'Акватерапия\nRitmStyle'} subTitle={'Укрепление здоровья'} />

        <Services title={'Сеансы RitmStyle'} />

        <Reviews title={'Отзывы'} />

        <About title={'Об RitmStyle'} dataAboutRecord={dataAboutRecord} />

        <Price title={'Стоимость сеансов'} />

        <Contacts />

        <Footer title={'© 2018-2022 RitmStyle'} name={'Сделал Dmitriy Babiy'} />

      </main>
      
    </>

  )
}
