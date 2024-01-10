"use client"
import Link from "next/link";
import { useSearchParams } from "next/navigation"
export default function Post(){
const searchParams =useSearchParams();
const getBlog = searchParams.get('blog')
if (!getBlog)
{return <h1>No blog found</h1>}
let blog;
try{ blog =JSON.parse(getBlog)}
catch(error:any){return <h1>Invalid blog data</h1>}

return (
    <div className="max-w-2xl mx-auto mt-8 p-4 bg-white rounded shadow-md">
      <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
      <h4 className="text-gray-600">{blog.date}</h4>
      <p className="text-lg mt-4">{blog.desc}</p>
    </div>
  );
    

}