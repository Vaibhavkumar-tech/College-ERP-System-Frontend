import React from 'react'

const ProfessorHeader = () => {
  return (
    <div className='bg-sky-200 h-70 flex flex-row items-center '>
      <div>
        <img className='h-65 w-65 rounded-full ml-40 object-center object-cover' src="https://i.pinimg.com/474x/d6/bc/8d/d6bc8d404b8a79fbb3f6c2ad53fbc2dd.jpg" alt="" />
      </div>
      <div className="flex flex-col mt-17">
        <div className='flex flex-row ml-35 '>
          <div className='flex flex-col'>
              <h2 className='font-bold text-3xl '>Dharmesh Shah</h2>
              <div className="flex flex-row gap-2 m-2">
                  <h2 className="font-medium text-xs border rounded-2xl px-1 h-5 bg-gray-200 hover:bg-red-300 cursor-pointer">Professor</h2>
                  <h2 className="font-medium text-xs border rounded-2xl px-1 h-5 bg-gray-200 hover:bg-red-300 cursor-pointer">Engineering</h2>
              </div>
              <div className="font-normal text-sm w-130">
                <h3> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur, odit? Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, itaque? </h3>
                <h2>Boston MA</h2>
              </div>
          </div>
          <div className="flex flex-row gap-2 mt-30">
            <a href="https://www.linkedin.com/in/dharmesh-shah-9b1a5a1/"><img className="h-7 w-7 object-cover object-center ml-40 hover:scale-107"  src="https://img.icons8.com/?size=100&id=13930&format=png&color=000000"/></a>
            <a href="https://www.facebook.com/dharmesh.shah.9"><img className="h-7 w-7 object-cover object-center hover:scale-107" src="https://img.icons8.com/?size=100&id=z657ovoGgS2o&format=png&color=000000"/></a>
            <a href="https://twitter.com/dharmeshshah"><img className="h-7 w-7 object-cover object-center hover:scale-107" src="https://img.icons8.com/?size=100&id=vzeEiquVUR7e&format=png&color=000000" /></a>
            <a href="https://www.instagram.com/dharmeshshah/"><img className="h-7 w-7 object-cover object-center hover:scale-107" src="https://img.icons8.com/?size=100&id=BrU2BBoRXiWq&format=png&color=000000"/></a>
          </div>
        </div>
        <div className="flex flex-row ml-35 mt-16">
          <div className="border h-13 w-30 flex items-center justify-center flex-col border-sky-300 bg-gray-200 rouneded">
            <h2 className='font-bold text-1xl'>4.5</h2>
            <h2 className='font-medium text-sm'>Rating</h2>
          </div>
          <div className="border h-13 w-30 flex items-center justify-center flex-col border-sky-300 bg-gray-200">
            <h2 className='font-bold text-1xl'>200</h2>
            <h2 className='font-medium text-sm'>Followers</h2>
          </div>
          <button className="bg-sky-400 w-50 rounded-r-2xl hover:bg-gray-800 hover:scale-110 transition-all duration-150
         active:scale-95">
            <h2 className='font-medium text-sm text-white'>+ Send Notification</h2>
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProfessorHeader
