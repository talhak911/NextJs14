// pages/app/[id].tsx
"use client"
import Image from "next/image";
import React from "react";
import { blogPosts } from "../../page";

const Posts = ({ params}:{params:{id:number}}) => {
  if(blogPosts[params.id])
  return(
<section >

<Image className={'imgCenter'} src={`/img/${params.id}.jpg`} alt="Image " height={350} width={550}/><br />
    <p className="Desc">
      
      {
      blogPosts[params.id].desc}
    </p>
    </section>
  )
  else{
    return(<h3>No post found</h3>)
  }
  // for(let i=0;i<blogPosts.length;i++){
  //   if(params.id==blogPosts[i].id){
  //     return(
  //       <h3>
  //         {blogPosts[i].desc}
  //       </h3>
  //     )
  //   }
  // }

};


export default Posts;
