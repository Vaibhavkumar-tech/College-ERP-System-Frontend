import React from 'react'
import Header from './Header'
import Main from './Main'
import About from '../others/About'
import Middle from './Middle'
import Info from '../others/Info'
import MiddleBox from '../others/MiddleBox'

const Home = () => {
  return (
    <div>
      <Header/>
      <Main/>
      <Info/>
      <Middle/>
      <MiddleBox/>
      <About/>
      <div className='h-20 bg-gray-400 text-black flex justify-center items-center -mt-10'>
        <h2>created by vaibhav -2026</h2>
      </div>
    </div>
  )
}

export default Home
