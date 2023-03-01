import React from "react";
import { Link } from "react-router-dom";
import { Setting } from "../config/Setting";

const Navbar = () => {
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
        <span
          className="btn btn-ghost normal-case text-xl font-bold"
        >
          <Link to="/home">{Setting.title}</Link>
        </span>
      </div>
      <div className="navbar-end">
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
                placeholder="type here..."
                className="outline-none w-full shadow-sm focus:shadow-md ease-in-out duration-300 px-4 rounded-md bg-none dark:bg-none"
              />
              <span className="uil uil-search btn ml-2"></span>
            </div>
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
      </div>
    </header>
  );
};

export default Navbar;
