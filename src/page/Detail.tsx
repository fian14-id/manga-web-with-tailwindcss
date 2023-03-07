import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { DetailManga } from "../config/FetchApi";

import image from "../assets/global-logo.webp";
import Footer from "../component/Footer";

interface Genre {
  genre_id: string;
  genre_name: string;
}

interface Chapter {
  chapter_id: string;
  chapter_title: string;
  chapter_endpoint: string;
}

interface Detail {
  title: string;
  type: string;
  genre_list: Genre[];
  thumb: string;
  status: string;
  author: string;
  synopsis: string;
  chapter: Chapter[];
}

const Detail: React.FC = () => {
  const { endpoint } = useParams<{ endpoint: string }>();
  const [manga, setManga] = useState<Detail>({
    title: "",
    type: "",
    genre_list: [],
    thumb: "",
    status: "",
    author: "",
    synopsis: "",
    chapter: [],
  });

  useEffect(() => {
    DetailManga(`${endpoint}`)
      .then((res) => {
        setManga(res);
      })
      .catch((err) => console.log(err));
  }, [endpoint]);

  const ReadMore = () => {
    return (
      <>
        <label htmlFor="my-modal-4" className="text-primary link">
          Baca Selengkapnya...
        </label>
        <input type="checkbox" id="my-modal-4" className="modal-toggle" />
        <label htmlFor="my-modal-4" className="modal cursor-pointer">
          <label className="modal-box relative" htmlFor="">
            <h1 className="text-lg font-bold">Sinopsis</h1>
            <p className="py-4 text-justify text-sm sm:text-md lg:text-xl mt-2">
              {manga.synopsis}
            </p>
          </label>
        </label>
      </>
    );
  };

  return (
    <main className="flex flex-col">
      <section className="thumbnail">
        {manga.thumb ? (
          <div
            className="h-20 sm:h-28 bg-cover"
            style={{
              backgroundImage: `url("${manga.thumb}")`,
            }}
          ></div>
        ) : (
          <div className="h-20 sm:h-28 bg-gray-200"></div>
        )}
        <div className="flex flex-col items-center h-full relative">
          <img
            src={manga.thumb ? manga.thumb : image}
            alt="detail manga"
            className="w-1/3 sm:w-52 -translate-y-12 sm:-translate-y-16 lg:-translate-y-20 rounded shadow-lg"
            loading="lazy"
          />
          <div className="flex flex-col mt-1 text-center">
            <h1 className="font-bold text-lg sm:text-2xl">
              {manga.title ? manga.title.slice(6, 100) : "Lagi Loading masbro!"}
            </h1>
            <p className="text-xs sm:text-sm lg:text-md">{manga.status}</p>
          </div>
        </div>
      </section>
      <article className="w-11/12 m-auto mt-16">
        <article className="text-center">
          <h2 className="font-semibold text-md sm:text-lg">Sinopsis</h2>
          <p className="text-md sm:text-lg">
            {manga.synopsis.length > 100
              ? `${manga.synopsis.slice(0, 100)} `
              : manga.synopsis}
            {manga.synopsis.length > 100 && <ReadMore />}
          </p>
        </article>
        <div className="overflow-x-auto mt-6">
          <table className="table w-full">
            <tbody>
              <tr>
                <td className="font-semibold">Type</td>
                <td>: {manga.type}</td>
              </tr>
              <tr>
                <td className="font-semibold">Author</td>
                <td>: {manga.author}</td>
              </tr>
              <tr>
                <td className="font-semibold">Genre</td>
                <td className="flex gap-2">
                  {":"}
                  {manga.genre_list.map((genre) => (
                    <p
                      key={genre.genre_id}
                      className="badge badge-primary text-sm sm:text-md text-white"
                    >
                      {genre.genre_name}
                    </p>
                  ))}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <main
          className="mt-8 text-center bg-base-100 rounded-box"
        >
          <h1 className="text-lg sm:text-xl font-medium mb-2">
            <span className="uil uil-list-ui-alt"></span> List Chapter
          </h1>
          <ul className="flex flex-col gap-2 px-4 py-2 rounded-md w-full h-96 overflow-y-auto">
            {manga.chapter.map((chapt) => (
              <Link key={chapt.chapter_id} to={`/chapter/${chapt.chapter_endpoint}`} >
                <li className="h-16 flex items-center rounded shadow-md hover:shadow-xl ease-linear duration-75 text-white bg-primary place-content-center">
                  {chapt.chapter_title}
                </li>
              </Link>
            ))}
          </ul>
        </main>
        <Footer />
      </article>
    </main>
  );
};

export default Detail;
