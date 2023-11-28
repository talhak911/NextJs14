// pages/app/[id].tsx
"use client"
import React from "react";

interface Iblog
  {id: number;
  title: string;
  desc: string;
  }

const blogPosts: Iblog[] = [
  { id: 0, title: "Learn Html", desc: "HTML (HyperText Markup Language) is the most basic building block of the Web. It defines the meaning and structure of web content. Other technologies besides HTML are generally used to describe a web page's appearance/presentation (CSS) or functionality/behavior (JavaScript)" },
  { id: 1, title: "Learn CSS", desc: "CSS, or Cascading Style Sheets, is a fundamental programming language for web design, used to stylize the presentation of HTML-based pages. By using CSS, website designers can build multiple pages with the same formatting" },
  { id: 2, title: "Learn Javascript", desc: "JavaScript (JS) is a cross-platform, object-oriented programming language used by developers to make web pages interactive. It allows developers to create dynamically updating content, use animations, pop-up menus, clickable buttons, control multimedia, etc." }
];


const Posts = ({ params}) => {
  if(blogPosts[params.id])
  return(

    <h3>
      
      {
      blogPosts[params.id].desc}
    </h3>
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
