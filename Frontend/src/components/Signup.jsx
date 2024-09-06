import React from 'react'
import { useForm } from "react-hook-form"
import Login from './Login'
function Signup() {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
      const onSubmit = (data) => console.log(data)
  return (
  <>
  <div className="flex h-screen items-center justify-center">
  <div  className="w-[600px]">
  <div className="modal-box">
    <form  onSubmit={handleSubmit(onSubmit)} method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
     >
    ✕</button>

    <h3 className="font-bold text-lg">Signup</h3>
    <div className="mt-4 space-y-2">
        <span>Name</span>
        <br/>
        <input type="text" placeholder="Enter your Name" className="w-80 px-3 border rounded-md outline-none mt-4"
         {...register("name", { required: true })}/>
         <br/>
            {errors.name && <span className="text-sm text-red-500">This field is required</span>}
    </div>
    <div className="mt-4 space-y-2">
        <span>Email</span>
        <br/>
        <input type="text" placeholder="Enter your email" className="w-80 px-3 border rounded-md outline-none mt-4"
         {...register("email", { required: true })}/>
         <br/>
            {errors.email && <span clssName="text-sm text-red-500">This field is required</span>}
    </div>
    <div className="mt-4 space-y-2">
    <span>Password</span>
        <br/>
        <input type="text" placeholder="Enter your password" className="w-80 px-3 border rounded-md outline-none mt-4"
         {...register("password", { required: true })}/>
            {errors.password && <span className="text-sm text-red-500">This field is required</span>}
    </div>
    <div className='flex justify-around mt-4'>
        <button className="bg-pink-600 text-white rounded-md px-4 py-1 hover:bg-pink-700 duration-200">Login</button>
        <p>Have you Account?
          <button className="underline text-blue-600 cursor-pointer"
         onClick={()=>document.getElementById("my_modal_3").showModal()}>
          Login</button>
          <Login/></p>
    </div>
    </form >
  </div>
</div>
  </div>
  </>
  )
}

export default Signup
