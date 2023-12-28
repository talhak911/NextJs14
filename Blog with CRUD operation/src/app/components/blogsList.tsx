"use client"
import { useState } from "react";
import CreateBlog from "./createBlog";
import Link from "next/link";

export default function BlogsList() {
    const [blogs,setBlogs]=useState<blogType[]>([])  //for blogs array
    const [blog,setBlog]=useState<blogType>()       // to save input for sending blog to array later
    const [isOpen,setisOpen]=useState<boolean>(false) // to open input field
    const isClose =()=>{setisOpen(false)    }  //to close
    const onClickAddHandler=(obj:blogType)=>{
        setBlogs([...blogs,obj])
    }
return (
    <>
    
    <button onClick={()=>setisOpen(true)}> Create Blog</button>
    <CreateBlog onClickAddhandler={onClickAddHandler} isOpen={isOpen} isClose={isClose}/>
    {blogs.map((item)=>{
        return(<div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        
        <div >
           <div className="rounded-t-lg">
              <img
                 src="https://cdn.tailgrids.com/1.0/assets/images/blogs/blog-01/image-02.jpg"
                 alt="image"
                 className="w-full"
                 />
           </div>
           <div>
              <span
                 className="
                 bg-grey
                 rounded
                 inline-block
                 text-center
                 py-0
                 px-1
                 text-xs
                 leading-loose
                 font-bold
                 text-black
                 mb-1
                 "
                 >
         {item.date}
              </span>
              <h3>
                 <a 
                    href="javascript:void(0)"
                    className="
                    font-semibold
                    text-xl
                    sm:text-2xl
                    lg:text-xl
                    xl:text-2xl
                    mb-4
                    inline-block
                    text-dark
                    hover:text-primary
                    "
                    >
                {item.title}
                 </a>
              </h3>
              <p className="text-base text-body-color">
                 {item.desc.substring(0,35)+"..."}
              </p>
           </div>
        </div>
     </div>)
    })
}
    </>
)
    
};





