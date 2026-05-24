import React from 'react'

const Login = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-r from-black via-teal-700 to-black flex justify-center items-center">
        <div className='h-140 w-150 bg-gray-200 rounded-3xl flex flex-row'>
            <div className="w-1/2 h-full bg-[url('https://images.unsplash.com/photo-1643302940974-295201f72c37?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center text-white flex flex-col justify-center items-center rounded-3xl">
            <h2 className='text-3xl font-bold animate-pulse'>Welcome Back</h2>
            <h3 className='text-1xl font-medium'>Your Future starts here.</h3>
            </div>
            <div className='flex flex-col mt-18'>
                <h2 className='font-bold text-2xl ml-10 underline'>Login</h2>
                <form className='flex flex-col ml-15 mt-15 gap-5'>
                    <input className="text-black border-2 rounded-2xl w-50 h-10 hover:bg-gray-300 hover:border-blue-300" type="email" placeholder='Username'/>
                    <input className="text-black border-2 rounded-2xl w-50 h-10 hover:bg-gray-300 hover:border-blue-300" type="password" placeholder='password'/>
                    <button className='text-white bg-gray-900 rounded-2xl w-50 h-10 hover:bg-gray-600 hover:text-black active:scale-90 active:shadow-2xl transition duration-150 mt-10'>Login</button>
                </form>
                <div className='flex flex-row ml-17 mt-3'>
                    <h2 className='font-normal text-black text-sm'>Create new account-</h2>
                    <button className='font-medium text-blue-500 text-sm cursor-pointer active:scale-90 active:shadow-2xl transition duration-150'>Click here</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login
