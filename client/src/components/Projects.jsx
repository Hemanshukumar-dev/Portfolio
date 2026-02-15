
import React from 'react';
import ProjectCard from '../ui/ProjectCard';
import Button from '../ui/Button';

const Projects = () => {
  const projects = [
    {
      title: "CloudVault",
      description: "Secure file storage system with role-based access control and encryption.",
      techStack: ["React", "Node.js", "AWS S3", "MongoDB"],
      icon: "☁️",
      links: { github: "https://github.com/Hemanshukumar-dev", demo: "#" }
    },
    {
      title: "PixelArt Generator",
      description: "Browser-based 8-bit art creator allowing users to export designs as PNGs.",
      techStack: ["JavaScript", "HTML5 Canvas", "CSS3"],
      icon: "🎨",
      links: { github: "https://github.com/Hemanshukumar-dev", demo: "#" }
    },
    {
      title: "AI Task Manager",
      description: "Smart task indexing application using OpenAI API to categorize daily todos.",
      techStack: ["Python", "Flask", "OpenAI API", "React"],
      icon: "🤖",
      links: { github: "https://github.com/Hemanshukumar-dev", demo: "#" }
    }
  ];

  return (
    <section id="projects" className="min-h-screen py-20 bg-background flex flex-col items-center justify-center">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-heading text-center mb-16 text-white">
            SELECTED <span className="text-accent">WORKS</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {projects.map((project, index) => (
                <ProjectCard key={index} {...project} />
            ))}
        </div>

        <div className="flex justify-center">
            <a href="https://github.com/Hemanshukumar-dev" target="_blank" rel="noopener noreferrer">
                <Button variant="secondary">
                    VIEW MORE ON GITHUB
                </Button>
            </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
