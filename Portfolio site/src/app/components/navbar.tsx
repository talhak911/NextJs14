'use client'
import { AiOutlineMenu, AiOutlineClose, AiOutlineMail } from "react-icons/ai"
import {FaGithub, FaLinkedinIn} from 'react-icons/fa'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import Link from "next/link";
import { useState } from "react";
const Navbar = () => {
    const [nav,setNav]=useState(false);
    const handleNav=()=>{
        setNav(true)
    }
    return(
    <div className="fixed w-full h-20 shadow-xl z-[100]">
        <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
            <div className="mx-8">

                <h2>Talha</h2>
            </div>
            <div>
                <ul className="hidden md:flex">
                    <Link href='/' >
                        <li className="ml-10 text-sm uppercase hover:border-b-black">Home</li>
                    </Link>
                    <Link href='/' >
                        <li className="ml-10 text-sm uppercase hover:border-b">About</li>
                    </Link>
                    <Link href='/' >
                        <li className="ml-10 text-sm uppercase hover:border-b">Skills</li>
                    </Link>
                    <Link href='/' >
                        <li className="ml-10 text-sm uppercase hover:border-b">Projects</li>
                    </Link>
                    <Link href='/' >
                        <li className="ml-10 text-sm uppercase hover:border-b">Contact</li>
                    </Link>
                </ul>
                <div onClick={handleNav} className="md:hidden">
                    <AiOutlineMenu size={25} />
                </div>
            </div>
        </div>

        <div className={nav ? 'fixed left-0 top-0 w-full h-screen bg-black/70':''}>
            <div className={
                nav? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
                :"fixed left-[-100%] top-0 w-[75%] sm:w-[60%] md:[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
            }>
                <div>
                    <div className="flex items-center justify-between w-full ">
                        <h2>Talha</h2>
                        <div onClick={()=>setNav(false)} className="rounded-full shadow-lg shadow-gray-300 p-3 cursor-pointer">
                            <AiOutlineClose />
                        </div>
                    </div>
                    <div className="border-b border-gray-300 my-4"> 
                        <p className="w-[85%] md:w-[90%] py-4">Let's build something legendary together </p>
                    </div>
                </div>
                <div className="py-4 flex flex-col">
                <ul className="uppercase">
                    <Link href='/'>
                        <li className='py-4 text-sm'>Home</li>
                    </Link>
                    <Link href='/'>
                        <li className='py-4 text-sm'>About</li>
                    </Link>
                    <Link href='/'>
                        <li className='py-4 text-sm'>Skills</li>
                    </Link>
                    <Link href='/'>
                        <li className='py-4 text-sm'>Projects</li>
                    </Link>
                    <Link href='/'>
                        <li className='py-4 text-sm'>Contacts</li>
                    </Link>
                </ul>
                <div className="pt-10">
                <p className="uppercase tracking-widest text-[#5651e5]">Let's Connect</p>
                <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                   <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                   <FaLinkedinIn/>
                   </div>
                   <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                   <FaGithub/>
                   </div>
                   <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                   <AiOutlineMail/>
                   </div>
                   <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                   <BsFillPersonLinesFill/>
                   </div>
                   
                </div>
                </div>
            </div>
            </div>
           
        </div>
    </div>
    )
};

export default Navbar;