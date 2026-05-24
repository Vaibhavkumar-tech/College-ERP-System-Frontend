import React from 'react'

const Header = () => {
  return (
    <div className='text-white h-22 w-full flex flex-row justify-around p-7 border-2 bg-gray-900'>
        <div className='flex flex-row'>
            <img className="h-25 w-25 object-center object-cover" src="https://i.pinimg.com/1200x/5c/78/1c/5c781c51fd9fa353117ec6e959c11129.jpg" alt="" />
            <h2 className='ml-10 text-3xl font-bold hover:scale-110 hover:shadow-2xl transition duration-150'>Edu<span className='text-blue-500'>ker</span></h2>
        </div>
        <div>
            <button className='font-bold cursor-pointer text-1xl hover:text-blue-300 active:scale-90 active:shadow-2xl transition duration-150'>Home</button>
            <button className='ml-5 font-bold cursor-pointer text-1xl hover:text-blue-300 active:scale-90 active:shadow-2xl transition duration-150'>Course</button>
            <button className='ml-5 font-bold cursor-pointer text-1xl hover:text-blue-300 active:scale-90 active:shadow-2xl transition duration-150'>Contact</button>
            <button className='ml-5 font-bold cursor-pointer text-1xl hover:text-blue-300 active:scale-90 active:shadow-2xl transition duration-150'>About</button>
        </div>
        <form>
            <input className="bg-gray-600 text-white rounded-2xl px-2 hover:bg-white hover:text-black" type="text" placeholder='Search...'/>
        </form>
      
    </div>
  )
}

export default Header
