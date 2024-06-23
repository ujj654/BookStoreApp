import React, { useEffect, useState } from 'react'
import Cards from './Cards'
import {Link} from 'react-router-dom'
import axios from 'axios' 
function Course() {
  const [book,setBook] = useState([])
  useEffect(()=>{
    const getBook=async()=>{
      try {
       const res = await axios.get("http://localhost:4001/book");
       console.log(res.data);
       setBook(res.data);
      } catch (error) {
        console.log(error)
      }
    }
    getBook();
  },[])

  return (
    <>
    <div className='max-w-screen mx-auto md:px-20 px-4'>
      <div className='mt-28 item-center justify-center text-center'>
        <h1 className='text-2xl md:text-4xl'>We're delighted to have you <span className='text-pink-500'>Here! :)</span></h1>
        <p className='mt-12'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa reprehenderit, aliquid quos natus quo soluta illo necessitatibus atque laborum unde illum libero eius mollitia ullam possimus impedit eum nam dolorum repellat aliquam. Cumque placeat porro rerum a mollitia autem distinctio ipsam. Quod inventore iure pariatur. Explicabo vero debitis rem molestias!
        </p>
        <Link to="/">
        <button className='mt-6 bg-pink-500 text-white py-2 px-4 rounded-md hover:bg-pink-700 duration-300'>Back</button>
        </Link>
      </div>
      <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
        {
          book.map((item)=>(
            <Cards key={item.id} item={item}/>
          ))}
      </div>
    </div>
    </>
  )
}

export default Course