
import React from 'react';

const Avatar = () => {
  return (
    <div className="relative group w-48 h-48 mx-auto">
      {/* Glow Effect */}
      <div className="absolute inset-0 bg-[#4ade80] rounded-full blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
      
      {/* Avatar Image container */}
      <div className="relative w-full h-full border-4 border-white overflow-hidden bg-zinc-800 transition-transform duration-300 group-hover:-translate-y-1">
         {/* Placeholder for now - eventually will differ to local asset */}
        <div className="w-full h-full flex flex-col items-center justify-center bg-zinc-900 text-green-400 font-pixel text-center p-2">
            <span className="text-4xl mb-2">👾</span>
            <span className="text-xs">PLAYER 1</span>
        </div>
        
        {/* Pickaxe Reveal */}
        <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform rotate-12">
            <span className="text-2xl">⛏️</span> 
        </div>
      </div>
    </div>
  );
};

export default Avatar;
