"use client"
import Link from "next/link"
import { useSelectedLayoutSegments } from "next/navigation"
export default function Nav(){
    const navlinks:{name:string,link:string}[]=[{name:"Home",link:"/"},{name:"About",link:"/about"},{name:"Contact",link:"/contact"}]
    const current = useSelectedLayoutSegments()
    console.log(current,"type is " ,typeof(current))
    return (
        <nav className="bg-gray-800">
  <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
    <div className="relative flex h-16 items-center justify-between">
   
      <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">

        <div className="hidden sm:ml-6 sm:block">
          <div className="flex space-x-4">
            {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
           {navlinks.map((item,index)=>{
            return(
                <Link key={index} className="text-white px-3" href={item.link} >
                    <div className={(`/${current[1]}`=== item.link  ) ?" font-extrabold":""}>
                        {item.name}
                    </div>
                </Link>
            )
           })}
           
          </div>
        </div>
      </div>
    
    </div>
  </div>
</nav>

    )
}