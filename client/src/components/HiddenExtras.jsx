
import React from 'react';

const HiddenExtras = () => {
  const certificates = [
    { title: "Full Stack Development", issuer: "Udemy", date: "2024" },
    { title: "React Native Masterclass", issuer: "Coursera", date: "2023" },
    { title: "AWS Cloud Practitioner", issuer: "Amazon Web Services", date: "2023" }
  ];

  const activities = [
    { title: "Hackathon Winner", org: "Smart India Hackathon", desc: "Built a disaster management app." },
    { title: "Open Source Contributor", org: "GitHub", desc: "Contributed to various react libraries." },
    { title: "Tech Lead", org: "College Coding Club", desc: "Organized workshops and events." }
  ];

  return (
    <section id="hidden-extras" className="py-20 bg-zinc-900/50 min-h-[50vh] flex flex-col justify-center">
      <div className="container mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Certificates Column */}
            <div className="animate-fade-in-up">
                <h3 className="text-2xl font-heading text-white mb-8 border-l-4 border-accent pl-4">
                    CERTIFICATES
                </h3>
                <div className="space-y-6">
                    {certificates.map((cert, index) => (
                        <div key={index} className="bg-zinc-800 p-6 border border-zinc-700 hover:border-accent transition-colors group">
                             <h4 className="text-xl font-bold text-white group-hover:text-accent transition-colors mb-1">
                                {cert.title}
                             </h4>
                             <div className="flex justify-between text-sm text-zinc-400 font-mono">
                                <span>{cert.issuer}</span>
                                <span>{cert.date}</span>
                             </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Co-Curriculars Column */}
            <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <h3 className="text-2xl font-heading text-white mb-8 border-l-4 border-accent pl-4">
                    CO-CURRICULAR
                </h3>
                <div className="space-y-6">
                    {activities.map((act, index) => (
                        <div key={index} className="bg-zinc-800 p-6 border border-zinc-700 hover:border-white transition-colors group">
                             <h4 className="text-xl font-bold text-white mb-2">
                                {act.title}
                             </h4>
                             <p className="text-zinc-400 text-sm mb-2">{act.desc}</p>
                             <span className="text-xs text-accent uppercase tracking-wider font-bold">
                                {act.org}
                             </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>

      </div>
    </section>
  );
};

export default HiddenExtras;
