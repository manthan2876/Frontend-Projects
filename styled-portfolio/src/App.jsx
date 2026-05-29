import React, { useState, useEffect } from 'react';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [darkMode, setDarkMode] = useState(() => {
    // Check initial local storage values if they exist
    return localStorage.getItem('theme') === 'dark';
  });

  // Handle syncing of dark mode configuration settings directly with DOM layout nodes
  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  // Sync tab titles for proper page SEO tracking
  useEffect(() => {
    const titles = {
      home: "Manthan | Professional Portfolio",
      projects: "Engineering Labs | My Projects",
      articles: "Tech Insights | Frontend Hub",
      contact: "Get in Touch | Coordinate Work"
    };
    document.title = titles[currentPage] || "Portfolio";
  }, [currentPage]);

  const handleContactSubmit = (e) => {
    e.preventDefault();
    alert("Form submission caught gracefully! Network package ready for transport layer transmission.");
  };

  return (
    <div className="min-h-screen flex flex-col font-sans">
      
      {/* PERSISTENT HEADER NAVIGATION LAYER */}
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <strong className="text-xl font-bold tracking-tight bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent cursor-pointer" onClick={() => setCurrentPage('home')}>
            manthan.dev
          </strong>
          
          <div className="flex items-center gap-6">
            <nav aria-label="Main Portfolio Navigation">
              <ul className="flex items-center gap-1 sm:gap-4 text-sm font-medium text-slate-600 dark:text-slate-300">
                {['home', 'projects', 'articles', 'contact'].map((page) => (
                  <li key={page}>
                    <button 
                      onClick={() => setCurrentPage(page)}
                      className={`px-3 py-2 rounded-lg capitalize transition-all ${
                        currentPage === page 
                          ? 'bg-indigo-50 text-indigo-600 dark:bg-indigo-950/50 dark:text-indigo-400 font-semibold' 
                          : 'hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-slate-100'
                      }`}
                    >
                      {page}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>

            {/* DARK MODE SWITCHER BOX BUTTON CONTAINER */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              aria-label="Toggle Dark Mode Theme"
              className="p-2 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
            >
              {darkMode ? '☀️' : '🌙'}
            </button>
          </div>
        </div>
      </header>

      {/* CORE WORKSPACE APPLICATION INTERFACE ROUTER CONTAINER */}
      <main className="flex-grow max-w-6xl w-full mx-auto px-4 py-8">
        
        {/* VIEW 1: MASTER HOMEPAGE GRID BLOCK */}
        {currentPage === 'home' && (
          <div className="space-y-12 animate-fadeIn">
            {/* Hero Branding Headline Row */}
            <section className="text-center py-10 max-w-2xl mx-auto space-y-4">
              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                Frontend Developer
              </h1>
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                Building efficient architectural interfaces using React, modular web engineering frameworks, and production-ready code parameters.
              </p>
            </section>

            {/* Master Content Dashboard Matrix Split Layout Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              {/* Left Column Section Card: Project Directory */}
              <section className="md:col-span-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm space-y-4">
                <h2 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white flex items-center gap-2">
                  <span>🚀</span> Featured Projects
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {['HTML Only Portfolio', 'Responsive Calculator', 'Interactive Quiz App', 'Countdown Timer Engine', 'Product Launch Page'].map((proj, idx) => (
                    <div key={idx} className="p-4 border border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/40 rounded-xl hover:border-indigo-200 dark:hover:border-indigo-900 transition-all">
                      <h3 className="font-semibold text-slate-800 dark:text-slate-200 text-sm">{proj}</h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Production roadmap frontend solution tier layout.</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Right Sidebar Card: Professional Experiences & Profiles */}
              <div className="space-y-6">
                <section className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm space-y-4">
                  <h2 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white flex items-center gap-2">
                    <span>💼</span> Experience
                  </h2>
                  <div className="space-y-3">
                    <h3 className="font-semibold text-sm text-slate-800 dark:text-slate-200">roadmap.sh</h3>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">Solved advanced production frontend tracking parameters cleanly across local branches.</p>
                    <a href="https://roadmap.sh" target="_blank" rel="noopener noreferrer" className="inline-flex text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline">
                      Visit Profile View &rarr;
                    </a>
                  </div>
                  <hr className="border-slate-100 dark:border-slate-800" />
                  <div className="space-y-2">
                    <h3 className="font-semibold text-sm text-slate-800 dark:text-slate-200">OpenSource Contribution</h3>
                    <p className="text-xs text-slate-600 dark:text-slate-400">Contributed to active projects with thousands of stars.</p>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="inline-flex text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline">
                      Review GitHub Profile &rarr;
                    </a>
                  </div>
                </section>
              </div>
            </div>

            {/* Bottom Row Spanning Frame Card: Education Track Parameters */}
            <section className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm space-y-6">
              <h2 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white flex items-center gap-2">
                <span>🎓</span> Education & Coursework
              </h2>
              <div className="border-l-2 border-indigo-500 pl-4 space-y-2">
                <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">Graduated with 3.76 / 4.00 CGPA &bull; Won Regional Acme Hackathon Event</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">Organized and presented over 30 technical workshops across college campus branches.</p>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 pt-2">
                {['OOP Fundamentals', 'Data Structures & Alg', 'Web Engineering', 'Artificial Intelligence', 'Human-Computer Interaction', 'Computer Graphics', 'DBMS Architecture', 'Distributed Systems'].map((course, idx) => (
                  <span key={idx} className="text-xs px-3 py-1.5 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-lg text-center font-medium">
                    {course}
                  </span>
                ))}
              </div>
            </section>

            {/* Teacher Reviews Panel Row Frame Container */}
            <aside aria-labelledby="home-reviews-panel-title" className="space-y-4">
              <h2 id="home-reviews-panel-title" className="text-lg font-bold text-slate-900 dark:text-white px-1">
                Reviews from my Teachers
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {[1, 2, 3].map((item) => (
                  <blockquote key={item} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5 shadow-sm flex flex-col justify-between space-y-4">
                    <p className="text-sm text-slate-600 dark:text-slate-400 italic leading-relaxed">
                      "John Doe was a highly brilliant student; always standing out prominently with his assignment deliveries."
                    </p>
                    <cite className="not-italic block text-xs">
                      <strong className="font-bold text-slate-800 dark:text-slate-200 block">Jane Doe</strong>
                      <span className="text-slate-400">Assistant Professor</span>
                    </cite>
                  </blockquote>
                ))}
              </div>
            </aside>
          </div>
        )}

        {/* VIEW 2: DETAILED PROJECTS SUB-DIRECTORY FRAME */}
        {currentPage === 'projects' && (
          <section className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6 animate-fadeIn">
            <div>
              <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">Engineering Project Portfolio</h1>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Complete structural archive mapping track entries built systematically.</p>
            </div>
            <div className="space-y-4">
              <div className="p-4 border border-slate-100 dark:border-slate-800 rounded-xl space-y-2">
                <span className="text-xs font-semibold uppercase tracking-wider bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-400 px-2 py-0.5 rounded">Project 1</span>
                <h3 className="text-base font-bold text-slate-800 dark:text-slate-200">Single Page HTML CV Component</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">Structured layout engine focused heavily on standard semantic blocks, accessibility parsing, and deep header metadata injection profiles.</p>
              </div>
            </div>
          </section>
        )}

        {/* VIEW 3: TECHNICAL BLOG ARTICLES VIEW MODULE */}
        {currentPage === 'articles' && (
          <section className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6 animate-fadeIn">
            <div>
              <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">Technical Documentation Articles</h1>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">In-depth guides tracking core engineering paradigms and state management architectures.</p>
            </div>
            <article className="p-6 border border-slate-100 dark:border-slate-800 rounded-xl space-y-3">
              <span className="text-xs text-slate-400 font-medium">Published: May 2026</span>
              <h2 className="text-lg font-bold text-slate-800 dark:text-slate-200 hover:text-indigo-600 cursor-pointer transition-colors">Mastering Class-Driven Dark Mode within Unified React Component Hierarchies</h2>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Utilizing document viewport abstraction tokens to sync application-wide CSS styling paradigms directly inside cross-compiled runtime environments seamlessly...
              </p>
            </article>
          </section>
        )}

        {/* VIEW 4: TIGHTLY STYLED PRODUCTION CONTACT FRAME */}
        {currentPage === 'contact' && (
          <section className="max-w-md mx-auto bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 shadow-sm space-y-6 animate-fadeIn">
            <div>
              <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">Let's Coordinate Projects</h1>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Drop a secure routing message block to launch a collaboration sequence.</p>
            </div>
            
            <form onSubmit={handleContactSubmit} className="space-y-4">
              <div className="space-y-1">
                <label htmlFor="user-full-name" className="text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400">Full Name</label>
                <input type="text" id="user-full-name" required placeholder="Manthan Kuvadiya" className="w-full text-sm px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all" />
              </div>

              <div className="space-y-1">
                <label htmlFor="user-email-addr" className="text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400">Email Address</label>
                <input type="email" id="user-email-addr" required placeholder="manthan@example.com" className="w-full text-sm px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all" />
              </div>

              <div className="space-y-1">
                <label htmlFor="user-message-payload" className="text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400">Message Payload</label>
                <textarea id="user-message-payload" required rows="4" placeholder="Type engineering scope details here..." className="w-full text-sm px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"></textarea>
              </div>

              <button type="submit" className="w-full text-sm font-semibold bg-indigo-600 hover:bg-indigo-500 text-white py-3 px-4 rounded-xl transition-all shadow-sm shadow-indigo-500/10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Transmit Message Packet
              </button>
            </form>
          </section>
        )}

      </main>

      {/* FOOTER NOTATION BAR BLOCK */}
      <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 py-6 transition-colors">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 font-medium gap-2">
          <p>all rights reserved 2026 &copy; manthan.dev</p>
          <p>Built with React &amp; Tailwind CSS Architecture</p>
        </div>
      </footer>

    </div>
  );
}