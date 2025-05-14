"use client";
import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import ProjectTag from './ProjectTag';

const projectsData = [
    {
        id:1,
        title: "E-commerce Website",
        description: "Description for project 1",
        imgUrl: "/images/projects/e-commerce.png",
        tag: ["All","Web"],
        gitUrl:"/",
        previewUrl:"/"
    },
    {
        id:2,
        title: "Fishing App",
        description: "Description for project 2",
        imgUrl: "/images/projects/fishing.png",
        tag: ["All","Mobile"],
        gitUrl:"/",
        previewUrl:"/"
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
    <>
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
    </>
  )
}

export default ProjectsSection