import Header from '../../layouts/header/header'
import FirstScreen from '../../layouts/first-screen/first-screen'
import Services from '../../layouts/services/services'
import Reviews from '../../layouts/reviews/reviews'
import About from '../../layouts/about/about'
import Price from '../../layouts/price/price'
import Contacts from '../../layouts/contacts/contacts'
import Footer from '../../layouts/footer/footer'
import ScrollToTop from 'react-scroll-to-top'
import { dataAboutRecord } from "../../mocks/mocks"

export default function MainPage() {
  return (
    <>
      <Header />

      <main className="main">

        <FirstScreen title={'Акватерапия\nRitmStyle'} subTitle={'Укрепление здоровья'} />

        <Services title={'Сеансы RitmStyle'} />

        <Reviews title={'Отзывы'} />

        <About title={'Об RitmStyle'} dataAboutRecord={dataAboutRecord} />

        <Price title={'Стоимость сеансов'} />

        <Contacts />

        <Footer pt={30} pb={30} corporation={'© 2018-2022 RitmStyle'} name={'Сделал Dmitriy Babiy'} />

        <ScrollToTop 
        smooth
        height="28"
        width="28"
        top = {100}
        color = "white"
        viewBox="0 0 16 16"
        style={{backgroundColor: '#018ABE', boxShadow: 'none', right: 'calc(50% - (40px / 2))', transition: '1s'}}
        svgPath='M4.045 7.765a.75.75 0 11-1.09-1.03l4.25-4.5a.75.75 0 011.09 0l4.25 4.5a.75.75 0 01-1.09 1.03L8.5 4.636v8.614a.75.75 0 01-1.5 0V4.636L4.045 7.765z'
        />
        
      </main>
      
    </>

  )
}
