import React, { useState } from 'react';

export default function App() {
  // Track the active tab item index state (0 maps to First Tab enabled by default)
  const [activeTab, setActiveTab] = useState(0);

  // Structural tab configuration contents array[cite: 1]
  const tabsData = [
    { label: "First Tab", content: "First Tab content to be displayed here. Add some dummy content or just add a simple text showing the tab." },
    { label: "Second Tab", content: "Second Tab content populated seamlessly inside the structural layout view." },
    { label: "Third Tab", content: "Third Tab content panel surfaced dynamically upon registering active click events." },
    { label: "Fourth Tab", content: "Fourth Tab content demonstrating clean single-page content switching without heavy page refreshes." }
  ];

  return (
    <div className="w-full max-w-2xl bg-white border border-slate-200/80 rounded-2xl shadow-sm overflow-hidden p-6 sm:p-8 space-y-6 animate-fadeIn">
      
      {/* Component Structural Overview Headers */}
      <header className="space-y-1">
        <h1 className="text-xl font-extrabold tracking-tight text-slate-900 sm:text-2xl">
          Tabs Functionality Component
        </h1>
        <p className="text-xs sm:text-sm text-slate-400 font-medium">
          Basic DOM manipulation alternative tracking within unified declarative state architectures.
        </p>
      </header>

      {/* HORIZONTAL TAB SELECTOR TRACK CONTAINER ROW */}
      <div 
        role="tablist" 
        aria-label="Content Navigation Selection"
        className="flex items-center overflow-x-auto border-b border-slate-100 pb-px gap-1 no-scrollbar"
      >
        {tabsData.map((tab, idx) => {
          const isSelected = activeTab === idx;
          return (
            <button
              key={idx}
              role="tab"
              id={`tab-control-${idx}`}
              aria-selected={isSelected}
              aria-controls={`tab-panel-${idx}`}
              tabIndex={isSelected ? 0 : -1}
              onClick={() => setActiveTab(idx)}
              className={`px-4 py-2.5 text-xs sm:text-sm font-semibold whitespace-nowrap border-b-2 transition-all focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-t-xl cursor-pointer ${
                isSelected
                  ? 'border-indigo-600 text-indigo-600 bg-indigo-50/40'
                  : 'border-transparent text-slate-500 hover:text-slate-800 hover:bg-slate-50'
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* ACTIVE PANELS CARD CONTAINER CANVAS */}
      <main className="min-h-36 bg-slate-50/50 border border-slate-100 rounded-xl p-5 flex items-center">
        {tabsData.map((tab, idx) => (
          <div
            key={idx}
            role="tabpanel"
            id={`tab-panel-${idx}`}
            aria-labelledby={`tab-control-${idx}`}
            hidden={activeTab !== idx} // Dynamically hide content sections of inactive tabs[cite: 1]
            className="w-full text-sm leading-relaxed text-slate-600 animate-fadeIn"
          >
            {tab.content}
          </div>
        ))}
      </main>

      {/* Component Footer Layer Block Notation */}
      <footer className="text-center text-[11px] text-slate-400 font-medium pt-2">
        <p>Project 10 Tab Matrix &bull; Interactive DOM Mapping Layer Dashboard[cite: 1]</p>
      </footer>

    </div>
  );
}