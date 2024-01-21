export default function Who(){
    return(
<div className="w-full md:h-screen p-2 flex items-center py-16">
  <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8 ">
    <div className="col-span-2">
  <p className="uppercase text-xl tracking-widest text-[#5651e5]">About</p>
  <h2 className="py-4">Who I am</h2>
   <p>Welcome to my portfolio! I'm Talha, a Full Stack Web Developer specializing in React, Next.js, Tailwind CSS, and more.</p> 
    <h2 className="py-2">Tech Stack</h2>
    <ul className="py-2 text-gray-600">
        <li>
       <h3 className="float-left px-2"> Frontend: </h3> <p className=""> React.js for dynamic user interfaces, Next.js for performance, and Tailwind CSS for styling.</p>
        </li>
        <li>
       <h3 className="float-left px-2"> Backend: </h3><p className=""> Proficient in Node.js, Express, and various backend technologies.</p>
        </li>
        <li>
       <h3 className="float-left px-2"> Backend: </h3><p className="">Skilled in MySQL, PostgreSQL, MongoDB, and database optimization.</p>
        </li>
    </ul>
   
    </div>
    <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300 ">
        <img className="rounded-xl" src='https://scontent.flyp3-1.fna.fbcdn.net/v/t1.6435-9/62239419_2213391978952728_8472463164825403392_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=c2f564&_nc_ohc=iuS46k-CCvAAX9h8G4L&_nc_ht=scontent.flyp3-1.fna&oh=00_AfDnO1CrFjUy0czCpui2ZONxPlDxmRSn1Tks6038gqc8YQ&oe=65D4A906'/>
    </div>
  </div>
</div>
    )
}