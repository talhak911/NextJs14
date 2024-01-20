import React, { Suspense } from "react";
const Hero = () => {
  return (
<div className="w-full h-screen text-center">
  <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
    <div>
<p className="uppercase text-sm tracking-widest text-gray-600">let's build something together</p>
<h1 className="py-4 text-gray-700">Hi, I'm <span className="text-[#5651e5]">Talha</span>
</h1>
<h1 className="py-2 text-gray-700">A Full Stack Web Developer</h1>
 <p className="">
Versatile Full Stack Developer with expertise in front-end and back-end technologies. 
Proven track record in designing and implementing robust web applications, ensuring seamless integration for optimal user experiences.
</p>   
    </div>
  </div>
</div>
  );
};

export default Hero;
