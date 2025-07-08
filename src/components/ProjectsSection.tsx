"use client";
import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import ProjectTag from './ProjectTag';

const projectsData = [
    {
        id:1,
        title: "Employee Management App",
        description: "Company can register here and can maintain employee details. Admin of the company can check performance of the employee. Developed using Angular and Spring Boot.",
        imgUrl: "/images/projects/Employee-management-app.png",
        tag: ["All","Web"],
        gitUrl:"https://github.com/madurasinghekldp/Employee-System-Frontend",
        previewUrl:"https://empgo-ems.web.app"
    },
    {
        id:2,
        title: "Jewelry App",
        description: "A jewelry selling platform for local users. User can register and make orders of jewelries and gems. On going project using Next.js and Nest.js.",
        imgUrl: "/images/projects/jewelry-app.png",
        tag: ["All","Web"],
        gitUrl:"https://github.com/madurasinghekldp/jewelry-front",
        previewUrl:"https://jewelrystone.vercel.app"
    }
]

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");

  const handleTagClick = (name:string) => {
    setTag(name);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  return (
    <section id="projects">
    <h2 className='text-center text-4xl font-bold text-white mt-4 mb-4'>My Projects</h2>
    <div className='text-white flex flex-row justify-center items-center gap-2 py-6'>
      <ProjectTag name="All" onClick={handleTagClick} isSelected={tag === "All"}/>
      <ProjectTag name="Web" onClick={handleTagClick} isSelected={tag === "Web"}/>
      <ProjectTag name="Mobile" onClick={handleTagClick} isSelected={tag === "Mobile"}/>
    </div>
    <div className="grid md:grid-cols-3 gap-8 md:gap-12">{filteredProjects.map((project)=><ProjectCard 
        key={project.id} 
        title={project.title} 
        imgUrl={project.imgUrl} 
        description={project.description}
        gitUrl={project.gitUrl}
        previewUrl={project.previewUrl}/>)}
    </div>
    </section>
  )
}

export default ProjectsSection