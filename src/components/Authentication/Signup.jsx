import React from 'react'

const Signup = () => {
  return (
    <div className="h-screen w-full bg-gradient-to-r from-black via-amber-950 to-black flex justify-center items-center">
        <div className='h-140 w-150 bg-gray-200 rounded-3xl flex flex-row'>
            <div className="w-1/2 h-full bg-[url('https://images.unsplash.com/photo-1737365505271-ac0893983a40?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center text-white flex flex-col justify-center items-center rounded-3xl">
            <h2 className='text-3xl font-bold animate-pulse'>Create <br />Your Future</h2>
            <h3 className='text-1xl font-medium mt-5'>Start your journey today.</h3>
            <h3 className='text-1xl font-medium'>Join and grow smarter....</h3>
            </div>
            <div className='flex flex-col mt-12'>
                <h2 className='font-bold text-2xl ml-10 underline'>Sign Up</h2>
                <form className='flex flex-col ml-15 mt-15 gap-3'>
                    <input className="text-black border-2 rounded-2xl w-50 h-10 hover:bg-gray-300 hover:border-blue-300 p-2" type="text" placeholder='First name'/>
                    <input className="text-black border-2 rounded-2xl w-50 h-10 hover:bg-gray-300 hover:border-blue-300 p-2" type="text" placeholder='Last name'/>
                    <input className="text-black border-2 rounded-2xl w-50 h-10 hover:bg-gray-300 hover:border-blue-300 p-2" type="email" placeholder='Email address'/>
                    <input className="text-black border-2 rounded-2xl w-50 h-10 hover:bg-gray-300 hover:border-blue-300 p-2" type="password" placeholder='password'/>
                    <button className='text-white bg-gray-900 rounded-2xl w-30 h-10 hover:bg-gray-600 hover:text-black active:scale-90 active:shadow-2xl transition duration-150 mt-7 ml-10'>Join us</button>
                </form>
                <div className='flex flex-row ml-17 mt-2'>
                    <h2 className='font-normal text-black text-sm'>Already account-</h2>
                    <button className='font-medium text-blue-500 text-sm cursor-pointer active:scale-90 active:shadow-2xl transition duration-150'>Click here</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Signup
