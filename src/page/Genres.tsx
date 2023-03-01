import React, { useEffect, useState } from "react";
import BtnLoad from "../component/BtnLoad";
import { GenreManga } from "../config/FetchApi";
import { Link } from "react-router-dom";

interface PopularData {
  genre_name: string;
  endpoint: string;
}

const Genres: React.FC = () => {
  const [genre, setGenre] = useState<PopularData[]>([]);

  useEffect(() => {
    GenreManga().then((res) => {
      setGenre(res);
    });
  }, []);

  const listPopularManga = (): JSX.Element[] => {
    return genre.map((data, i) => {
      return (
        <div key={i} className="card bg-base-100 shadow-xl mt-4">
          <Link to={data.endpoint}>
            <button className="btn-primary px-4 py-2 rounded-md w-full">
              {data.genre_name}
            </button>
          </Link>
        </div>
      );
    });
  };

  return (
    <main className="w-11/12 m-auto mt-8 py-8">
      <h2 className="font-bold text-xl underline underline-offset-2">
        Genre List
      </h2>
      {genre.length === 0 ? (
        <BtnLoad />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {listPopularManga()}
        </div>
      )}
    </main>
  );
};

export default Genres;
