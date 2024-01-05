
import Image from "next/image"
export default function Grid() {
  return (
    <div className="grid lg:grid-cols-3 lg:grid-rows-3 gap-4 m-8 md:grid-cols-2 md:grid-rows-2 ">
      <div className="bg-gray-400 col-span-2 rounded-lg border-2 border-black text-3xl font-sans text-center h-[350px] grid grid-cols-4">
        <img 
          className="  h-full"
          src="https://mobisoftinfotech.com/resources/wp-content/uploads/2022/04/next-JS-framework.png"
          alt="Image 1"
        />
      </div>
      <div className="bg-gray-400 row-span-2 rounded-lg border-2 border-black text-3xl font-sans text-center h-[700px]">
        2
      </div>
      <div className="bg-gray-400 row-span-2 col-span-1 rounded-lg border-2 border-black text-3xl font-sans text-center h-[700px]">
        3
      </div>
      <div className="bg-gray-400 rounded-lg col-span-1 border-2 border-black text-3xl font-sans text-center h-[350px]">
        4
      </div>
      <div className="bg-gray-400 rounded-lg border-2 col-span-2 border-black text-3xl font-sans text-center h-[350px]">
        5
      </div>
    </div>
  );
};
