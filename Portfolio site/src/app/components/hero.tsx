import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  return (
<div className="w-full h-screen text-center">
  <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
    <div>
<p className="uppercase text-sm tracking-widest text-gray-600">let's build something together</p>
<h1 className="py-4 text-gray-700">Hi, I'm <span className="text-[#5651e5]">Talha</span>
</h1>
<h1 className="py-2 text-gray-700">A Full Stack Web Developer</h1>
 <p className="py-4 text-gray-600 max-w-[70% m-auto]">
Versatile Full Stack Developer with expertise in front-end and back-end technologies. 
Proven track record in designing and implementing robust web applications, ensuring seamless integration for optimal user experiences.
</p>  
<div className="flex items-center justify-between max-w-[330px] m-auto py-4" >
  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
    <FaLinkedin/>
  </div>
  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
    <FaGithub/>
  </div>
  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
    <AiOutlineMail/>
  </div>
  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
    <BsFillPersonLinesFill/>
  </div>
</div> 
    </div>
  </div>
</div>
  );
};

export default Hero;
