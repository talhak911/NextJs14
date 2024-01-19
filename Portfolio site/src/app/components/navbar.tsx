import Image from "next/image";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"
import Link from "next/link";
const Navbar = () => (
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
                <div className="md:hidden">
                    <AiOutlineMenu size={25} />
                </div>
            </div>
        </div>

        <div className="fixed left-0 top-0 w-full h-screen bg-black/70">
            <div className="fixed left-0 top-0 w-[75%] sm:w-[60%] md:[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500">
                <div>
                    <div className="flex items-center justify-between w-full ">
                        <h2>Talha</h2>
                        <div className="rounded-full shadow-lg shadow-gray-300 p-3 cursor-pointer">
                            <AiOutlineClose />
                        </div>
                    </div>
                    <div className="border-b border-gray-300 my-4"> 
                        <p className="w-[85%] md:w-[90%] py-4">Let's build something legendary together </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Navbar;