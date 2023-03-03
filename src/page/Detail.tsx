import React, { useState, useEffect } from "react";

import image from "../assets/global-logo.png";

const Detail = () => {
  return (
    <main className="flex flex-col">
      <div className="thumb">
        <div className="h-20 sm:h-28 bg-gray-200"></div>
        <div className="flex flex-col items-center h-full relative">
          <img
            src={image}
            alt="detail manga"
            className="w-1/4 -translate-y-12 sm:-translate-y-16 lg:-translate-y-20"
          />
          <div className="flex flex-col mt-1">
            <h1 className="font-bold text-lg sm:text-2xl">Title</h1>
            <p className="text-xs sm:text-sm lg:text-md">on going?</p>
          </div>
        </div>
      </div>
      <article className="w-11/12 m-auto mt-16">
        <article>
          <h2>Sinopsis</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            voluptates itaque eius fugiat eos dicta quisquam neque nobis. Saepe,
            ab.
          </p>
        </article>
        <div className="overflow-x-auto mt-6">
          <table className="table w-1/2">
            <tr>
              <td className="font-semibold">type</td>
              <td>: manga</td>
            </tr>
            <tr>
              <td className="font-semibold">author</td>
              <td>: fncode</td>
            </tr>
            <tr>
              <td className="font-semibold">genre</td>
              <td className="flex gap-2">
                :<p className="badge badge-primary">waduh</p>
                <p className="badge badge-primary">thanks</p>
                <p className="badge badge-primary">glops</p>
              </td>
            </tr>
          </table>
        </div>
      </article>
    </main>
  );
};

export default Detail;
