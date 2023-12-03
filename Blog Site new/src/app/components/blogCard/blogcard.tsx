
export default function BlogCard(props:BlogCardType){
    return (
       
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <div >
       <div className="rounded-t-lg">
          <img
             src="https://cdn.tailgrids.com/1.0/assets/images/blogs/blog-01/image-02.jpg"
             alt="image"
             className="w-full"
             />
       </div>
       <div>
          <span
             className="
             bg-grey
             rounded
             inline-block
             text-center
             py-0
             px-1
             text-xs
             leading-loose
             font-bold
             text-black
             mb-1
             "
             >
     {props.time}
          </span>
          <h3>
             <a
                href="javascript:void(0)"
                className="
                font-semibold
                text-xl
                sm:text-2xl
                lg:text-xl
                xl:text-2xl
                mb-4
                inline-block
                text-dark
                hover:text-primary
                "
                >
            {props.title}
             </a>
          </h3>
          <p className="text-base text-body-color">
             {props.description}
          </p>
       </div>
    </div>
 </div>

    )
}