import React from 'react'
import Navbar from '../components/Navbar';
import Course from '../components/Course';
import Footermain from '../components/Footermain';

function courses() {
  return (
    <>
    <Navbar/>
    <div className='min-h-screen'><Course/></div>
    <Footermain/>
    </>
  )
}

export default courses