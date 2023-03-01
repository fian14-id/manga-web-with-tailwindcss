import React from 'react'

const Loading = () => {
  
  const Load = () => {
    return (
      <div className="card w-full bg-base-100 shadow-xl mt-4">
      <div className="card-body animate-pulse">
        <span className="w-16 h-6 bg-gray-200 dark:bg-gray-400"></span>
        <span className="bg-gray-200 dark:bg-gray-400 w-full h-4"></span>
      </div>
      <figure>
        <div className="w-full bg-gray-200 dark:bg-gray-400 h-28 sm:h-36"></div>
      </figure>
    </div>
    )
  }

  return (
    <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
      <Load />
      <Load />
      <Load />
      <Load />
      <Load />
      <Load />
    </main>
  );
}

export default Loading