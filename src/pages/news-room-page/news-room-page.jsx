import React from 'react'
import { useParams } from 'react-router-dom';
import Header from '../../layouts/header/header';
import Footer from '../../layouts/footer/footer';
import Title from '../../components/title/title';
import NewsCardRoom from '../../components/news-card-room/news-card-room';


export default function NewsRoomPage() {
  let { id } = useParams();
  return (
    <>
      <Header hr={true} />

      <main>
        <Title mt={60} mb={60}>Новый формат сеансов {id}</Title>

        <NewsCardRoom date={'13.02.2022'} title={`Новый формат сеансов ${id}`} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget massa vitae tempus at pretium lacus viverra. Vitae libero vivamus quis enim quam vitae dictumst nulla duis. Sed nisl nibh et morbi tristique suspendisse morbi. Consequat facilisi tortor consectetur magnis odio. Risus, aenean tortor cras consectetur lacus, ut erat ac et. Fermentum aliquam ac egestas eget risus a. Maecenas sed pellentesque bibendum vitae at praesent sed. Amet pretium arcu gravida arcu ut dui sem quis id. Tristique in leo donec proin odio eget. Neque ut in egestas lacus sit nunc, nec. Proin mattis augue sit leo sagittis nam id accumsan. Pulvinar nunc fermentum vulputate ultrices pulvinar sed ultrices quis.\n\nTempor facilisis tellus ac, odio. A amet congue tristique nibh malesuada lectus. Purus quam dapibus rhoncus iaculis amet tristique. Mattis fusce lorem fames mauris orci rhoncus, amet fringilla. Quis integer vitae at vitae urna etiam sed eu sit.\n\nVitae turpis ullamcorper habitant fermentum aliquet volutpat.'} />

        <Footer pb={30} hr={true} corporation={'© 2018-2022 RitmStyle'} name={'Сделал Dmitriy Babiy'} />

      </main>
    </>
  )
}
