import BlogsList from "./components/blogsList";


export default function Home(){
  return(
    <main className="flex flex-col items-center justify-center">
      <h1>Hello blogs site</h1>
  
    <BlogsList/>
    </main>
  )
}