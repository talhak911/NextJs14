import Link from "next/link";
import Grid from "./components/grid";


export default function Home() {
  return (<>
    <div className="container1 p-5">
    <h1 className="text-3xl font-bold mb-4 text-white">Image Grid</h1>
    <Grid />
  </div>
  <Link href={"./."}/>
<h1>main</h1>
</>
  );
}