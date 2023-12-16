// import { Html } from 'next/document'
'use client'
import React from 'react';
import {useState} from 'react'
import ButtonComp from '@/components/buttonComp/buttonComponent';
export default function Home() {
  let count:number=0
  const names=["Talha","Ali","Umer","Faiz","Umair"]
  const [arr,setArray]=useState(0)
  function nextName(){
    setArray(arr+1)
  }
  function preName(){
    setArray(arr-1)
  }
  function reset(){
    setArray(0)
  }
  
  return(


    <section className='h-screen flex items-center justify-center'>
    
    
    {names[arr]?<div className='bg-transparent text-blue-700 hover:text-black py-2 px-4 border border-blue-500 hover:border-black rounded '>
    <h1>{names[arr]}</h1>
   </div> :
   
   <ButtonComp title='End Reset?' onclickHandler={reset}/> }
   <br />
   
   <ButtonComp title='Previous'onclickHandler={preName}/>
     <ButtonComp title='Next' onclickHandler={nextName}/>
     </section>
 
   )
}
