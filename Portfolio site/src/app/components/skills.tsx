import Image from 'next/image';
import React from 'react';

import Html from '@/../public/html.png';
import Css from '@/../public/css.png';
import ReactImg from '@/../public/react.png';
import Tailwind from '@/../public/tailwind.png';
import Github from '@/../public/github1.png';
import NextJS from '@/../public/nextjs.png';

const Skills = () => {
  const skills: { [key: string]:any }[] = [
    { React: ReactImg },
    { HTML: Html },
    { Css: Css },
    { React: ReactImg },
    { Tailwind: Tailwind },
    { Github: Github },
    { NextJS: NextJS },
  ];

  return (
    <div id='skills' className='w-full lg:h-screen p-2'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Skills</p>
        <h2 className='py-4'>What I Can Do</h2>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-8'>
          {skills.map((skill, index) => (
            <div key={index} className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
              <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                  {/* Access the image using the key */}
                  <Image src={skill[Object.keys(skill)[0]]} width={64} height={64} alt='/' />
                </div>
                <div className='flex flex-col items-center justify-center'>
                  {/* Access the skill name using the key */}
                  <h3>{Object.keys(skill)[0]}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
