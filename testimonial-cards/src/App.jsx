import React from 'react';

export default function App() {
  const testimonials = [
    {
      id: 1,
      name: "Artem Jones",
      role: "Junior Frontend Developer",
      quote: "Since starting my career in 2021, I have only followed one resource, roadmap.sh, it truly helped me go from 0 to having a job and changing the financial trajectory of my family.",
      highlighted: true
    },
    {
      id: 2,
      name: "Artem Jones",
      role: "Junior Frontend Developer",
      quote: "I have been solving all the project ideas on roadmap.sh and I am surprised how far I have come from where I started. Highly recommended!",
      highlighted: false
    },
    {
      id: 3,
      name: "Jackie Mackle",
      role: "Engineering Manager",
      quote: "I find myself recommending roadmap.sh to all the internees or junior developers. It's a great way to skill up and grow in your career.",
      highlighted: false
    },
    {
      id: 4,
      name: "Artem Jones",
      role: "Junior Frontend Developer",
      quote: "roadmap.sh is an incredible resource. I was fortunate to discover it during my university days in 2018. Back then, it was just a single repository with three images. It's amazing to see how much impact it has had on millions of lives since then.",
      highlighted: true
    }
  ];

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
      <div className="max-w-6xl mx-auto w-full space-y-12">
        
        {/* Section Heading Header Section */}
        <header className="text-center space-y-3">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            Community Testimonials
          </h1>
          <p className="text-slate-500 text-sm sm:text-base max-w-xl mx-auto">
            See how developers around the globe are transforming their careers using open-source roadmaps.
          </p>
        </header>

        {/* Responsive Layout Grid Matrix Box */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          {testimonials.map((item) => (
            <div 
              key={item.id} 
              className={`p-6 sm:p-8 rounded-2xl border transition-all shadow-xs flex flex-col justify-between space-y-6 ${
                item.highlighted 
                  ? 'bg-slate-900 border-slate-800 text-white md:scale-[1.02]' 
                  : 'bg-white border-slate-200 text-slate-800'
              }`}
            >
              <blockquote className="text-sm sm:text-base leading-relaxed font-medium">
                "{item.quote}"
              </blockquote>
              
              <div className="flex items-center gap-3 pt-2">
                {/* Fallback geometric profile avatar element */}
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-xs shrink-0 select-none ${
                  item.highlighted ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-700'
                }`}>
                  {item.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <cite className="not-italic block text-sm font-bold tracking-tight">
                    {item.name}
                  </cite>
                  <span className={`text-xs block font-medium ${item.highlighted ? 'text-slate-400' : 'text-slate-500'}`}>
                    {item.role}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}