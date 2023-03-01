import React, {useEffect} from "react";
import { Setting } from "../config/Setting";
import { popularManga } from "../config/FetchApi"
import myLogo from "../assets/global-logo.png"
import Footer from "../component/Footer";
import Loading from "../component/LoadingBox";

const Beranda = () => {

  useEffect(() => {
    popularManga
  },[])
  

  return (
    <main className="w-11/12 m-auto mt-8">
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={myLogo} alt="logo"
            className="max-w-sm rounded-lg shadow-2xl lg:ml-8"
          />
          <div>
            <h1 className="text-5xl font-bold">{Setting.title}</h1>
            <p className="py-6">{Setting.description}</p>
            <label
              htmlFor="search"
              className="bg-[#7f7be2] px-4 py-2 rounded-md text-white font-bold shadow-md hover:bg-indigo-500 ease-out duration-300 active:scale-90 hover:shadow-lg"
            >
              <span className="uil uil-telescope mr-2"></span> Go Explore
            </label>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Beranda;
