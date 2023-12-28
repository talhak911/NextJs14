"use client"

import { useState } from "react"

export default function CreateBlog(props:createBlogProps) {
  const [title,setTitle]=useState<string>("");
  const [date,setDate]=useState("");
  const [desc,setDesc]=useState<string>("")
  
  const onAddHandler=()=>{
    const toAdd:blogType={
      title,
      date,
      desc
    }
    props.onClickAddhandler(toAdd)
    props.isClose()
    clearInputFields()
  }
  //clear input fields
  const clearInputFields=()=>{
    setTitle("");
    setDate("");
    setDesc("");
  }
  return( 

<div className={`modal ${props.isOpen ? 'block' : 'hidden'}`}>
<button  onClick={()=>{
  clearInputFields()
  props.isClose()}} className="button-57" role="button"><span className="text">Close</span><span></span></button>
<form className="max-w-md mx-auto">

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
            Title:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="title"
            type="text"
            name="title"
            onChange={(e:onChangeEventTypes)=>setTitle(e.target.value)}
            value={title}
       //     onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Date">
            Date:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="Date"
            type="Date"
            name="Date"
            onChange={(e:onChangeEventTypes)=>setDate(e.target.value)}
            value={date}
   //         onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="desc">
            Description:
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="desc"
            name="desc"
            onChange={(e:onChangeEventTypes)=>setDesc(e.target.value)}
           value={desc}
           // onChange={handleInputChange}
          />
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
          onClick={onAddHandler}
        >
          Add Blog
        </button>
      </form>
      {<>
        <h1>{title}</h1>
        <h1>{date}</h1>
        <h1>{desc}</h1>
      </>}
      </div>

)
  }