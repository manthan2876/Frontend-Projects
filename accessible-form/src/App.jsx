import React, { useState } from 'react';

export default function App() {
  const [showPassword, setShowPassword] = useState(false);

  const checklistItems = [
    { text: "Create Account", completed: true },
    { text: "Update Roadmap Progress", completed: true },
    { text: "Setup Public Profile", completed: true },
    { text: "Complete your first project", completed: false },
    { text: "Invite your Friends", completed: false }
  ];

  return (
    <div className="w-full max-w-3xl bg-white border border-slate-200 rounded-3xl shadow-xl p-6 sm:p-10 grid grid-cols-1 md:grid-cols-5 gap-8 items-center animate-fadeIn">
      
      {/* LEFT AREA CONTAINER: Core Form Elements Block */}
      <div className="md:col-span-3 space-y-5">
        <header className="hidden">
          <h2>Profile Update Panel</h2>
        </header>

        <form onSubmit={(e) => e.preventDefault()} className="space-y-4" noValidate>
          
          {/* Input Block 1: Full Name */}
          <div className="space-y-1.5">
            <label htmlFor="form-full-name" className="text-sm font-bold text-slate-700 block">
              Full Name
            </label>
            <input 
              type="text" 
              id="form-full-name"
              name="fullName"
              placeholder="What should we call you?"
              className="w-full text-sm px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
            />
          </div>

          {/* Input Block 2: Email Address (Simulating an invalid state from project mockup specification) */}
          <div className="space-y-1.5">
            <label htmlFor="form-email-addr" className="text-sm font-bold text-slate-700 block">
              Email
            </label>
            <input 
              type="email" 
              id="form-email-addr"
              name="email"
              defaultValue="john@doe.com"
              aria-invalid="true"
              aria-describedby="form-email-error"
              className="w-full text-sm px-4 py-3 rounded-xl border border-red-500 bg-red-50/30 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all"
            />
            <p id="form-email-error" className="text-xs font-semibold text-red-600 mt-1">
              Email is already taken
            </p>
          </div>

          {/* Input Block 3: Enter Password */}
          <div className="space-y-1.5">
            <label htmlFor="form-password-field" className="text-sm font-bold text-slate-700 block">
              Enter Password
            </label>
            <div className="relative">
              <input 
                type={showPassword ? "text" : "password"} 
                id="form-password-field"
                name="password"
                placeholder="••••••••"
                className="w-full text-sm px-4 py-3 pr-12 rounded-xl border border-slate-200 bg-slate-50 text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? "Hide password string text" : "Reveal cleartext password format"}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 text-slate-400 hover:text-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-lg text-sm select-none"
              >
                {showPassword ? "🔒" : "👁️"}
              </button>
            </div>
          </div>

          {/* Input Block 4: Confirm Password */}
          <div className="space-y-1.5">
            <label htmlFor="form-confirm-password" className="text-sm font-bold text-slate-700 block">
              Confirm Password
            </label>
            <input 
              type="password" 
              id="form-confirm-password"
              name="confirmPassword"
              placeholder="••••••••"
              className="w-full text-sm px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
            />
          </div>

          {/* Submit CTA Trigger Button */}
          <button 
            type="submit" 
            className="w-full text-sm font-bold bg-slate-900 hover:bg-slate-800 text-white py-3.5 px-4 rounded-xl transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-900 mt-2"
          >
            Update Profile
          </button>

        </form>
      </div>

      {/* RIGHT AREA CONTAINER: Metrics & Checklist Panel Dashboard */}
      <div className="md:col-span-2 flex flex-col items-center justify-center space-y-6 bg-slate-50 border border-slate-100 rounded-2xl p-6">
        
        {/* Profile Completeness Circle Indicator Engine Section */}
        <div className="text-center space-y-2">
          <div className="relative w-28 h-28 mx-auto flex items-center justify-center">
            {/* SVG Progress Arc Engine representing 65% */}
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
              <path
                className="text-slate-200"
                strokeWidth="3"
                stroke="currentColor"
                fill="none"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <path
                className="text-indigo-600 transition-all duration-500"
                strokeDasharray="65, 100"
                strokeWidth="3"
                strokeLinecap="round"
                stroke="currentColor"
                fill="none"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              />
            </svg>
            <span className="absolute text-2xl font-black text-slate-800 tracking-tight select-none">
              65%
            </span>
          </div>
          <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">
            Profile Completeness
          </p>
        </div>

        {/* Requirements Checklist List Layer Block */}
        <div className="w-full space-y-2.5">
          {checklistItems.map((item, index) => (
            <div 
              key={index} 
              className="flex items-center gap-3 text-xs sm:text-sm font-medium"
            >
              <div className={`w-4 h-4 rounded-md flex items-center justify-center border text-[9px] font-bold shrink-0 select-none ${
                item.completed 
                  ? 'bg-emerald-100 border-emerald-200 text-emerald-700' 
                  : 'bg-white border-slate-300 text-transparent'
              }`}>
                ✓
              </div>
              <span className={item.completed ? 'text-slate-400 line-through' : 'text-slate-600'}>
                {item.text}
              </span>
            </div>
          ))}
        </div>

      </div>

    </div>
  );
}