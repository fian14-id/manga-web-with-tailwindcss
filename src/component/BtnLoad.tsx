import React from "react";

const BtnLoad = () => {
  const Load = () => {
    return (
      <div className="card w-80 lg:w-96 bg-base-100 shadow-xl mt-4">
        <div className="card-body animate-pulse">
            <button className="bg-gray-200 dark:bg-gray-400">{" "}</button>
          </div>
      </div>
    );
  };

  return (
    <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
      <Load />
      <Load />
      <Load />
      <Load />
      <Load />
      <Load />
      <Load />
      <Load />
      <Load />
      <Load />
      <Load />
      <Load />
      <Load />
      <Load />
      <Load />
      <Load />
      <Load />
      <Load />
    </main>
  );
};

export default BtnLoad;
