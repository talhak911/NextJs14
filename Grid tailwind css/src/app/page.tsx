import Link from "next/link";
import Grid from "./components/grid";


export default function Home() {
  return (<>
  <Link className="button-56 m-5" href={"./hero"}  >
    Next
  </Link>


    <div className="container1 p-5">
    <h1 className="text-3xl font-bold mb-4 text-white">Image Grid</h1>
    <Grid />
  </div>
  
</>
  );
}