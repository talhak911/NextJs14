"use client"

import { useState } from "react"

export default function CreateBlog(props:createBlogProps) {
  const [title,setTitle]=useState<string>("");
  const [date,setDate]=useState<string>("");
  const [desc,setDesc]=useState<string>("")
  
  const onAddHandler=()=>{
    const toAdd:blogType={
      title,
      date,
      desc,
      id:`{Date.now()}`
    }
    props.onClickAddhandler(toAdd)
    props.isClose()
    clearInputFields()
  }
  const onUpdatehandler =()=>{
    
      const toUpdate :blogType={
        id:props.blogObect.id,
        title:title||props.blogObect.title,
        desc:desc||props.blogObect.desc,
        date:date||props.blogObect.date
      }
    props.onClickUpdatehandler(toUpdate)
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
  <div className="max-w-md mx-auto">
<button  onClick={()=>{
  clearInputFields()
  props.isClose()}} className="button-57" role="button"><span className="text">Close</span><span></span></button>
<form >

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
            value={title || props.blogObect.title}
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
            value={date || props.blogObect.date}
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
           value={desc || props.blogObect.desc} 
           // onChange={handleInputChange}
          />
        </div>
   {   props.blogObect.id? <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
          onClick={onUpdatehandler}
        >
          Update Blog
        </button> :<button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
          onClick={onAddHandler}
        >
          Add Blog
        </button>}
      </form>
   
      </div>
      </div>

)
  }