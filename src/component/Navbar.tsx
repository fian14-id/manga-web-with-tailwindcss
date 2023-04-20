import React from "react";
import { Link } from "react-router-dom";
import { Setting } from "../config/Setting";
import { searchManga } from "../config/FetchApi";
interface SearchData {
  thumb: string;
  title: string;
  type: string;
  endpoint: string;
  updated_on: string;
}

const Navbar : React.FC = () => {

  const [result, setResult] = React.useState<SearchData[]>([])

  const Search = async(q: string) => {
    if (q.length > 3) {
      const query = await searchManga(q);
      setResult(query);
    } else if (q.length < 2) {
      setResult([])
    }
  }

  React.useEffect(() => {
    searchManga
  },[])

  return (
    <header className="navbar bg-base-100 xl:w-11/12 m-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {Setting.list_nav.map((data, i) => {
              return (
                <li key={i}>
                  <Link to={data.path}>{data.name}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <span className="btn btn-ghost normal-case text-xl font-bold">
          <Link to="/">{Setting.title}</Link>
        </span>
      </div>
      <nav className="navbar-end">
        <label htmlFor="search" className="btn btn-ghost btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </label>
        <input type="checkbox" id="search" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box relative">
            <label
              htmlFor="search"
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
            <h3 className="text-lg font-bold">Search</h3>
            <div className="flex justify-center mt-4">
              <input
                type="text"
                placeholder="min input 3 letter..."
                onChange={(e) => Search(e.target.value)}
                className="outline-none w-full shadow-sm focus:shadow-md ease-in-out duration-300 px-4 py-2 rounded-md bg-none dark:bg-none"
              />
            </div>
            {result ? (
              result.map((data, i) => {
                const shortenedTitle =
                  data.title.length > 30
                    ? `${data.title.slice(0, 30)}...`
                    : data.title;
                return (
                  <main key={i} className="flex gap-4 w-full h-16 my-4">
                    <img src={data.thumb} alt="result photo" loading="lazy" />
                    <div className="flex ml-2 flex-col">
                      <Link to={`/detail/${data.endpoint}`}>
                        <h2 className="font-bold text-sm">{shortenedTitle}</h2>
                      </Link>
                      <p className="text-xs italic">{data.type}</p>
                      <p className="text-[.6rem]">{data.updated_on}</p>
                    </div>
                  </main>
                );
              })
            ) : (
              <main className="flex gap-4 w-full h-16 my-4">
                <div className="w-full"></div>
                <div className="flex ml-2 flex-col">
                  <span className="bg-gray-200 dark:bg-gray-400 w-full"></span>
                  <span className="w-5"></span>
                  <span className="w-7"></span>
                </div>
              </main>
            )}
          </div>
        </div>
        <a
          href="https://github.com/fian14-id"
          className="btn btn-ghost btn-circle"
          rel="noopener"
          target="_blank"
        >
          <span className="uil uil-github text-2xl"></span>
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
