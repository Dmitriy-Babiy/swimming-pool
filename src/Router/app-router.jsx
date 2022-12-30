import MainPage from '../pages/main-page/main-page'
import NewsPage from '../pages/news-page/news-page'
import ErrorPage from '../pages/error-page/error-page'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { appRoutes } from './app-routes-const'
import NewsRoomPage from '../pages/news-room-page/news-room-page'


export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path={appRoutes.MAIN} element={<MainPage />} />
        <Route path={appRoutes.NEWS} element={<NewsPage />} />
        <Route path={`${appRoutes.NEWS}/:id`} element={<NewsRoomPage/>}/>
        <Route path={appRoutes.ERROR} element={<ErrorPage />} />
      </Routes>
    </Router>
  )
}
