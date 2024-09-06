import React from 'react'
import Login from './Login'

function Contact() {
  return (
    <>
    <div className="flex h-screen items-center justify-center">
  <div  className="w-[600px]">
  <div className="">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
     >
    ✕</button>
    </form>
    <h3 className="font-bold text-lg">Contact</h3>
    <div className="mt-4 space-y-2">
        <span>Name</span>
        <br/>
        <input type="email" placeholder="Enter your Name" className="w-80 px-3 border rounded-md outline-none mt-4"/>
    </div>
    <div className="mt-4 space-y-2">
        <span>Email</span>
        <br/>
        <input type="email" placeholder="Enter your email" className="w-80 px-3 border rounded-md outline-none mt-4"/>
    </div>
    
    <div className="mt-4 space-y-2">
    <span>Password</span>
        <br/>
        <textarea className="textarea textarea-bordered w-80" placeholder="Bio"></textarea>
    </div>
    <div className='flex  mt-4'>
        <button className="bg-pink-600 text-white rounded-md px-4 py-3 bg-blue-600 text-blue-600 duration-200">Submit</button>
        
    </div>
  </div>
</div>
  </div>
    </>
  )
}

export default Contact
