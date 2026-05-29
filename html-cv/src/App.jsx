import React from 'react';

export default function App() {
  const profile = {
    name: "Manthan Kuvadiya",
    title: "Junior Frontend Developer",
    contact: {
      address: "123 Your Street, Bhavnagar, Gujarat, India",
      phone: "+91 98765 43210",
      email: "manthan@example.com",
      github: "https://github.com/manthan2876",
      linkedin: "https://linkedin.com/in/manthan-kuvadiya"
    },
    skills: [
      "HTML5 & Semantic Markup", "CSS3 & Tailwind CSS", "JavaScript (ES6+)", 
      "React.js & Redux", "Flutter & Dart", "Web Accessibility (a11y)", 
      "Figma to Design", "Responsive Web Design", "Technical Writing"
    ],
    education: {
      school: "CHARUSAT University",
      location: "Changa, Gujarat",
      degree: "B.Tech in Computer Science & Engineering",
      timeline: "July 2023 - Present",
      achievements: [
        "Maintaining strong academic marks across core software engineering frameworks.",
        "Deeply engaged with CS Patel Institute of Technology campus hackathons.",
        "Actively working on practical exams spanning Cloud Computing, Deep Learning, and Language Processing algorithms."
      ]
    },
    experience: [
      {
        company: "Meetanshi",
        location: "Gujarat, India",
        role: "React Full Stack Intern",
        timeline: "August 2025",
        achievements: [
          "Mastered core JavaScript architecture implementations within an intensive initial 9-day phase.",
          "Engineered a series of production-ready single-page utilities including Drum Pads, Travel Journals, and Meme Generators.",
          "Implemented complex application architectures using React Redux and state-driven game components like Assembly Endgame.",
          "Built and deployed an AI-driven automated resume analysis pipeline utilizing customized text processing frameworks."
        ],
        skillsUsed: "React, JavaScript, Redux, State Architecture, API Integrations"
      },
      {
        company: "Open Source Contributor / Academic Labs",
        location: "Remote",
        role: "Frontend Developer Trainee",
        timeline: "Ongoing",
        achievements: [
          "Designed and optimized localized client-side application engines using storage layers like Hive and indexing engines.",
          "Refactored relational municipal and civic platform designs away from cloud-native setups into self-hosted Supabase and MinIO environments."
        ],
        skillsUsed: "Semantic Layouts, Data Architectures, PostGIS, MiniIO"
      }
    ]
  };

  return (
    <div className="max-w-4xl mx-auto my-10 px-4 sm:px-6 lg:px-8">
      <article className="bg-white shadow-sm border border-slate-200 rounded-xl p-8 space-y-8">
        
        {/* Semantic Header Region */}
        <header className="border-b border-slate-100 pb-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-slate-900">{profile.name}</h1>
            <p className="text-lg font-medium text-indigo-600 mt-1">{profile.title}</p>
          </div>
          <div className="text-sm text-slate-600 space-y-1 md:text-right">
            <p className="font-medium">{profile.contact.address}</p>
            <p>Phone: {profile.contact.phone}</p>
            <p>Email: <a href={`mailto:${profile.contact.email}`} className="text-indigo-600 hover:underline">{profile.contact.email}</a></p>
          </div>
        </header>

        {/* Technical Skills Core Section */}
        <section aria-labelledby="skills-heading">
          <h2 id="skills-heading" className="text-xl font-bold text-slate-900 uppercase tracking-wider border-b border-slate-100 pb-2 mb-4">
            Skills
          </h2>
          <ul className="flex flex-wrap gap-2">
            {profile.skills.map((skill, index) => (
              <li key={index} className="bg-slate-100 text-slate-800 text-sm font-medium px-3 py-1 rounded-md">
                {skill}
              </li>
            ))}
          </ul>
        </section>

        {/* Experience / Career History Section */}
        <section aria-labelledby="experience-heading">
          <h2 id="experience-heading" className="text-xl font-bold text-slate-900 uppercase tracking-wider border-b border-slate-100 pb-2 mb-4">
            Experience
          </h2>
          <div className="space-y-6">
            {profile.experience.map((job, index) => (
              <div key={index} className="group">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2">
                  <h3 className="font-bold text-slate-800 text-base">
                    {job.company}, <span className="font-normal text-slate-600">{job.location}</span> &mdash; <span className="italic text-indigo-600">{job.role}</span>
                  </h3>
                  <span className="text-sm font-medium text-slate-500 whitespace-nowrap"><time>{job.timeline}</time></span>
                </div>
                <ul className="list-disc pl-5 space-y-1 text-sm text-slate-600 mb-2">
                  {job.achievements.map((bullet, idx) => (
                    <li key={idx}>{bullet}</li>
                  ))}
                </ul>
                <p className="text-xs text-slate-500 font-medium italic">
                  <strong>Skills Applied:</strong> {job.skillsUsed}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Education Timeline Section */}
        <section aria-labelledby="education-heading">
          <h2 id="education-heading" className="text-xl font-bold text-slate-900 uppercase tracking-wider border-b border-slate-100 pb-2 mb-4">
            Education
          </h2>
          <div>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2">
              <h3 className="font-bold text-slate-800 text-base">
                {profile.education.school}, <span className="font-normal text-slate-600">{profile.education.location}</span> &mdash; <span className="text-slate-700 font-medium">{profile.education.degree}</span>
              </h3>
              <span className="text-sm font-medium text-slate-500 whitespace-nowrap"><time>{profile.education.timeline}</time></span>
            </div>
            <ul className="list-disc pl-5 space-y-1 text-sm text-slate-600">
              {profile.education.achievements.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* Profiles / Links Section */}
        <footer className="border-t border-slate-100 pt-6">
          <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3">Across the Internet</h2>
          <div className="flex gap-4 text-sm font-medium">
            <a href={profile.contact.github} target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800 hover:underline">
              GitHub Profile
            </a>
            <a href={profile.contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800 hover:underline">
              LinkedIn Profile
            </a>
          </div>
        </footer>

      </article>
    </div>
  );
}