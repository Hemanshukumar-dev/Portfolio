
import React from 'react';
import Button from '../ui/Button';

const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="h-screen flex flex-col items-center justify-center bg-background text-center relative overflow-hidden">
        {/* Optional: Background grid or pixel pattern can go here */}
        
        <div className="z-10 flex flex-col items-center gap-8 animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading text-white tracking-widest leading-tight">
                WELCOME TO <br/>
                <span className="text-accent">MY WORLD</span>
            </h1>
            
            <p className="text-zinc-400 font-body text-sm md:text-base max-w-lg">
                PRESS START TO BEGIN THE JOURNEY
            </p>

            <div className="flex gap-6 mt-8">
                <Button 
                    variant="primary" 
                    onClick={() => scrollToSection('about')}
                    className="animate-pulse-slow"
                >
                    START
                </Button>
                
                <Button 
                    variant="secondary" 
                    onClick={() => scrollToSection('projects')}
                >
                    LOAD MORE
                </Button>
            </div>
        </div>
        
        {/* Scroll Indicator (Optional) */}
        <div className="absolute bottom-10 animate-bounce">
            <span className="text-zinc-500 text-2xl">↓</span>
        </div>
    </section>
  );
};

export default Hero;
