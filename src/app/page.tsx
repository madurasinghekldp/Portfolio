import Image from "next/image";
import { HeroSection } from "../components/HeroSection";
import Navbar from "../components/Navbar";
import AboutSection from "../components/AboutSection";
import ProjectsSection from "../components/ProjectsSection";
import EmailSection from "@/components/EmailSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-zinc-900 ">
      <Navbar/>
      <div className="container mt-24 mx-auto py-4 px-12"> 
        <HeroSection/>
        <AboutSection/>
        <ProjectsSection/>
        <EmailSection/>
      </div>
    </main>
  );
}
