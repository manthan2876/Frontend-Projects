import React, { useState, useEffect } from 'react'
import './App.css'

const navItems = [
  { label: 'Home', page: 'home' },
  { label: 'Projects', page: 'projects' },
  { label: 'Articles', page: 'articles' },
  { label: 'Contact', page: 'contact' }
]

export default function App() {
  const [currentPage, setCurrentPage] = useState('home')

  useEffect(() => {
    const titles = {
      home: 'Manthan Kuvadiya | Frontend Developer Portfolio',
      projects: 'My Projects | Technical Portfolio Showcase',
      articles: 'Articles & Publications | Frontend Insights',
      contact: "Contact Me | Let's Collaborate"
    }
    document.title = titles[currentPage] || 'Portfolio'
  }, [currentPage])

  const handleFormSubmit = (e) => {
    e.preventDefault()
    alert('Form submitted safely! In a real application, this request payload maps straight to an HTTP network request endpoint.')
  }

  return (
    <div className="app-container">
      <header className="site-header">
        <strong className="brand">Manthan Kuvadiya</strong>

        <nav aria-label="Main portfolio navigation">
          <ul className="nav-list">
            {navItems.map((item) => (
              <li key={item.page}>
                <button
                  type="button"
                  className={currentPage === item.page ? 'nav-button active' : 'nav-button'}
                  onClick={() => setCurrentPage(item.page)}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main className="page-shell">
        {currentPage === 'home' && (
          <article className="page-section">
            <section className="hero-section">
              <h1>Frontend Developer Portfolio</h1>
              <p>Clean semantic layout with responsive visuals and easy navigation.</p>
            </section>

            <div className="content-grid">
              <section className="card-block" aria-labelledby="home-projects-title">
                <h2 id="home-projects-title">Featured Projects</h2>
                <ul>
                  <li>HTML Only Portfolio</li>
                  <li>Calculator</li>
                  <li>Quiz App</li>
                  <li>Countdown Timer</li>
                  <li>Product Upcoming Page</li>
                </ul>
              </section>

              <div className="stack-grid">
                <section className="card-block" aria-labelledby="home-exp-title">
                  <h2 id="home-exp-title">Work Experience</h2>
                  <h3>roadmap.sh</h3>
                  <p>Solved all the frontend projects while maintaining strong accessibility and code clarity.</p>
                  <a href="https://roadmap.sh" target="_blank" rel="noopener noreferrer">
                    Visit my profile
                  </a>
                </section>

                <section className="card-block" aria-labelledby="home-os-title">
                  <h2 id="home-os-title">Open Source Work</h2>
                  <p>Contributed to 50+ projects and built several GitHub repositories that attracted community interest.</p>
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                    Visit my GitHub
                  </a>
                </section>
              </div>
            </div>

            <section className="education-block" aria-labelledby="home-edu-title">
              <h2 id="home-edu-title">Education & Training</h2>
              <p>Graduated with 3.76 CGPA, won a hackathon, and hosted 30+ learning sessions.</p>
              <h3>Courses I completed</h3>
              <ul>
                <li>Object Oriented Programming</li>
                <li>Data Structures and Algorithms</li>
                <li>Web Engineering</li>
                <li>Artificial Intelligence</li>
                <li>Human Computer Interaction</li>
                <li>Computer Graphics</li>
                <li>Database Management Systems</li>
                <li>Distributed Database Systems</li>
                <li>Discrete Mathematics</li>
              </ul>
            </section>

            <aside className="review-panel" aria-labelledby="home-reviews-title">
              <h2 id="home-reviews-title">Teacher Reviews</h2>
              <div className="reviews-grid">
                <blockquote className="review-card">
                  <p>“John Doe was a brilliant student; always stood out with his assignments.”</p>
                  <cite>— Jane Doe, Assistant Professor</cite>
                </blockquote>
                <blockquote className="review-card">
                  <p>“John Doe was a brilliant student; always stood out with his assignments.”</p>
                  <cite>— Jane Doe, Assistant Professor</cite>
                </blockquote>
              </div>
            </aside>
          </article>
        )}

        {currentPage === 'projects' && (
          <section className="page-section">
            <h1>My Built Projects Showcase</h1>
            <p className="section-copy">A curated list of structural portfolio builds, each designed to show clean HTML architecture and accessible layout patterns.</p>
            <ol className="feature-list">
              <li>
                <strong>Single Page HTML CV</strong>: A polished resume page with strong semantic sections and perceptive layout.
              </li>
              <li>
                <strong>HTML Only Portfolio</strong>: A multi-view portfolio structure that mimics real site navigation without complex frameworks.
              </li>
            </ol>
          </section>
        )}

        {currentPage === 'articles' && (
          <section className="page-section">
            <h1>Articles & Technical Insights</h1>
            <article className="article-card">
              <h2>Why Semantic Layout Markers Matter for SEO</h2>
              <p className="meta-text">Published: May 2026</p>
              <p>Laying down clear tags like headers, main, and navigation wrappers helps modern search engines index your content more predictably.</p>
            </article>
          </section>
        )}

        {currentPage === 'contact' && (
          <section className="page-section">
            <h1>Contact Me</h1>
            <p className="section-copy">Send a message for project inquiries, collaboration, or front-end consulting work.</p>
            <form className="contact-form" onSubmit={handleFormSubmit}>
              <div className="form-field">
                <label htmlFor="user-name">Full Name</label>
                <input id="user-name" name="name" type="text" required placeholder="What should we call you?" />
              </div>
              <div className="form-field">
                <label htmlFor="user-email">Email Address</label>
                <input id="user-email" name="email" type="email" required placeholder="john@doe.com" />
              </div>
              <div className="form-field">
                <label htmlFor="user-msg">Message</label>
                <textarea id="user-msg" name="message" rows="5" required placeholder="Type your message details here..."></textarea>
              </div>
              <button type="submit" className="btn-primary">Send Message</button>
            </form>
          </section>
        )}
      </main>

      <footer className="footer">
        <span>© 2025 MySite — All rights reserved</span>
      </footer>
    </div>
  )
}
