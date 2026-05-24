import React, { use } from 'react'
import Home from './components/Home/Home'
import Login from './components/Authentication/Login'
import Signup from './components/Authentication/Signup'
import StudentProfile from './components/Profile/StudentProfile'

const App = () => {
  return <div>
    <Home/> 
    <Login/>
    <Signup/>     
    <StudentProfile />
  </div>
}

export default App
