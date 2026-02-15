
import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="min-h-[60vh] flex flex-col items-center justify-center bg-zinc-900 border-t border-zinc-800">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-heading text-white mb-6">
            GET IN <span className="text-accent">TOUCH</span>
        </h2>
        
        <p className="text-zinc-400 text-lg mb-12 max-w-lg mx-auto leading-relaxed">
            I'm currently open for new opportunities. Whether you have a question or just want to say hi, my inbox is always open!
        </p>

        <div className="flex justify-center gap-12">
            {/* Email */}
            <a 
                href="mailto:hemanshu.kumar@example.com" 
                className="group flex flex-col items-center gap-2 hover:-translate-y-2 transition-transform duration-300"
            >
                <div className="w-16 h-16 bg-zinc-800 rounded-full flex items-center justify-center border border-zinc-700 group-hover:border-accent group-hover:shadow-[0_0_15px_rgba(74,222,128,0.5)] transition-all">
                    <span className="text-3xl">📧</span>
                </div>
                <span className="text-sm font-heading text-zinc-500 group-hover:text-accent mt-2">EMAIL</span>
            </a>

            {/* GitHub */}
            <a 
                href="https://github.com/Hemanshukumar-dev" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-2 hover:-translate-y-2 transition-transform duration-300"
            >
                <div className="w-16 h-16 bg-zinc-800 rounded-full flex items-center justify-center border border-zinc-700 group-hover:border-white group-hover:shadow-[0_0_15px_rgba(255,255,255,0.5)] transition-all">
                    <span className="text-3xl">💻</span>
                </div>
                <span className="text-sm font-heading text-zinc-500 group-hover:text-white mt-2">GITHUB</span>
            </a>

            {/* LinkedIn */}
            <a 
                href="https://linkedin.com/in/hemanshukumar" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-2 hover:-translate-y-2 transition-transform duration-300"
            >
                <div className="w-16 h-16 bg-zinc-800 rounded-full flex items-center justify-center border border-zinc-700 group-hover:border-blue-400 group-hover:shadow-[0_0_15px_rgba(96,165,250,0.5)] transition-all">
                    <span className="text-3xl">👔</span>
                </div>
                <span className="text-sm font-heading text-zinc-500 group-hover:text-blue-400 mt-2">LINKEDIN</span>
            </a>
        </div>

        <div className="mt-24 text-zinc-600 text-xs font-mono">
            <p>DESIGNED & BUILT BY HEMANS HU KUMAR</p>
            <p className="mt-2 text-[10px]">© 2026</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
