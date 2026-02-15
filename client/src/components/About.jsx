
import React from 'react';
import Avatar from '../ui/Avatar';
import Button from '../ui/Button';

const About = () => {
  const scrollToHidden = () => {
    const element = document.getElementById('hidden-extras');
     if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="min-h-screen flex items-center justify-center bg-background py-20">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12 md:gap-20">
        
        {/* Left Column: Text */}
        <div className="flex-1 text-center md:text-left order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-heading text-accent mb-6 leading-tight">
                ABOUT <span className="text-white">ME</span>
            </h2>
            
            <div className="space-y-4 text-zinc-300 font-body text-base md:text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
                <p>
                    I am a Full Stack Developer with a passion for building retro-inspired web experiences.
                    I love turning complex problems into simple, beautiful, and intuitive designs.
                </p>
                <p>
                    When I'm not coding, I'm probably exploring new tech stacks, gaming, or designing pixel art.
                </p>
            </div>

            <div className="mt-8">
                <Button 
                    variant="secondary" 
                    onClick={scrollToHidden}
                    className="text-sm"
                >
                    LEARN MORE ↓
                </Button>
            </div>
        </div>

        {/* Right Column: Avatar */}
        <div className="flex-1 flex justify-center order-1 md:order-2">
            <Avatar />
        </div>
        
      </div>
    </section>
  );
};

export default About;
