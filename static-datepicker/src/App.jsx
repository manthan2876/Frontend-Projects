import React from 'react';

export default function App() {
  const daysOfWeek = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  
  // Custom matrix padding for December 2022 calendar grid which starts on a Thursday (index 4)
  const calendarDays = [
    null, null, null, null, 1, 2, 3,
    4, 5, 6, 7, 8, 9, 10,
    11, 12, 13, 14, 15, 16, 17,
    18, 19, 20, 21, 22, 23, 24,
    25, 26, 27, 28, 29, 30, 31
  ];

  return (
    <div className="w-full max-w-sm mx-auto space-y-4">
      
      {/* Component Title Meta Label */}
      <div className="text-center mb-6">
        <h1 className="text-xl font-extrabold text-slate-900 tracking-tight">Static Datepicker UI</h1>
        <p className="text-xs text-slate-500 mt-1">Project 6 Presentation Blueprint Layer</p>
      </div>

      {/* 1. MOCK TEXT INPUT CONTROL ELEMENT */}
      <div className="relative bg-white border border-slate-200 rounded-xl shadow-xs p-3 flex items-center justify-between">
        <div className="space-y-0.5">
          <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">Selected Date</span>
          <span className="text-sm font-medium text-slate-700 select-none">dd / mm / yyyy</span>
        </div>
        {/* Calendar suffix layout placeholder icon */}
        <div className="text-lg p-2 bg-slate-50 text-slate-500 rounded-lg select-none">
          📅
        </div>
      </div>

      {/* 2. ABSOLUTELY POSITIONED DROPDOWN PRESENTATION FRAME CONTAINER */}
      <div className="bg-white border border-slate-200 shadow-xl rounded-2xl p-5 space-y-4 relative animate-fadeIn">
        
        {/* Header Ribbon Row navigation block */}
        <div className="flex items-center justify-between border-b border-slate-50 pb-3">
          <button className="p-1.5 hover:bg-slate-50 text-slate-400 hover:text-slate-700 rounded-lg text-sm transition-colors select-none" disabled>
            &lsaquo;
          </button>
          <h2 className="text-sm font-bold text-slate-800 tracking-tight select-none">
            December 2022
          </h2>
          <button className="p-1.5 hover:bg-slate-50 text-slate-400 hover:text-slate-700 rounded-lg text-sm transition-colors select-none" disabled>
            &rsaquo;
          </button>
        </div>

        {/* Calendar days matrix grid framework */}
        <div className="space-y-2">
          {/* Day column headers indicator row layout */}
          <div className="grid grid-cols-7 gap-1 text-center">
            {daysOfWeek.map((day, idx) => (
              <span key={idx} className="text-[11px] font-bold tracking-wider text-slate-400 uppercase select-none py-1">
                {day}
              </span>
            ))}
          </div>

          {/* Grid row items tracking dates numerical positions values */}
          <div className="grid grid-cols-7 gap-1 text-center">
            {calendarDays.map((day, idx) => {
              if (day === null) {
                return <div key={idx} className="p-2" />;
              }
              
              // Custom design highlighting matching target components layout values safely
              const isSelected = day === 20;

              return (
                <div
                  key={idx}
                  className={`text-xs font-semibold py-2 rounded-xl transition-all select-none ${
                    isSelected
                      ? 'bg-indigo-600 text-white shadow-sm shadow-indigo-500/20'
                      : 'text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  {day}
                </div>
              );
            })}
          </div>
        </div>

      </div>

    </div>
  );
}