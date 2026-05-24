import React from 'react'

const Left = () => {
  return (
    <div className='w-2/3 h-130 flex flex-col mt-10'>
        <div className='bg-white border-2 h-2/5 overflow-auto'>
            <h2 className='font-bold text-2xl m-4'>Notice Board</h2>
            <div className='flex flex-col gap-3'>
                <div className='text-sm font-normal ml-3'>
                    <h2>24 April 2025</h2>
                    <h2 className='text-blue-700 font-semibold'>Professor Name</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, nostrum!</p>
                </div>
                <div className='text-sm font-normal ml-3'>
                    <h2>24 April 2025</h2>
                    <h2 className='text-blue-700 font-semibold'>Professor Name</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, nostrum!</p>
                </div>
                <div className='text-sm font-normal ml-3'>
                    <h2>24 April 2025</h2>
                    <h2 className='text-blue-700 font-semibold'>Professor Name</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, nostrum!</p>
                </div>
            </div>
        </div>
        <div className='bg-white border-2 mt-2 h-29/50'>
          <h2 className='text-2xl font-bold m-2'>All Result</h2>
          <nav className='flex flex-row justify-around border-b-2 text-1xl font-semibold overflow-auto'>
            <h2>Exam Name</h2>
            <h2>Subject</h2>
            <h2>Grade Point</h2>
            <h2>Percentage</h2>
            <h2>Date</h2>
          </nav>
          <div>

          </div>
        </div>
      
    </div>
  )
}

export default Left
