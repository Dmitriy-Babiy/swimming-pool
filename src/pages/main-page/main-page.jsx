import Header from "../../components/header/header"

export default function MainPage() {
  return (
    <>
      <Header />

      <main className="page__main">
        <section className="main-description">
          <div className="container">
            <div className="main-description__wrapper">
              <img className="main-description__img" src="img/main-title-img.png" alt="" />
              <p className="main-description__sub-title">Укрепление здоровья</p>
              <h1 className="main-description__title">Акватерапия {"\n"} RitmStyle</h1>
            </div>
          </div>
        </section>
      </main>
    </>

  )
}
