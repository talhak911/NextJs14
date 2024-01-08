"use server"
export default async function  Products (){
    fetch('https://dummyjson.com/products/1')
    .then(res => res.json())
    .then(console.log);
                
    return(<><h1>
2
    </h1>
    </>)
}