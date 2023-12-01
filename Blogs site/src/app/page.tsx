// import { Html } from 'next/document'

import Image from "next/image";
import Link from "next/link";

// import Image from 'next/image';
interface Iblog {
  id: number;
  title: string;
  desc: string;
}
const blogPosts: Iblog[] = [
  { id: 0, title: "Learn HTML", desc: "HTML (HyperText Markup Language) is the most basic building block of the Web. It defines the meaning and structure of web content. Other technologies besides HTML are generally used to describe a web page's appearance/presentation (CSS) or functionality/behavior (JavaScript)" },
  { id: 1, title: "Learn CSS", desc: "CSS, or Cascading Style Sheets, is a fundamental programming language for web design, used to stylize the presentation of HTML-based pages. By using CSS, website designers can build multiple pages with the same formatting" },
  { id: 2, title: "Learn Javascript", desc: "JavaScript (JS) is a cross-platform, object-oriented programming language used by developers to make web pages interactive. It allows developers to create dynamically updating content, use animations, pop-up menus, clickable buttons, control multimedia, etc." }
];

export default function Home() {
  return(
  <section className="blogBody">
 { blogPosts.map((item)=> 
  <h2 className="blogList">
    
    <Link href={`/posts/${item.id}`}>
      <Image src={`/img/${item.id}.jpg`} alt="Image " width={260} height={170}/><br />
    {item.title} <br/>
    </Link>
  </h2>
  )}
  </section>
  );
}

