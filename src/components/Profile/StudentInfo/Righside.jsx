import React from 'react'

const Righside = () => {
  return (
    <div className='bg-white border-2 hover:scale-102 w-1/3 h-130 mt-10 ml-10 flex flex-row p-5'>
        <div>
            <h2 className='font-bold text-1xl w-30'>My Information</h2>
            <img className='h-50 w-50 rounded-full object-fit object-cover mt-15' src="https://i.pinimg.com/736x/26/65/3d/26653d8947cf66b9c0005bf019844806.jpg" />
        </div>
        <div className='flex flex-row mt-20 ml-5'>
            <div className='flex flex-col font-bold text-sm'>
                <h2>Name:</h2>
                <h2>Gender:</h2>
                <h2>Father's Name:</h2>
                <h2>Mother's Name:</h2>
                <h2>Date of Birth:</h2>
                <h2>Religion:</h2>
                <h2>E-mail:</h2>
                <h2>Admission Date:</h2>
                <h2>Batch:</h2>
                <h2>Entry No:</h2>
                <h2>Address :</h2>
                <h2>Phone No. :</h2>
            </div>
            <div className='flex flex-col font-normal text-sm'>
                <h2>Vaibhav Kumar</h2>
                <h2>Male</h2>
                <h2>B.Tech Computer Science</h2>
                <h2>Student</h2>
                <h2>15 Aug 2003</h2>
                <h2>Hindu</h2>
                <h2>vaibhavkumar62078@gmail.com</h2>
                <h2>10 Sep 2022</h2>
                <h2>2022 - 2026</h2>
                <h2>22CSE1045</h2>
                <h2>Jammu & Kashmir, India</h2>
                <h2>+91 60053XXXXX</h2>
            </div>
        </div>
      
    </div>
  )
}

export default Righside
