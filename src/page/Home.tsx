import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate()
  return (
    <div className="flex flex-col justify-center items-center min-h-screen dark:bg-indigo-600 bg-indigo-400">
      <h1 className="font-bold text-5xl text-white">
      <em className='uil uil-facebook' style={{textShadow: "2px 2px 6px rgba(0,0,0,.3)"}}></em>
      {" "}
      fian14.<span className="px-2 bg-black">id</span>
      {" "}
      </h1>
      <button onClick={() => navigate('home')} className="bg-white ease-in-out duration-300 px-6 py-2 rounded-md font-bold text-black hover:-translate-y-1 hover:shadow-lg animate-bounce mt-6">Start Explore</button>
    </div>
  )
}

export default Home