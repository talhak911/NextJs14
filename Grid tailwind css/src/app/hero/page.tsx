import Image from "next/image"
import myimg from "./../../../public/img1.jpg"
export default function Hero(){
    return(
        <div className="h-screen grid md:grid-cols-3  items-center  ">
            <div className="md:col-span-2  bg-yellow-300 mx-5">
<h1 className="text-5xl mx-5">Lorem ipsum dolor sit amet consectetur adipisicing eli.</h1>
<p className="p-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem suscipit obcaecati sit et architecto explicabo, cumque, quo quia placeat laudantium alias veniam omnis libero qui impe</p>
            </div>
            <div className="relative ">
    <Image src={myimg} alt="img " className="h-[250px] w-full object-cover"/>
    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-center">
        <div className="border h-5 bg-slate-600"><h1 className="text-white">My image</h1></div>
    </div>
</div>

        </div>
    )
}