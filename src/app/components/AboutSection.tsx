"use client";
import React , {useTransition, useState } from 'react';
import Image from 'next/image';
import TabButton from './TabButton';

const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition ] = useTransition();

    const handleTabChange = (id:any)=>{
        startTransition(()=>{
            setTab(id);
        })
    }
  return (
    <section className='text-white'>
        <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16'>
            <Image src="/images/about-section-image.png" width={500} height={500} alt="about-image"/>
            <div>
                <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
                <p className='text-base lg:text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, fuga ea 
                    soluta reiciendis amet alias, sint repudiandae, suscipit eos minima similique 
                    accusamus earum assumenda incidunt fugiat nulla ipsam! Id, eaque.
                </p>
                <div className='flex flex-row mt-8'>
                    <TabButton selectTab={()=>handleTabChange("skills")} active={tab=="skills"} color={"border-indigo-600"}>
                        Skills
                    </TabButton>
                    <TabButton selectTab={()=>handleTabChange("education")} active={tab=="education"} color={"border-sky-600"}>
                        Education
                    </TabButton>
                    <TabButton selectTab={()=>handleTabChange("experience")} active={tab=="experience"} color={"border-emerald-600"}>
                        Experience
                    </TabButton>
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutSection