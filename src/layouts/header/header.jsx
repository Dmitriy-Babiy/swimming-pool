import { Link } from "react-router-dom"
import { appRoutes } from '../../router/app-routes-const'
import { Link as LinkScroll } from "react-scroll"

export default function Header({ hr = false }) {
  return (
    <header className="header">
      <div className="container-main">
        <div className="header__wrapper">

          <div className="header-left">
            <Link to={appRoutes.MAIN}>
              <img src="/img/logo.svg" alt="" />
            </Link>
          </div>

          <ul className="nav">
            <li className="nav__item">
              <Link className="nav__link" to={appRoutes.MAIN}>
                Главная
              </Link>
            </li>
            <li className="nav__item">
              <LinkScroll className="nav__link" to='services' smooth={true} duration={500}>
                Сеансы
              </LinkScroll>
            </li>
            <li className="nav__item">
              <LinkScroll className="nav__link" to='reviews' smooth={true} duration={500}>
                Отзывы
              </LinkScroll>
            </li>
            <li className="nav__item">
              <LinkScroll className="nav__link" to='about' smooth={true} duration={500}>
                О нас
              </LinkScroll>
            </li>
            <li className="nav__item">
              <LinkScroll className="nav__link" to='prices' smooth={true} duration={500}>
                Цены
              </LinkScroll>
            </li>
            <li className="nav__item">
              <LinkScroll className="nav__link" to='contacts' smooth={true} duration={500}>
                Контакты
              </LinkScroll>
            </li>
            <li className="nav__item">
              <Link className="nav__link" to={appRoutes.NEWS}>
                Новости
              </Link>
            </li>
          </ul>

          <div className="header-right">
            <button className="header-right__button">Записаться на сеанс</button>
          </div>

        </div>

        {hr
          ?
          <div style={{ marginTop: 30 }}>
            {hr ? <hr style={{ backgroundColor: '#FFFFFF', height: 1, border: 'none', opacity: '50%' }} /> : ''}
          </div>
          :
          ''
        }
      </div>
    </header>
  )
}
