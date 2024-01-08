

export default function Grid() {
  return (
  
    <div className="bg-myred grid grid-cols-1 md:grid-cols-3 md:grid-rows-3 gap-4 m-8 sm:grid-cols-1 md:px-[250px]">
      <div className="sm:col-span-1 md:col-span-2 h-[150px]">
        <img
          className="h-full w-full object-cover"
          src="https://mobisoftinfotech.com/resources/wp-content/uploads/2022/04/next-JS-framework.png"
          alt="Image 1"
        />
        1
      </div>
      <div className="sm:col-span-1 md:row-span-2 h-[320px]">
        <img
          className="h-full w-full object-cover"
          src="https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?cs=srgb&dl=pexels-junior-teixeira-2047905.jpg&fm=jpg"
          alt="Image 2"
        />
        2
      </div>
      <div className="sm:col-span-1 md:row-span-2 h-[320px]">
        <img
          className="h-full w-full object-cover"
          src="https://cdn.thenewstack.io/media/2023/12/4e01e7fa-pexels-sanket-mishra-16380906-1024x683.jpg"
          alt="Image 3"
        />
        3
      </div>
      <div className="sm:col-span-1  h-[150px]">
        <img
          className="h-full w-full object-cover"
          src="https://www.syncfusion.com/blogs/wp-content/uploads/2022/09/Optimize-NextJS-App-bundle-performance.png"
          alt="Image 4"
        />
        4
      </div>
      <div className="sm:col-span-1 md:col-span-2 h-[150px]">
        <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/1*GgubNcjyyNyfTuOS_ub1Rw.png"
          alt="Image 5"
        />
        5
      </div>
    </div>
    );
}
