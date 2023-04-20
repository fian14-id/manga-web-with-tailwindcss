import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./css/minify.css";
import "./css/Global.css";

import Navbar from "./component/Navbar";
import DarkMode from "./component/DarkMode";
import Loading from "./component/Load/Loading";
import NotFound from "./page/NotFound";

const Home = lazy(() => import("./page/Home"));
const Beranda = lazy(() => import("./page/Beranda"));
const Popular = lazy(() => import("./page/Popular"));
const Recommend = lazy(() => import("./page/Recommend"));
const Genres = lazy(() => import("./page/Genres"));
const Detail = lazy(() => import("./page/Detail"));
const Chapter = lazy(() => import("./page/Chapter"));

function App() {
  return (
    <Router>
      <Navbar />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Beranda />} />
          <Route path="contact" element={<Home />} />
          <Route path="popular" element={<Popular />} />
          <Route path="recommended" element={<Recommend />} />
          <Route path="genres" element={<Genres />} />
          <Route path="/detail/:endpoint" element={<Detail />} />
          <Route path="/chapter/:endpoint" element={<Chapter />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <DarkMode />
    </Router>
  );
}

export default App;
