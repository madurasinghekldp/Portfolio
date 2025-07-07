"use client";
import React , { useState } from 'react';
import Image from 'next/image';
import TabButton from './TabButton';

const TAB_CONTENT = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className='list-disc pl-2'>
                <li className='text-base lg:text-lg'>HTML</li>
                <li className='text-base lg:text-lg'>CSS</li>
                <li className='text-base lg:text-lg'>JavaScript</li>
                <li className='text-base lg:text-lg'>React</li>
                <li className='text-base lg:text-lg'>Node.js</li>
            </ul>
        )
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className='list-disc pl-2'>
                <li className='text-base lg:text-lg'>Bachelor of Science in Computer Science</li>
                <li className='text-base lg:text-lg'>Master of Science in Software Engineering</li>
            </ul>
        )
    },
    {
        title: "Experience",
        id: "experience",
        content: (
            <ul className='list-disc pl-2'>
                <li className='text-base lg:text-lg'>Software Engineer at XYZ Company</li>
                <li className='text-base lg:text-lg'>Frontend Developer at ABC Company</li>
            </ul>
        )
    }
]

const AboutSection = () => {
    const [tab, setTab] = useState("skills");

    const handleTabChange = (id:string)=>{
        setTab(id);
    }
  return (
    <section className='text-white' id='about'>
        <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16'>
            <Image src="/images/about-section-image.png" width={500} height={500} alt="about-image"/>
            <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
                <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
                <p className='text-base lg:text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, fuga ea 
                    soluta reiciendis amet alias, sint repudiandae, suscipit eos minima similique 
                    accusamus earum assumenda incidunt fugiat nulla ipsam! Id, eaque.
                </p>
                <div className='flex flex-row mt-8'>
                    <TabButton id="skills" selectTab={()=>handleTabChange("skills")} active={tab=="skills"} color={"border-indigo-600"}>
                        Skills
                    </TabButton>
                    <TabButton id="education" selectTab={()=>handleTabChange("education")} active={tab=="education"} color={"border-sky-600"}>
                        Education
                    </TabButton>
                    <TabButton id="experience" selectTab={handleTabChange} active={tab=="experience"} color={"border-emerald-600"}>
                        Experience
                    </TabButton>
                </div>
                <div className="mt-8">
                    {
                        TAB_CONTENT.find((item)=>item.id==tab)?.content
                    }
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutSection