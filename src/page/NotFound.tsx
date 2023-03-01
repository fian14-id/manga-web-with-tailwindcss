import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-5xl font-bold mb-5">404</h1>
      <p className="text-lg mb-5">Maaf, halaman yang kamu cari tidak ditemukan.</p>
      <Link to="/" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">
        Kembali ke Beranda
      </Link>
    </div>
  );
};

export default NotFound;
