"use client"
import React from "react";

import Link from "next/link";
 function Navi(){
    return(
        
    <nav>
   
            <Link href="./" className="logo">Xplore
                <i className="fab fa-staylinked"></i>kill
            </Link>
            <div className="nav-links" id="navLinks">
                {/* <!-- Reposnive bar open and close --> */}
                <i className="fa fa-times" onClick={()=>{
                      var navLinks = document.getElementById("navLinks");
                            if(navLinks)
                          navLinks.style.right = "-200px";
                      
                }}></i>
                <ul>
                    <li><Link href="./">Home</Link></li>
                    <li><Link href="./course">Course</Link></li>
                    <li><Link href="./blog">Blog</Link></li>
                    <li><Link href="./about">About</Link></li>
                    <li><Link href="contact">Contact</Link></li>
                </ul>
            </div>
            <i className="fa fa-bars" onClick={()=>{ var navLinks = document.getElementById("navLinks");

if(navLinks)
    navLinks.style.right = "0";}}></i>
            {/* <!-- Reposnive bar open and close --> */}
        </nav>
    )
}
export default Navi