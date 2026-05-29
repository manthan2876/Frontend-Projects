import React from 'react';

export default function App() {
  // Chronological updates directly taken from your document logs
  const logs = [
    { date: "September 3, 2024", title: "Announcing Projects on Frontend Roadmap" },
    { date: "August 28, 2024", title: "Build your learning habits with learning streaks" },
    { date: "August 25, 2024", title: "Git and GitHub Roadmap" },
    { date: "August 22, 2024", title: "Submit your project solution and get feedback" },
    { date: "August 15, 2024", title: "Backend Project Ideas" },
    { date: "August 10, 2024", title: "Redis roadmap" },
    { date: "August 1, 2024", title: "Changelog page to help you stay in the loop" }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      
      {/* Component Header Block */}
      <header className="text-center mb-16 space-y-3">
        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900">
          Changelog
        </h1>
        <p className="text-slate-500 max-w-md mx-auto text-sm sm:text-base">
          Here's everything we have shipped in the past few days.
        </p>
      </header>

      {/* TIMELINE TRACK COMPONENT */}
      <div className="relative border-l-2 border-slate-200 md:border-l-0 md:before:absolute md:before:left-1/2 md:before:top-0 md:before:h-full md:before:w-0.5 md:before:bg-slate-200 md:before:-translate-x-1/2 space-y-12 pb-8">
        
        {logs.map((item, index) => (
          <div key={index} className="relative flex flex-col md:flex-row md:items-center group">
            
            {/* 1. Timeline Circle Node Indicator */}
            <div className="absolute -left-[7px] md:left-1/2 top-1.5 md:top-1/2 w-3 h-3 bg-slate-900 border-2 border-white rounded-full z-10 md:-translate-x-1/2 md:-translate-y-1/2 shadow-sm group-hover:scale-125 transition-transform duration-150" />

            {/* 2. Left Column Side (Displays Date on Desktop, Hidden on Mobile layout side) */}
            <div className="pl-6 md:pl-0 md:w-1/2 md:text-right md:pr-12 text-xs sm:text-sm font-medium text-slate-400">
              <time dateTime={item.date.replace(/,/g, '')}>{item.date}</time>
            </div>

            {/* 3. Right Column Side (Displays Content Box) */}
            <div className="pl-6 md:pl-12 md:w-1/2 mt-1 md:mt-0">
              <h2 className="text-sm sm:text-base font-semibold text-slate-800 group-hover:text-indigo-600 transition-colors">
                {item.title}
              </h2>
            </div>

          </div>
        ))}

      </div>

      {/* Navigation CTA Button Container */}
      <footer className="text-center mt-12 pt-4">
        <button 
          onClick={() => alert("Redirecting to full historical log architecture indices.")}
          className="inline-flex items-center justify-center bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs sm:text-sm px-6 py-3 rounded-xl transition-all shadow-sm"
        >
          Visit Complete Changelog
        </button>
      </footer>

    </div>
  );
}