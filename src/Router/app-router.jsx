import MainPage from '../pages/main-page/main-page'
import ErrorPage from '../pages/error-page/error-page'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AppRoutes } from './const'

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path={AppRoutes.MAIN} element={<MainPage />}/>
        <Route path={AppRoutes.ERROR} element={<ErrorPage />}/>
      </Routes>
    </Router>
  )
}
