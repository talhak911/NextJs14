import Login from "./components/login";

export default function Home(){
  try{
    return (
      <Login/>
    )
  }
  catch(error){
    console.log("errors are ",error)
  }
}