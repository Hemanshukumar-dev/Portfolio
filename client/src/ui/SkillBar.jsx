
import React from 'react';
import Tooltip from './Tooltip'; // We will create this next

const SkillBar = ({ category, skills }) => {
  return (
    <div className="mb-6">
      <h3 className="text-white mb-2 font-bold uppercase tracking-wider text-sm">{category}</h3>
      <div className="w-full h-12 bg-zinc-900 border-2 border-zinc-700 relative flex items-center px-2 shadow-inner">
        {/* Skills Container */}
        <div className="flex space-x-4 overflow-x-auto no-scrollbar items-center h-full pr-12">
            {skills.map((skill, index) => (
                <div key={index} className="group relative cursor-crosshair">
                   <span className="text-2xl filter grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110 block">
                     {skill.icon}
                   </span>
                   {/* Optional: Add basic title tooltip on hover if needed directly here, or rely on parent Tooltip logic */}
                </div>
            ))}
        </div>
        
        {/* Empty space filler pattern to show "learning in progress" */}
        <div className="absolute right-0 top-0 bottom-0 w-12 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjMjcyNzJhIi8+CjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiMzZjNmNGYiLz4KPC9zdmc+')] opacity-50 border-l-2 border-zinc-800"></div>
      </div>
    </div>
  );
};

export default SkillBar;
