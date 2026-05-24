import React from 'react'

const Middle = () => {
  return (
    <div className=" h-200 bg-[url('https://images.unsplash.com/photo-1627291262193-7d2f553a50e6?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center">
        <div className=" flex flex-row">
            <div className='flex flex-row mt-20 ml-10'>
                <div className='flex flex-col'>
                    <img className="h-70 w-70 object-center object-cover hover:scale-90 transition duration-150" src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                    <img className="h-50 w-50 object-center object-cover mt-3 ml-20 hover:scale-90 transition duration-150" src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                </div>
                <img className="h-130 w-100 object-center object-cover ml-3 hover:scale-90 transition duration-150" src="https://plus.unsplash.com/premium_photo-1691962723291-d5d82743fb4b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
            </div>
            <div className="mt-40 ml-50">
                <h5 className='font-bold text-blue-500'>About Eduker</h5>
                <h2 className='text-6xl font-bold text-white animate-pulse hover:scale-105'>Degrees in <br /> Various Academic <br /> Disciplines</h2>
                <h4 className='text-1xl font-normal text-white mt-2'>Not only can university offer an environment rich <br /> in our social an vultural experiences.</h4>
                <div className='mt-3'>
                    <h3 className='font-semibold text-white '>☑️Access to all our courses</h3>
                    <h3 className='font-semibold text-white '>☑️Learn the latest skills</h3>
                    <h3 className='font-semibold text-white'>☑️Upskill your organization</h3>
                </div>
            </div>
        
        </div>
    </div>
  )
}

export default Middle
