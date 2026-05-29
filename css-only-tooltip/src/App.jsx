import React from 'react';

export default function App() {
  // Navigation matrix matching the specific items and descriptions from your text specs
  const navItems = [
    { label: "Home", tooltip: "Go to homepage workspace" },
    { label: "Projects", tooltip: "Here is everything I have built" }, // Content derived directly from document spec [cite: 330]
    { label: "Blog", tooltip: "Read technical articles & publications" }
  ];

  return (
    <div className="w-full max-w-xl mx-auto space-y-12">
      
      {/* Structural Meta Info Label Header */}
      <header className="text-center space-y-2">
        <h1 className="text-2xl font-black text-slate-900 tracking-tight sm:text-3xl">
          CSS-Only Tooltip Navigation
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 max-w-sm mx-auto">
          Interactive popups driven natively by structural CSS layout flows and transitions without any execution layer scripts.
        </p>
      </header>

      {/* HORIZONTAL NAVIGATION BAR CORE CONTAINER */}
      <nav aria-label="Interactive Demo Navigation" className="bg-white border border-slate-200/80 rounded-2xl p-4 shadow-xs">
        <ul className="flex items-center justify-center gap-8 md:gap-12 font-medium text-sm text-slate-600">
          
          {navItems.map((item, idx) => (
            <li 
              key={idx} 
              className="group relative flex flex-col items-center"
            >
              {/* Anchor Target Interactive Link Component */}
              <a 
                href={`#${item.label.toLowerCase()}`}
                className="px-3 py-2 rounded-lg hover:text-indigo-600 hover:bg-slate-50/80 transition-colors duration-150 select-none"
              >
                {item.label}
              </a>

              {/* PURE CSS ABSOLUTELY POSITIONED POPUP TOOLTIP CARD BLOCK */}
              <div 
                role="tooltip"
                className="absolute bottom-full mb-2 hidden group-hover:flex flex-col items-center pointer-events-none opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 origin-bottom whitespace-nowrap bg-slate-900 text-white text-[11px] font-semibold px-3 py-1.5 rounded-xl shadow-md"
                style={{ display: 'flex' }} /* Fallback structural wrapper formatting mapping to tailwind group visibility */
              >
                {/* Tooltip Content Body Text */}
                <span>{item.tooltip}</span>
                
                {/* Geometric Downward Pointer Suffix Arrow Indicator Element */}
                <div className="w-2 h-2 bg-slate-900 rotate-45 absolute top-full -mt-1 left-1/2 -translate-x-1/2" />
              </div>

            </li>
          ))}

        </ul>
      </nav>

      {/* Component Footer Layout Block Notation */}
      <footer className="text-center text-[11px] text-slate-400 font-medium">
        <p>Project 9 Interactive UI Layout &bull; Group-Hover Scale-In Transformation Scheme [cite: 333]</p>
      </footer>

    </div>
  );
}