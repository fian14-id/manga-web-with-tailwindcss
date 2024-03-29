import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// jika ingin mengubah ke develop gunakan yang dikomentari
// import "./css/main.css"
import "./css/minify.css";
import "./css/Global.css";

import Navbar from "./component/Navbar";
import DarkMode from "./component/DarkMode";
import Loading from "./component/Load/Loading";
import NotFound from "./page/NotFound";

// function lazy() digunakan untuk mempercepat website agar lebih nyaman dan nyaman kuota karena hanya yang ditampilkan saja yang didownload file jsx
const Home = lazy(() => import("./page/Home"));
const Beranda = lazy(() => import("./page/Beranda"));
const Popular = lazy(() => import("./page/Popular"));
const Recommend = lazy(() => import("./page/Recommend"));
const Detail = lazy(() => import("./page/Detail"));
const Chapter = lazy(() => import("./page/Chapter"));

function App() {
  return (
    <Router>
      <Navbar />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Beranda />} /> {/* perbedaan dengan beranda dan home adalah beranda untuk halaman utama sedangkan home itu ngawwur aja. tidak usah dipedulikan atau kamu bisa mengeditnya */}
          <Route path="contact" element={<Home />} />
          <Route path="popular" element={<Popular />} />
          <Route path="recommended" element={<Recommend />} />
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
