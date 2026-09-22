import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Develop from './pages/Develop'
import Security from './pages/Security'
import About from './pages/About'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/develop" element={<Develop />} />
        <Route path="/security" element={<Security />} />
        <Route path="/about" element={<About />} />
      </Route>
    </Routes>
  )
}
