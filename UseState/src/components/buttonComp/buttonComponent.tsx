import {useState} from 'react'



export default function ButtonComp(props:buttonType){
    
  
    return(
        <>
        
<button onClick={props.onclickHandler} className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
 {props.title}
</button>
</>
)}