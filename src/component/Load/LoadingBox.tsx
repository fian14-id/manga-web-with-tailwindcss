import React from 'react'

const Loading = () => {
  
  const Load = () => {
    return (
      <div className="flex animate-pulse flex-col md:flex-row bg-gray-200 rounded-lg shadow-xl p-6 mb-4">
        <div className="w-full md:w-1/3 mb-6 md:mb-0 md:pr-4">
          <div
            className="w-full h-40 bg-gray-400"
          />
        </div>
        <div className="w-full md:w-2/3">
          <div className="w-32 h-6 bg-gray-400 mb-2"></div>
          <div className="w-14 h-4 bg-gray-400"></div>
        </div>
      </div>
    );
  }

  return (
    <>
      <Load />
      <Load />
      <Load />
      <Load />
      <Load />
      <Load />
    </>
  );
}

export default Loading