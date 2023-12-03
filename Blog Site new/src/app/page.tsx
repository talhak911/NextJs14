// import { Html } from 'next/document'
import Image from 'next/image';
import BlogCard from './components/blogCard/blogcard';
import { timeLog } from 'console';
import { title } from 'process';
export default function Home(){
 return (
  <div>
    <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400 ">The Best</span> Blogs site</h1>
    <BlogCard time="Dec 3,2023"  title="HTML" description="HTML is hypter" />
    <BlogCard time="Dec 4,2023"  title="Java" description="Java is a language" />
      </div>
  
 )
}
 
