import React from 'react'

const Header = ({menu}) => {
    function openMenu(){
        console.log(menu)
        menu(true);
        console.log(menu)
    }
  return (
    <div>
        <div className="bg-[url('https://images.unsplash.com/photo-1652736719079-b12b89b8ffa0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center flex flex-row items-center bg-black text-white border border-black h-30 gap-35 rounded-1xl">
            <button
            onClick={()=>{
                openMenu();
            }} 
            className='ml-3 active:scale-105'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-menu-icon lucide-menu"><path d="M4 5h16"/><path d="M4 12h16"/><path d="M4 19h16"/></svg>
            </button>
            <h2 className='font-bold text-base'>EDU<span className="text-blue-400 font-bold text-lg">KER</span> UNIVERSITY-<span className='text-green-300 text-sm'>College Management System</span> </h2>
            <div className='flex flex-row gap-3'>
                <div className="relative w-fit">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-message-square-dot-icon lucide-message-square-dot"
                    >
                        <path d="M12.7 3H4a2 2 0 0 0-2 2v16.286a.71.71 0 0 0 1.212.502l2.202-2.202A2 2 0 0 1 6.828 19H20a2 2 0 0 0 2-2v-4.7"/>
                        <circle cx="19" cy="6" r="3"/>
                    </svg>
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] rounded-full min-w-4 h-4 flex items-center justify-center px-1">
                        10
                    </span>
                </div>
                <div className="relative w-fit">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-message-circle-warning-icon lucide-message-circle-warning"
                    >
                        <path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"/>
                        <path d="M12 8v4"/>
                        <path d="M12 16h.01"/>
                    </svg>
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] rounded-full min-w-4 h-4 flex items-center justify-center px-1">
                        10
                    </span>
                </div>
            </div>
            <img className='hover:scale-130 h-15 w-15 object-fit object-center rounded-full' src="https://i.pinimg.com/736x/26/65/3d/26653d8947cf66b9c0005bf019844806.jpg" />
            <div className='flex flex-col items-center -ml-27'>
                <h2 className='font-bold text-lg'>vaibhav</h2>
                <h4 className='font-medium text-sm'>student</h4>
            </div>
            <button className='h-7 bg-red-600 w-30 rounded-full font-semibold hover:bg-white hover:text-black active:scale-90 active:shadow-2xl transition duration-150'>Logout</button>
        </div>
        <div>
            <div className='m-3'>
                <h5 className='text-xs font-medium'>Home{">>"}Student</h5>
            </div>
            <div className='flex flex-row gap-7 -mt-2'>
                <div className='w-1/5 bg-emerald-500 p-3 flex flex-row ml-5 mt-5 hover:text-white hover:bg-gray-900 '>
                    <h2 className='w-1/2 border-r-2 border-black h-full text-lg font-bold'>Upcoming Exam</h2>
                    <h2 className='ml-3 font-bold text-2xl'>05</h2>
                </div>
                <div className='w-1/5 bg-blue-500 p-3 flex flex-row ml-5 mt-5 hover:text-white hover:bg-gray-900 '>
                    <h2 className='w-1/2 border-r-2 border-black h-full text-lg font-bold'>Upcoming Exam</h2>
                    <h2 className='ml-3 font-bold text-2xl'>05</h2>
                </div>
                <div className='w-1/5 bg-yellow-500 p-3 flex flex-row ml-5 mt-5 hover:text-white hover:bg-gray-900 '>
                    <h2 className='w-1/2 border-r-2 border-black h-full text-lg font-bold'>Upcoming Exam</h2>
                    <h2 className='ml-3 font-bold text-2xl'>05</h2>
                </div>
                <div className='w-1/5 bg-red-500 p-3 flex flex-row ml-5 mt-5 hover:text-white hover:bg-gray-900 '>
                    <h2 className='w-1/2 border-r-2 border-black h-full text-lg font-bold'>Upcoming Exam</h2>
                    <h2 className='ml-3 font-bold text-2xl'>05</h2>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Header
