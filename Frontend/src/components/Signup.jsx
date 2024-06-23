import React from 'react'
import {Link, useLocation, useNavigate} from 'react-router-dom'
import Login from './Login'
import { useForm } from 'react-hook-form'
import axios from "axios";
import toast from 'react-hot-toast';
 function Signup() {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
      const onSubmit = async (data) => {
        const userInfo={
          fullname:data.fullname,
          email:data.email,
          password:data.password,
        }
        await axios.post("http://localhost:4001/user/signup",userInfo)
        .then((res)=>{
          console.log(res.data)
          if(res.data){
            toast.success('Signup Successfully');
            navigate(from, {replace:true});
            window.location.reload();
          }
          localStorage.setItem("Users", JSON.stringify(res.data.user));
        })
        .catch((err)=>{
          if(err.response){
            console.log(err);
            toast.error("Error: " + err.response.data.message);
          }
        });
      };
  return (
    <>
    <div className='flex h-screen items-center justify-center'>
    <div className="w-[600px]">
   <div className="modal-box bg-white">
    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
    
    <h3 className="font-bold text-2xl">Signup</h3>
    {/*Name*/}
    <div className='mt-4 space-y-2'>
      <span className='text-lg'>Name</span>
      <br/>
      <input type="text" placeholder='Enter Your Name' className='w-80 px-3 py-1 border-md outline-none bg-white'
      {...register("fullname", { required: true })} />
      <br/>
      {errors.fullname && <span className="text-sm text-red-500">This field is required</span>}
    </div>
    {/*Email*/}
    <div className='mt-4 space-y-2'>
      <span className='text-lg'>Email</span>
      <br/>
      <input type="email" placeholder='Enter Your Email' className='w-80 px-3 py-1 border-md outline-none bg-white' 
      {...register("email", { required: true })}/>
      <br/>
      {errors.email && <span className="text-sm text-red-500">This field is required</span>}
    </div>
    {/*password*/}
    <div className='mt-4 space-y-2'>
      <span className='text-lg'>Password</span>
      <br/>
      <input type="text" placeholder='Enter Your Password' className='w-80 px-3 py-1 border-md outline-none bg-white' 
      {...register("password", { required: true })}/>
      <br/>
      {errors.password && <span className="text-sm text-red-500">This field is required</span>}
    </div>
    {/*Button*/}
      <div className='flex justify-around mt-4'>
        <button className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200'>Signup</button>
        <p className='text-xl'>Have Account? <button className='underline text-blue-500 cursor-pointer'
        onClick={()=>
            document.getElementById("my_modal_3").showModal()
        }
        >Login</button>
        <Login />
        </p>
      </div>
      </form>
  </div>
</div>
</div>
    </>
  )
 }

export default Signup