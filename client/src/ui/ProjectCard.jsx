
import React from 'react';

const ProjectCard = ({ title, techStack, description, icon, links }) => {
  return (
    <div className="bg-zinc-900 border-2 border-zinc-700 p-4 relative group hover:scale-[1.02] hover:border-white transition-all duration-300">
      <div className="absolute top-2 right-2 text-3xl opacity-50 group-hover:opacity-100 group-hover:rotate-12 transition-all">
        {icon}
      </div>
      
      <h3 className="text-xl font-bold text-white mb-2 uppercase font-pixel tracking-wide">{title}</h3>
      <p className="text-zinc-400 text-sm mb-4 min-h-[40px]">{description}</p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {techStack.map((tech, i) => (
            <span key={i} className="text-xs bg-zinc-800 text-[#4ade80] px-2 py-1 border border-zinc-600">
                {tech}
            </span>
        ))}
      </div>

      <div className="flex gap-4 mt-auto">
        {links.github && (
            <a href={links.github} target="_blank" rel="noopener noreferrer" className="text-sm text-white hover:text-[#4ade80] underline decoration-dotted">
                CODE
            </a>
        )}
        {links.demo && (
            <a href={links.demo} target="_blank" rel="noopener noreferrer" className="text-sm text-white hover:text-[#4ade80] underline decoration-dotted">
                DEMO
            </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
