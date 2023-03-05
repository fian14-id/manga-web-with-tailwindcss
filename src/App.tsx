import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './css/minify.css'
import './css/Global.css'

import Home from "./page/Home"
import Beranda from './page/Beranda'
import Navbar from './component/Navbar'
import Popular from './page/Popular'
import DarkMode from './component/DarkMode'
import Recommend from './page/Recommend'
import Genres from './page/Genres'
import NotFound from './page/NotFound'
import Detail from './page/Detail'
import Chapter from './page/Chapter'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="home"
          element={
            <main className="relative">
              <Navbar />
              <Beranda />
              <DarkMode />
            </main>
          }
        />
        <Route
          path="popular"
          element={
            <main className="relative">
              <Navbar />
              <Popular />
              <DarkMode />
            </main>
          }
        />
        <Route
          path="recommended"
          element={
            <main className="relative">
              <Navbar />
              <Recommend />
              <DarkMode />
            </main>
          }
        />
        <Route
          path="genres"
          element={
            <main className="relative">
              <Navbar />
              <Genres />
              <DarkMode />
            </main>
          }
        />
        <Route
          path="/detail/:endpoint"
          element={
            <main className="relative">
              <Navbar />
              <Detail />
              <DarkMode />
            </main>
          }
        />
        <Route
          path="/chapter/:endpoint"
          element={
            <main className="relative">
              <Navbar />
              <Chapter />
              <DarkMode />
            </main>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App
