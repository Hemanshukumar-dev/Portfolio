
import React, { useEffect, useState, useRef } from 'react';
import SkillBar from '../ui/SkillBar';
import Tooltip from '../ui/Tooltip';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect(); // Run animation only once
        }
      },
      { threshold: 0.2 } // Trigger when 20% of the section is visible
    );

    if (sectionRef.current) {
        observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const frontendSkills = [
    { name: 'React', icon: '⚛️' },
    { name: 'Tailwind', icon: '🎨' },
    { name: 'HTML5', icon: '🌐' },
    { name: 'CSS3', icon: '💅' },
    { name: 'JavaScript', icon: '📜' }
  ];

  const backendSkills = [
    { name: 'Node.js', icon: '🟩' },
    { name: 'Express', icon: '🚂' },
    { name: 'MongoDB', icon: '🍃' },
    { name: 'Python', icon: '🐍' }
  ];

  const dsaSkills = [
    { name: 'C++', icon: '🔵' },
    { name: 'Problem Solving', icon: '🧩' },
    { name: 'Algorithms', icon: '📐' }
  ];

  return (
    <section 
        id="skills" 
        ref={sectionRef}
        className="min-h-screen flex flex-col items-center justify-center bg-zinc-900 py-20 relative overflow-hidden"
    >
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className={`text-3xl md:text-5xl font-heading text-center mb-16 transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
            MY <span className="text-accent">ARSENAL</span>
        </h2>

        <div className="space-y-12">
            {/* Frontend Skills */}
            <div 
                className={`transition-all duration-700 delay-200 transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}
            >
                <SkillBar category="FRONTEND ENGINEERING" skills={frontendSkills} />
            </div>

            {/* Backend Skills */}
            <div 
                className={`transition-all duration-700 delay-500 transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}
            >
                <SkillBar category="BACKEND ARCHITECTURE" skills={backendSkills} />
            </div>

            {/* DSA Skills with Tooltip */}
            <div 
                className={`transition-all duration-700 delay-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
            >
                <div className="relative">
                    <Tooltip 
                        content={
                            <div className="text-center">
                                <p className="font-bold text-accent mb-1">LeetCode: 500+ Solved</p>
                                <p className="text-xs text-zinc-400">Dynamic Programming, Graphs, Trees</p>
                            </div>
                        }
                    >
                         <div className="group cursor-help active:scale-[0.99] transition-transform">
                             <SkillBar category="DATA STRUCTURES & ALGORITHMS" skills={dsaSkills} />
                             
                             {/* Hint for interaction */}
                             <div className="absolute -right-2 -top-2 text-accent text-xs animate-bounce opacity-70">
                                ?
                             </div>
                         </div>
                    </Tooltip>
                </div>
            </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;
