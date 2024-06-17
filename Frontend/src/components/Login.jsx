import React, { useRef } from 'react'
import {Link} from 'react-router-dom'
import { useForm } from 'react-hook-form'

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data)
  
  const dialogRef = useRef();
  const handleDialog = () =>{
    console.log( dialogRef.current," dialogRef.current")
    dialogRef.current.close()
}


  return (
    <div>
    <dialog ref={dialogRef} id="my_modal_3" className="modal">
  <div className="modal-box bg-white">
    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
      {/* if there is a button in form, it will close the modal */}

     {/*<Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
      > ✕ </Link>*/}

<p onClick={handleDialog} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</p>
      
    <h3 className="font-bold text-lg">Login</h3>
    {/*Email*/}
    <div className='mt-4 space-y-2'>
      <span>Email</span>
      <br/>
      <input type="text" placeholder='Enter Your Email' className='w-80 px-3 py-1 border-md outline-none bg-white'
      {...register("email", { required: true })} />
      <br/>
      {errors.email && <span className="text-sm text-red-500">This field is required</span>}

    </div>
    {/*password*/}
    <div className='mt-4 space-y-2'>
      <span>Password</span>
      <br/>
      <input type="text" placeholder='Enter Your Password' className='w-80 px-3 py-1 border-md outline-none bg-white'
      {...register("password", { required: true })} />
      <br/>
      {errors.password && <span className="text-sm text-red-500">This field is required</span>}

    </div>
    {/*Button*/}
      <div className='flex justify-around mt-4'>
        <button className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200'>Login</button>
        <p>Not Registered? <Link to="/signup" className='underline text-blue-500 cursor-pointer'>Signup</Link></p>
      </div>
      </form>
  </div>
</dialog>

</div>
  );
}

export default Login