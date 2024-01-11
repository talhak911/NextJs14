
import axios from "axios"
export default async function SingleProduct(params:{params:{id:string}}){
const getProduct=async()=>{
  const product = await axios.get(`https://dummyjson.com/products/${params.params.id}`)
  

  return product.data
}
 const finalPro =await getProduct()
  return(<>
  <div className="relative mb-6 lg:mb-10 lg:h-2/4 h-[400px] w-[500px] ">
                            <img src={finalPro.thumbnail} alt=""
                                className="object-cover w-full lg:h-full "/>
                        </div>
<div className="flex-wrap hidden md:flex ">
  {finalPro.images.map((item:any)=>{
    return(
    <div className="w-1/2 p-2 sm:w-1/4">
                                <a href="#" className="block h-[150px] border border-blue-300 hover:border-blue-300">
                                    <img src={`${item}`} alt=""
                                        className="object-cover h-full w-full lg:h-20"/>
                                </a>
                            </div>
    )
  })}
                          
                        </div>
  
  </>)
}