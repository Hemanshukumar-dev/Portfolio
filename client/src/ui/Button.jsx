
import React from 'react';

const Button = ({ children, variant = 'primary', onClick, className = '' }) => {
  const baseStyles = "px-6 py-3 font-bold uppercase transition-all duration-200 border-2 active:scale-95";
  
  const variants = {
    primary: "bg-white text-black border-black hover:bg-[#4ade80] hover:border-black hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]",
    secondary: "bg-transparent text-white border-white hover:bg-white hover:text-black hover:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]"
  };

  return (
    <button 
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      style={{ fontFamily: '"Press Start 2P", cursive' }} // Ensure pixel font if loaded, else fallback
    >
      {children}
    </button>
  );
};

export default Button;
