import React from 'react'

const Menu = ({menu}) => {
    function closeMenu(){
        menu(false)
    }
  return (
    <div className={`fixed top-0 h-80 w-64 bg-black text-white
  transition-transform duration-700 rounded-2xl m-3 z-50`}>
      <div className='bg-yellow-500 h-17 flex justify-center items-center flex-row'>
        <div className='-rotate-20 -mt-6 text-black'>
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-graduation-cap-icon lucide-graduation-cap"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"/><path d="M22 10v6"/><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"/></svg>
        </div>
        <h2 className='font-bold text-lg text-white -ml-3'>Vaibhav kumar</h2>
        <button onClick={()=>{
            closeMenu();
        }} className='text-white ml-10 hover:scale-80 transition duration-150 hover:text-black'>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-ellipsis-icon lucide-circle-ellipsis"><circle cx="12" cy="12" r="10"/><path d="M17 12h.01"/><path d="M12 12h.01"/><path d="M7 12h.01"/></svg>
        </button>
      </div>
      <div className='bg-blue-900 rounded-2xl text-white mt-5'>
        <ul>
          <li className='border border-black text-sm font-semibold p-2 flex flex-row gap-2 items-center hover:scale-105 hover:bg-gray-800'>
            <div className="text-yellow-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-pen-icon lucide-user-pen"><path d="M11.5 15H7a4 4 0 0 0-4 4v2"/><path d="M21.378 16.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"/><circle cx="10" cy="7" r="4"/></svg>
            </div>
            <h2>Profile</h2>
            <button className='text-yellow-500 ml-19 active:scale-90 active:shadow-2xl transition duration-150'>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-arrow-right-icon lucide-circle-arrow-right"><circle cx="12" cy="12" r="10"/><path d="m12 16 4-4-4-4"/><path d="M8 12h8"/></svg>
            </button>
            </li>
          <li className='border border-black text-sm font-semibold p-2 flex flex-row gap-2 items-center hover:scale-105 hover:bg-gray-800'>
            <div className="text-yellow-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-folder-bookmark-icon lucide-folder-bookmark"><path d="M12 6v8l3-3 3 3V6"/><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2z"/></svg>
            </div>
            <h2>Courses</h2>
            <button className='text-yellow-500 ml-17 active:scale-90 active:shadow-2xl transition duration-150'>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-arrow-right-icon lucide-circle-arrow-right"><circle cx="12" cy="12" r="10"/><path d="m12 16 4-4-4-4"/><path d="M8 12h8"/></svg>
            </button>
          </li>
          <li className='border border-black text-sm font-semibold p-2 flex flex-row items-center gap-2 hover:scale-105 hover:bg-gray-800'>
            <div className='text-yellow-500'>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-settings-icon lucide-settings"><path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"/><circle cx="12" cy="12" r="3"/></svg>
            </div>
            <h2>Settings</h2>
            <button className='text-yellow-500 ml-16 active:scale-90 active:shadow-2xl transition duration-150'>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-arrow-right-icon lucide-circle-arrow-right"><circle cx="12" cy="12" r="10"/><path d="m12 16 4-4-4-4"/><path d="M8 12h8"/></svg>
            </button>
          </li>
        </ul>
      </div>
      <div className='border border-black text-sm font-semibold p-2 flex flex-row items-center mt-10 ml-15 gap-2 bg-red-500 w-30 rounded-full justify-center hover:bg-white hover:text-black active:scale-90 active:shadow-2xl transition duration-150'>
       <div className='text-yellow-500'>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-log-out-icon lucide-log-out"><path d="m16 17 5-5-5-5"/><path d="M21 12H9"/><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/></svg>
        </div>
        <h1>Logout</h1>
      </div>
      <div className='mt-4'>
        <h2 className='text-white font-medium text-xs ml-17'>“Future Engineer❤️”</h2>
      </div>
    </div>
  )
}

export default Menu
