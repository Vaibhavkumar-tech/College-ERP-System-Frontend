import React, { useState } from 'react'
import Header from './StudentInfo/Header'
import Righside from './StudentInfo/Righside'
import Left from './StudentInfo/Left'
import Menu from './StudentInfo/Menu'


const StudentProfile = () => {
  const [menu,setMenu]=useState(false)
  return (
    <>  
     {menu==true ? <Menu menu={setMenu}/> : null}
      <div className='bg-gray-200'>
        <Header menu={setMenu}/>  
        <div className='flex flex-row gap-7'>
          <Righside/>
          <Left/>
        </div>
      </div>
    
    </>
  )
}

export default StudentProfile
