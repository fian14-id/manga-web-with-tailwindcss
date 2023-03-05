import React, { useEffect, useState, useMemo } from "react";
import Loading from "../component/Load/LoadingBox";
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
  const handlingApiError = (error: any) => {
    console.log("Error:", error);
  };

  const [popular, setPopular] = useState<PopularData[]>([]);

  useEffect(() => {
    popularManga().then((res) => {
      setPopular(res);
    });
  }, []);

  const listPopularManga = useMemo(() => {
    return popular.map((data, i) => {
      return (
        <div
          key={i}
          className="flex flex-col md:flex-row bg-base-100 rounded-lg shadow-xl mt-4 p-6 mb-4"
        >
          <figure className="w-full md:w-2/5 mb-6 md:mb-0 md:pr-4">
            <LazyImage
              src={data.thumb}
              alt={data.title}
              className="w-full h-full object-cover"
            />
          </figure>
          <div className="w-full md:w-2/3">
            <Link to={`/detail/${data.endpoint}`}>
              <h2 className="text-2xl font-semibold hover:underline underline-offset-1 mb-2">
                {data.title}
              </h2>
            </Link>
            <p>{data.upload_on}</p>
          </div>
        </div>
      );
    });
  }, [popular]);

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
            {listPopularManga}
          </div>
        )}
      </ErrorGet>
    </main>
  );
};

export default Popular;

// LazyImage component
const LazyImage = (props: any) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  return (
    <React.Suspense fallback={<Loading />}>
      <img
        {...props}
        onLoad={handleLoad}
        style={{ opacity: isLoaded ? 1 : 0 }}
      />
    </React.Suspense>
  );
};
