import { Montserrat } from "next/font/google";
const mons = Montserrat({ weight: "500", subsets: ["latin"] });
export default function Home() {
  return (
    <div className="grid lg:grid-cols-3 gap-x-12 gap-y-4 m-12 md:grid-cols-2 sm:grid-cols-1">
      <div className="bg-gray-400 col-span-2 rounded-lg border-2 border-black text-3xl font-sans text-center h-[350px] ">
        1
      <img src="https://picsum.photos/700/900?category=nature" alt="Image 2" className="h-full w-full object-cover" />
      </div>
      <div className="bg-gray-400 row-span-2 rounded-lg border-2 border-black text-3xl font-sans text-center h-full sm:h-[350px]">
      2
      <img src="https://source.unsplash.com/1600x1000/?coding,developer
" alt="Image 2" className="h-full w-full object-cover" />
      </div>
      <div className="bg-gray-400  row-span-2 rounded-lg border-2 border-black text-3xl font-sans text-center h-full ">
      3
      <img src="https://source.unsplash.com/1200x800/?technology,computer" alt="Image 2" className="h-full w-full "
      />

        
      </div>
      <div className="bg-gray-400 rounded-lg col-span-1 border-2 border-black text-3xl font-sans text-center h-full">
      4
      <img src="https://source.unsplash.com/800x600/?computer-science
" alt="Image 2" className="h-full" />
      </div>
      <div className="bg-gray-400 rounded-lg border-2 col-span-2 border-black text-3xl font-sans text-center h-[350px]">
      5
      <img src="https://source.unsplash.com/800x600/?technology,computer" alt="Image 2" className="h-full w-full" />
      </div>
 
    </div>
  );
}