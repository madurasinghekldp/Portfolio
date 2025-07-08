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
                <li className='text-base lg:text-lg'>Java</li>
                <li className='text-base lg:text-lg'>JavaScript</li>
                <li className='text-base lg:text-lg'>React</li>
                <li className='text-base lg:text-lg'>Next.js</li>
                <li className='text-base lg:text-lg'>SpringBoot</li>
                <li className='text-base lg:text-lg'>Angular</li>
            </ul>
        )
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className='list-disc pl-2'>
                <li className='text-base lg:text-lg'>BSc &#40;hons&#41; in Computer Science at University of Kelaniya</li>
                <li className='text-base lg:text-lg'>Advanced Level at Ananda College Colombo 10.</li>
            </ul>
        )
    },
    {
        title: "Experience",
        id: "experience",
        content: (
            <ul className='list-disc pl-2'>
                <li className='text-base lg:text-lg'>Internship at Redcode solutions</li>
                <li className='text-base lg:text-lg'>AI developer at Adventa Holdings</li>
                <li className='text-base lg:text-lg'>Internship at Adventa Holdings</li>
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
                <p className='text-base lg:text-lg text-justify'>
                    I&#146;m a dedicated developer with a BSc &#40;Hons&#41; in Computer Science from the University of 
                    Kelaniya and industry experience across multiple domains. I completed internships at 
                    Redcode Solution and Adventa Holding, where I contributed to real-world solutions in 
                    e-commerce, fishing industry management, and AI chatbots. Skilled in JavaScript, Python, 
                    TypeScript, and cloud-ready stacks, I love diving into new technologies and continuously 
                    improving my craft. Whether working in Agile teams or leading frontend efforts, I bring 
                    commitment, adaptability, and a collaborative spirit to every opportunity.
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