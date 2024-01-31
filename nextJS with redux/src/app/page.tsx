'use client'
import ExpenseTracker from "./components/ExpenseList";
import { useDispatch,useSelector } from "react-redux";
import { addService } from "./store/slices/serviceSlice";
import { useState } from "react";
export default function Home(){
  const[service,setService]=useState<service>({title:'',description:''})
  const dispatch=useDispatch()
  const serviceSlice=useSelector((store)=>store.service)
  const onClickAdd=()=>{
    dispatch(addService(service))
  }
  const onChangeHandler=(e:any)=>{
    setService({...service, [e.target.name]:e.target.value})
  }
  return(
  <div>
    <input onChange={onChangeHandler} name="title" type="text" value={service.title} placeholder="title"/>
      
        <input onChange={onChangeHandler} name="description" type="text" value={service.description} placeholder="Description"/>
    <button onClick={onClickAdd}>
      Add
    </button>
    <div>
    {serviceSlice.services.map((item:any)=>(<><h1>{item.title}</h1> <h2>{item.description}</h2></>))}
    </div>
  </div>
  )
}