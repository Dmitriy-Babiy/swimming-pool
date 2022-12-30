import Header from '../../layouts/header/header'
import Footer from '../../layouts/footer/footer'
import News from '../../layouts/news/news'

export default function NewsPage() {
  return (
    <>
      <Header hr={true}/>

      <main>

        <News title={'Новости'}/>

        <Footer pb={30} hr={true} corporation={'© 2018-2022 RitmStyle'} name={'Сделал Dmitriy Babiy'} />

      </main>
    </>
  )
}

