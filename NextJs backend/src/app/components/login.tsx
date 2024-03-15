"use client"
import {useForm,SubmitHandler} from 'react-hook-form'
import { useState } from 'react'
export default function LoginPage(){
    type formType ={email:string,password:string}
    const [message,setMesssage]=useState<string>("")
    const {register,handleSubmit,formState:{errors}}= useForm<formType>()
    const submitHandler:SubmitHandler<formType>=async(data)=>{
      console.log(data)
      try{
        const res = await fetch("./api/signin",{
        method:'POST',
        body: JSON.stringify(data)
      } )
      const mes=await res.json()
      setMesssage(mes.message)
  } catch{}
    }
    return(
        <div className="flex items-center justify-center h-screen bg-cyan-50">
        <div className="shadow-xl bg-slate-300 rounded-xl font-semibold max-w-2xl h-[320px] mx-auto p-6 ">
      <form onSubmit={handleSubmit(submitHandler)} className="flex flex-col gap-2  justify-center h-full" >
      <label >Email</label>
      <input  className='p-1' {...register("email",{required:true})} type="text" />
      {errors.email && <span className='text-red-600 text-sm'> Please enter UserName  </span>}
      <label >password</label>
      <input className='p-1'{...register("password",{required:true})} type="password" />
      {errors.password && <span className='text-red-600 text-sm'> Please enter password</span>}
      <button type="submit" className="hover:shadow-2xl rounded-xl p-1 mt-4   shadow-md bg-gray-100"> Sign Up </button>
      <h1 className='m-3'>{message}</h1>
      </form>
      
        </div>
        </div>
    )
}