import { Outlet, useLocation } from 'react-router-dom'
import Nav from './Nav'
import Footer from './Footer'

const THEME_BY_PATH = {
  '/develop': 'page--develop',
  '/security': 'page--security',
}

export default function Layout() {
  const { pathname } = useLocation()
  const themeClass = THEME_BY_PATH[pathname] ?? ''

  return (
    <div className={`page ${themeClass}`}>
      <div className="scanlines" />
      <Nav />
      <main className="container section">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
