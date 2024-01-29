'use client'
import Link from "next/link";
import { useEffect,useState } from "react";
export default function Blogs() {
const [userdata,setUser]=useState(null)
  useEffect(()=>{
    try {
      const auth = async ()=>{
        const token =localStorage.getItem('bearer_token')
        if (token!=null){
        const data=await fetch('https://dummyjson.com/auth/me', {
          method: 'GET',
          headers: {
            'Authorization':  token, 
          }, 
        })
        if(data){
        const user = await data.json()
        setUser(user)
        console.log(user)
      }
      }
      else{
        throw console.error("bearer token is null");
        
      }
      }
      auth()
    }
    
    catch (error){
      console.error("bearer token is null",error)
    }
   
  },[])
  return(
    <div>
     {userdata ? <h1>blogs </h1>:
     <div className="flex-col  flex items-center justify-center gap-3">
      <h1 className="text-center text-3xl mt-4">please log in first</h1>
   <div>
   <Link href='./'>
      <button  className="p-4 bg-blue-300 rounded" > Login</button>
      
     </Link>
   </div>
     </div>
     }
    </div>
   )
  }
  