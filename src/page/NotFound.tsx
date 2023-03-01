import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex flex-col justify-center bg-zinc-50 dark:bg-zinc-800 items-center h-screen">
      <h1 className="text-5xl font-bold mb-5 text-black dark:text-white">
        404
      </h1>
      <p className="text-lg mb-5 text-black dark:text-white">
        Sorry, the page you are looking for was not found.
      </p>
      <Link
        to="/"
        className="bg-primary text-white py-2 px-4 hover:shadow-lg hover:-translate-y-1 active:scale-90 ease-out duration-300 rounded shadow-md"
      >
        Kembali ke Beranda
      </Link>
    </div>
  );
};

export default NotFound;
