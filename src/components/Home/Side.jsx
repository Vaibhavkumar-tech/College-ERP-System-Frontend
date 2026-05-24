import React from 'react'

const Side = () => {
  return (
    <div className='bg-gray-900 text-white flex flex-col w-10 p-5 rounded-xl h-60 ml-345'>
      <button className='rotate-90 font-bold text-1xl cursor-pointer hover:text-blue-300 active:scale-90 active:shadow-2xl transition duration-150'>Login</button>
      <button className='rotate-90 font-bold text-1xl mt-10 cursor-pointer hover:text-blue-300 active:scale-90 active:shadow-2xl transition duration-150'>Signup</button>
      <img src="" alt="" />
      <button className='rotate-90 font-bold text-1xl mt-10 cursor-pointer hover:text-blue-300 active:scale-90 active:shadow-2xl transition duration-150'>Profile</button>
    </div>
  )
}

export default Side