import { Link } from "react-router-dom"
import {AppRoutes} from '../../Router/const'

export default function Header() {
  return (
    <header className="header">
      <div className="container-main">
        <div className="header__wrapper">
          <div className="header-left">
            <Link to={AppRoutes.MAIN}>
              <img src="img/logo.svg" alt="" />
            </Link>
          </div>
            <ul className="nav">
              <li className="nav__item">
                <Link className="nav__link" to={AppRoutes.MAIN}>
                  Главная
                </Link>
              </li>
              <li className="nav__item">
                <Link className="nav__link" href="">
                  Сеансы
                </Link>
              </li>
              <li className="nav__item">
                <Link className="nav__link" href="">
                  Отзывы
                </Link>
              </li>
              <li className="nav__item">
                <Link className="nav__link" href="">
                  Контакты
                </Link>
              </li>
              <li className="nav__item">
                <Link className="nav__link" href="">
                  Новости
                </Link>
              </li>
              <li className="nav__item">
                <Link className="nav__link" href="">
                  Обо мне
                </Link>
              </li>
              <li className="nav__item">
                <Link className="nav__link" href="">
                  Блог
                </Link>
              </li>
            </ul>
          <div className="header-right">
            <button className="header-right__button">Записаться на сеанс</button>
          </div>
        </div>
      </div>
    </header>
  )
}
