import React from 'react';

export default function App() {
  // Ordered mapping array representing the six required images from your document specifications
  const gridItems = [
    {
      id: 1,
      title: "Foggy Beach View",
      desc: "A foggy beach with a large rock formation in the foreground",
      bgClass: "bg-slate-300 text-slate-800",
      emoji: "🪨",
      // Custom grid spanning to map the asymmetrical mockup layout geometry on desktop viewports
      layoutSpan: "md:col-span-2 md:row-span-2 h-72 md:h-full"
    },
    {
      id: 2,
      title: "Table Platters",
      desc: "A table topped with plates and bowls of food",
      bgClass: "bg-amber-100 text-amber-900",
      emoji: "🍲",
      layoutSpan: "md:col-span-1 md:row-span-1 h-44"
    },
    {
      id: 3,
      title: "Mediterranean Apartments",
      desc: "A row of white apartment buildings next to a street",
      bgClass: "bg-sky-100 text-sky-950",
      emoji: "🏢",
      layoutSpan: "md:col-span-1 md:row-span-2 h-72 md:h-full"
    },
    {
      id: 4,
      title: "Building Entryway",
      desc: "A building with a red door and a tree in front of it",
      bgClass: "bg-orange-100 text-orange-950",
      emoji: "🚪",
      layoutSpan: "md:col-span-1 md:row-span-2 h-72 md:h-full"
    },
    {
      id: 5,
      title: "Minimalist Living Room",
      desc: "A living room with a white couch and a round window",
      bgClass: "bg-zinc-200 text-zinc-800",
      emoji: "🛋️",
      layoutSpan: "md:col-span-1 md:row-span-1 h-44"
    },
    {
      id: 6,
      title: "Hilltop Shoreline Lookout",
      desc: "A view of a beach from the top of a hill",
      bgClass: "bg-teal-100 text-teal-950",
      emoji: "🌾",
      layoutSpan: "md:col-span-2 md:row-span-1 h-44"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 space-y-8">
      
      {/* Structural Header Region */}
      <header className="text-center space-y-2">
        <h1 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
          Custom Image Grid Gallery
        </h1>
        <p className="text-slate-500 text-xs sm:text-sm max-w-md mx-auto">
          An exploration of advanced alignment, spacing, and explicit grid child cell spanning workflows using Tailwind v4.
        </p>
      </header>

      {/* CORE MASONRY GRID LAYOUT WRAPPER MATRIX CONTAINER */}
      <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 auto-rows-fr">
        {gridItems.map((item) => (
          <figure 
            key={item.id} 
            className={`group relative rounded-2xl overflow-hidden border border-slate-200/60 p-6 flex flex-col justify-between shadow-xs transition-all duration-300 hover:shadow-md hover:border-indigo-200 ${item.layoutSpan} ${item.bgClass}`}
          >
            {/* Visual Icon Label Layer */}
            <div className="text-2xl select-none transform group-hover:scale-110 transition-transform duration-200">
              {item.emoji}
            </div>

            {/* Semantic Descriptor Block Captions */}
            <div className="space-y-1">
              <h2 className="text-xs font-bold uppercase tracking-wider opacity-60">
                {item.title}
              </h2>
              <figcaption className="text-sm font-semibold tracking-tight leading-snug">
                {item.desc}
              </figcaption>
            </div>

            {/* Subtle Overlay Accent Mask Effect Layer */}
            <div className="absolute inset-0 bg-indigo-950/0 group-hover:bg-indigo-950/5 pointer-events-none transition-colors duration-200" />
          </figure>
        ))}
      </main>

      {/* Global Footer Layout Elements Section */}
      <footer className="text-center pt-4 text-xs text-slate-400 font-medium">
        <p>Project 8 Grid Canvas Layout &bull; Responsive Masonry Matrix Blueprint</p>
      </footer>

    </div>
  );
}