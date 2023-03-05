import React, { useEffect, useState, memo } from "react";
import Loading from "../component/Load/LoadingBox";
import { RecommendManga } from "../config/FetchApi";
import { Link } from "react-router-dom";

interface PopularData {
  title: string;
  thumb: string;
  endpoint: string;
}

const Recommend: React.FC = () => {
  const [popular, setPopular] = useState<PopularData[]>([]);

  useEffect(() => {
    RecommendManga().then((res) => {
      setPopular(res);
    });
  }, []);

  const ListRecommendManga = memo(() => {
    return (
      <>
        {popular.map((data, i) => {
          return (
            <div
              key={i}
              className="flex flex-col md:flex-row bg-base-100 rounded-lg shadow-xl mt-4 p-6 mb-4"
            >
              <figure className="w-full md:w-2/5 mb-6 md:mb-0 md:pr-4">
                <img
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
              </div>
            </div>
          );
        })}
      </>
    );
  });



  return (
    <main className="w-11/12 m-auto mt-8 py-8">
      <h2 className="font-bold text-xl text-[#8F7FFF] underline underline-offset-2">
        Recommendation Manga
      </h2>
      {popular.length === 0 ? (
        <Loading />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          <ListRecommendManga />
        </div>
      )}
    </main>
  );
};

export default Recommend;
