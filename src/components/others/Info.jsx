import React from 'react'

const Info = () => {
  return (
        <div className='h-40 flex flex-row justify-around rounded-3xl hover:scale-90'>
            <div className='w-1/5 ml-10 hover:scale-110 transition duration-150 hover:bg-gray-500 hover:text-white text-black hover:rounded-3xl'>
            <div className='flex flex-row '>
                <span class="text-2xl text-blue-500 mt-5">🎓</span>
                <h2 className='text-2xl font-bold mt-5'>Graduation</h2>
            </div>
                <h3 className='font-normal '>Education university was established.<br />it is recognized</h3>
                <button className=' font-bold text-blue-500 cursor-pointer hover:text-blue-700 active:scale-90 active:shadow-2xl transition duration-150'>Learn More➡️</button>
            </div>
            <div className='w-1/5 ml-10 hover:scale-110 transition duration-150 hover:bg-gray-500 hover:text-white text-black hover:rounded-3xl'>
            <div className='flex flex-row '>
                <span class="text-2xl text-blue-500 mt-5">🏫</span>
                <h2 className='text-2xl font-bold  mt-5'>University Life</h2>
            </div>
                <h3 className='font-normal '>Education university was established.<br />it is recognized</h3>
                <button className='text-blue-500 font-bold cursor-pointer hover:text-blue-700 active:scale-90 active:shadow-2xl transition duration-150'>Learn More➡️</button>
            </div>
            <div className='w-1/5 ml-10 hover:scale-110 transition duration-150 hover:bg-gray-500 hover:text-white text-black hover:rounded-3xl'>
            <div className='flex flex-row '>
                <span class="text-2xl text-blue-500 mt-5">📖</span>
                <h2 className='text-2xl font-bold mt-5'>Education Services</h2>
            </div>
                <h3 className='font-normal '>Education university was established.<br />it is recognized</h3>
                <button className='text-blue-500 font-bold cursor-pointer hover:text-blue-700 active:scale-90 active:shadow-2xl transition duration-150'>Learn More➡️</button>
            </div>
        </div>
  )
}

export default Info
