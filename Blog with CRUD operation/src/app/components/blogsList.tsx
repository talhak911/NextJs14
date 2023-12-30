"use client"
import { useState } from "react";
import CreateBlog from "./createBlog";

import Link from "next/link";

export default function BlogsList() {
    const [blogs,setBlogs]=useState<blogType[]>([
      { id:'1',date: "2023-01-03", title: "Learn HTML", desc: "HTML (HyperText Markup Language) is the most basic building block of the Web. It defines the meaning and structure of web content. Other technologies besides HTML are generally used to describe a web page's appearance/presentation (CSS) or functionality/behavior (JavaScript)" },
      {id:'2', date: "2023-22-02", title: "Learn CSS", desc: "CSS, or Cascading Style Sheets, is a fundamental programming language for web design, used to stylize the presentation of HTML-based pages. By using CSS, website designers can build multiple pages with the same formatting" },
      {id:'3', date: "2023-02-01", title: "Learn Javascript", desc: "JavaScript (JS) is a cross-platform, object-oriented programming language used by developers to make web pages interactive. It allows developers to create dynamically updating content, use animations, pop-up menus, clickable buttons, control multimedia, etc." }
    ])  //for blogs array
    const [blog,setBlog]=useState<blogType>({id:"",title:"",desc:"",date:""})       // to save input for sending blog to array later
    const [isOpen,setisOpen]=useState<boolean>(false) // to open input field
    const isClose =()=>{setisOpen(false) 
      setBlog({id:"",title:"",desc:"",date:""})  }  //to close
    const onClickAddHandler=(obj:blogType)=>{
        setBlogs([...blogs,obj])
    }
    const onDeleteHandler=(obj:blogType)=>{
      setBlogs(blogs.filter((itm)=>(obj.id!==itm.id)))
    }
    const onClickUpdatehandler=(obj:blogType)=>{
      setBlogs(blogs.map((itm)=>(itm.id===obj.id ?obj:itm)))
      setisOpen(false)
      setBlog({id:"",title:"",desc:"",date:""})
    }
    const onEditHandler =(obj:blogType)=>{
      setBlog(obj)
      setisOpen(true)
      
    }
return (
   <>
   <button
     className=" bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
     onClick={() => setisOpen(true)}
   >
     Create Blog
   </button>
   <CreateBlog
     onClickUpdatehandler={onClickUpdatehandler}
     blogObect={blog}
     onClickAddhandler={onClickAddHandler}
     isOpen={isOpen}
     isClose={isClose}
   />
   <div className="flex flex-wrap justify-center gap-8 mt-8">
     {blogs.map((item) => (
       <div
         key={item.id}
         className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 mb-8"
       >
         <div className="max-w-md mx-auto bg-white border border-gray-300 rounded-lg overflow-hidden shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
           <Link
             href={{
               pathname: '../posts',
               query: { blog: JSON.stringify(item) }
             }}
           >
             <div className="rounded-t-lg overflow-hidden">
               <img
                 src="https://source.unsplash.com/800x400/?blog"
                 alt="Blog Image"
                 className="w-full h-auto"
               />
             </div>
           </Link>
           <div className="p-4">
             <span className="bg-gray-300 rounded inline-block text-center py-1 px-2 text-xs font-semibold text-black mb-2">
               {item.date}
             </span>
             <h3 className="text-xl font-semibold mb-4">
               <a
                 href="javascript:void(0)"
                 className="text-dark hover:text-primary"
               >
                 {item.title}
               </a>
             </h3>
             <p className="text-sm text-gray-700 mb-4">
               {item.desc.substring(0, 100)}...
             </p>
             <div className="flex justify-between">
               <button
                 className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                 onClick={() => onDeleteHandler(item)}
               >
                 Delete
               </button>
               <button
                 className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                 onClick={() => onEditHandler(item)}
               >
                 Edit
               </button>
             </div>
           </div>
         </div>
       </div>
     ))}
   </div>
 </>
 
)
    
};





