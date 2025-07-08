'use client';
import Image from 'next/image'
import React from 'react'
import { TypeAnimation } from 'react-type-animation';


export const HeroSection = () => {
  return (
    <section>
        <div className='grid grid-cols-1 sm:grid-cols-12'>
            <div className='col-span-7 place-self-center text-center sm:text-left'>
                <h1 className='text-white text-4xl sm:text-5xl lg:text-6xl mb-4 font-extrabold'>
                    <span className='text-transparent bg-clip-text bg-gradient-to-br  from-indigo-600 to-emerald-600 via-sky-600'>Hello, I&apos;m {" "}</span>
                    <TypeAnimation
                        sequence={[
                            // Same substring at the start will only be typed out once, initially
                            'Dulan Madurasinghe',
                            1000, // wait 1s before replacing "Mice" with "Hamsters"
                            'a full-stack developer',
                            1000
                        ]}
                        wrapper="span"
                        speed={50}
                        
                        repeat={Infinity}
                        /></h1>
                <p className='text-neutral-400 text-base text-justify sm:text-lg lg:text-xl mb-4'>
                    Hi, I am Dulan Madurasinghe, a passionate software engineer focused on building scalable and 
                    user-friendly web applications. With hands-on experience in Next.js, Angular, and Spring Boot, 
                    I specialize in both frontend and backend development. From developing e-commerce platforms to 
                    AI-powered systems, I bring creativity, clean code, and strong problem-solving to every project.
                     Let us create something impactful together.
                </p>
                <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br
                 from-indigo-600 to-emerald-600 via-sky-600 hover:bg-slate-200 text-white'>Hire Me</button>
                <button className='px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-indigo-600 to-emerald-600
                 via-sky-600 hover:bg-slate-800 text-white mt-3'><span className='block bg-zinc-900 hover:bg-slate-600 rounded-full px-5 py-2'>Download CV</span></button>
            </div>
            <div className='col-span-5 place-self-center mt-4 lg:mt-0 pl-1 opacity-40'>
                <div className='rounded-full bg-zinc-800 w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] relative overflow-hidden'>
                <Image src="/images/portfolio-profile.png" 
                className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
                alt="hero image" width={500} height={500} />
                </div>
                
            </div>
        </div>
    </section>
  )
}
