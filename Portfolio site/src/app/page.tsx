import Contact from "./components/contact";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import Who from "./components/who";
import Works from "./components/skills";
import Skills from "./components/skills";

export default function Home(){
  return (
<div>
  <Navbar/>
  <Hero/>
<Who/>
<Skills/>
<Contact/>
</div>
  );
}