import React, { useEffect, useState } from "react";
import Loading from "../component/LoadingBox";
import { popularManga } from "../config/FetchApi";
import { Link } from "react-router-dom";
import ErrorGet from "./handlingError/ErrorGet";

interface PopularData {
  title: string;
  upload_on: string;
  thumb: string;
  endpoint: string;
}

const Popular: React.FC = () => {

  const handlingApiError = (error : any) => {
    console.log('Error:', error);
    
  }

  const [popular, setPopular] = useState<PopularData[]>([]);

  useEffect(() => {
    popularManga().then((res) => {
      setPopular(res);
    });
  }, []);

  const listPopularManga = (): JSX.Element[] => {
    return popular.map((data, i) => {
      return (
        <div key={i} className="card w-full bg-base-100 shadow-xl mt-4">
          <div className="card-body">
            <Link to={`/${data.endpoint}`}>
              <h2 className="font-bold text-md hover:underline underline-offset-1">
                {data.title}
              </h2>
            </Link>
            <p className="text-sm">{data.upload_on}</p>
          </div>
          <figure>
            <img alt="thumb" src={data.thumb} className="w-full h-32 sm:h-36" />
          </figure>
        </div>
      );
    });
  };

  return (
    <main className="w-11/12 m-auto mt-8 py-8">
      <ErrorGet
        apiUrl="https://manga.fian014.site/api"
        onError={handlingApiError}
      >
        <h2 className="font-bold text-xl text-[#8F7FFF] underline underline-offset-2">
          Popular Manga
        </h2>
        {popular.length === 0 ? (
          <Loading />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {listPopularManga()}
          </div>
        )}
      </ErrorGet>
    </main>
  );
};

export default Popular;
