import React from 'react'
import Side from './Side'

const Main = () => {
  return (
    <div className="bg-[url('https://images.unsplash.com/photo-1670427777679-35a56458cacc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center h-140 ">
      <Side/>
      <div className='ml-20 -mt-20'>
        <h4 className='font-bold text-small ml-5'>EDUKER UNIVERSITY</h4>
        <h2 className='font-bold text-5xl animate-pulse'>Together We'll <br />Explore New Things</h2>
        <p className='font-medium text-1xl mt-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere, mollitia. <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, eius.
        </p>
      </div>
      <button className='bg-blue-700 text-white font-medium mt-20 ml-60 h-10 w-40 border-2 rounded-2xl hover:bg-gray-900 hover:border-blue-500 cursor-pointer active:scale-90 active:shadow-2xl transition duration-150'>Find Courses</button>
    </div>
  )
}

export default Main
