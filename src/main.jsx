import React, { useEffect, useRef, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'

const profile = {
  name: 'My Name',
  title: 'Software Development Engineer',
  about:
    'Dynamic Software Developer adept at engineering elegant solutions for complex challenges. Proficient in diverse tech stacks, I excel in innovative, team-driven environments. Driven to create impactful and efficient software that makes a difference.',
  email: 'abbassadri786@gmail.com',
  phone: '+91-887192XXX9',
  linkedin: 'https://www.linkedin.com/in/abbas-s-0a9522225',
  github: 'https://github.com/Abbassadri786',
}

const projects = [
  {
    title: 'HireLens AI',
    eyebrow: 'AI-Powered Recruitment Screening Platform',
    description:
      'Integrated automated resume parsing and data normalization pipelines to standardize candidate submissions and reduce manual preprocessing for hiring teams.',
    bullets: [
      'Built a multi-tenant recruitment SaaS using PostgreSQL/pgvector and LangGraph to asynchronously parse, semantically match and rank candidate resumes against job requirements.',
      'Implemented hybrid candidate scoring combining deterministic skill matching, vector similarity and LLM-based reasoning, with explainable evidence for each score.',
      'Designed JWT/HttpOnly-cookie authentication, rate limiting, audit logging and AI-provider fallback between Gemini and Groq.',
    ],
    stack: ['FastAPI', 'PostgreSQL', 'pgvector', 'LangGraph', 'React', 'Gemini', 'Groq'],
    link: 'https://github.com/Abbassadri786',
    image: '/assets/your-image-here.jpg',
    cardClass: 'project-card--dark',
  },
  {
    title: 'Hotel Booking System',
    eyebrow: 'Full-Stack Booking Platform',
    description:
      'Deployed a scalable hotel booking platform that processed 1,200+ monthly reservations, using Django and React to achieve a 40% reduction in booking-related user queries and support tickets within 6 months.',
    bullets: [
      'Implemented advanced filtering and sorting features for booking records with JavaScript and Bootstrap, enabling staff to efficiently locate reservations and enhance workflow productivity.',
      'Deployed a conversational AI interface to deliver instant responses to user inquiries and streamline chat history management.',
    ],
    stack: ['Django', 'React', 'JavaScript', 'Bootstrap', 'MySQL', 'AI Chatbot'],
    link: 'https://github.com/Abbassadri786',
    image: '/assets/your-image-here.jpg',
    cardClass: 'project-card--light',
  },
]

const skillSeed = [
  ['Python', 'K', '♠'],
  ['Java', 'K', '♠'],
  ['C/C++', 'K', '♣'],
  ['FastAPI', 'K', '♥'],
  ['Django', 'Q', '♠'],
  ['Spring Boot', 'Q', '♦'],
  ['Node.js', 'Q', '♣'],
  ['LangGraph', 'Q', '♥'],
  ['Agentic AI', 'J', '♠'],
  ['TypeScript', 'J', '♦'],
  ['ReactJS', 'J', '♣'],
  ['RAG', 'J', '♥'],
  ['PostgreSQL', 'A', '♠'],
  ['MongoDB', 'A', '♦'],
  ['Git', 'A', '♣'],
  ['JUnit', 'A', '♥'],
  ['JMeter', 'K', '♦'],
  ['Selenium', 'Q', '♠'],
  ['VS Code', 'JOKER', '✦'],
]

const stats = [
  { value: '2', label: 'Featured Projects' },
  { value: '19', label: 'Core Skills' },
  { value: 'AI + Web', label: 'Engineering Focus' },
  { value: '24/7', label: 'Curiosity Mode' },
]

const timeline = [
  {
    level: '01',
    role: 'Software Engineering',
    period: 'Current Focus',
    company: '@ Building Production Systems',
    bullets: ['Backend APIs and full-stack products', 'AI-assisted workflows and automation', 'Clean, scalable engineering practices'],
    tags: ['Java', 'Spring Boot', 'Python', 'React', 'AI'],
  },
  {
    level: '02',
    role: 'AI & Backend Development',
    period: 'Project Work',
    company: '@ HireLens AI',
    bullets: ['Multi-tenant architecture', 'Semantic matching and RAG', 'Explainable LLM-assisted scoring'],
    tags: ['FastAPI', 'PostgreSQL', 'pgvector', 'LangGraph', 'Gemini'],
  },
  {
    level: '03',
    role: 'Full-Stack Development',
    period: 'Project Work',
    company: '@ Hotel Booking System',
    bullets: ['Django + React booking workflows', 'Operational filtering and reporting', 'Conversational AI interface'],
    tags: ['Django', 'React', 'MySQL', 'JavaScript', 'Bootstrap'],
  },
]

const achievements = [
  ['Epic', 'Backend Builder', 'APIs designed for clarity, reliability and scale', '+500 XP'],
  ['Legendary', 'AI Integrator', 'RAG, LangGraph and multi-provider AI workflows', '+1000 XP'],
  ['Epic', 'Full-Stack Engineer', 'Frontends, APIs and databases working as one system', '+750 XP'],
  ['Rare', 'Automation Crafter', 'Testing, performance checks and developer tooling', '+300 XP'],
  ['Common', 'Problem Solver', 'Driven by complex engineering challenges', '+200 XP'],
  ['Epic', 'Product Builder', 'Software built around real user workflows', '+600 XP'],
  ['Rare', 'Bug Hunter', 'Debug-first, evidence-driven development', '+400 XP'],
  ['Epic', 'Database Navigator', 'Relational + document data modeling', '+350 XP'],
]

function Icon({ name, size = 18, stroke = 1.8 }) {
  const paths = {
    github: <><path d="M9 19c-4 1-4-2-5-2m10 4v-3.9c0-.9.1-1.4-.4-1.9 2.8-.3 5.4-1.4 5.4-6.1a4.7 4.7 0 0 0-1.3-3.3 4.3 4.3 0 0 0-.1-3.3s-1-.3-3.4 1.3a11.8 11.8 0 0 0-6.2 0C5.6-.8 4.6-.5 4.6-.5a4.3 4.3 0 0 0-.1 3.3A4.7 4.7 0 0 0 3.2 5.9c0 4.7 2.6 5.8 5.4 6.1-.4.4-.4 1-.4 1.9V18"/></>,
    linkedin: <><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M8 10v7M8 7.5v.01M12 17v-4.2c0-1.6 3-1.8 3 0V17M12 12.1c.5-1.7 3-2 3.8-.2"/></>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/></>,
    phone: <><path d="M6 2h3l1.5 4-2 1.6a15 15 0 0 0 6.9 6.9L17 12.5l4 1.5v3c0 1.1-.9 2-2 2C10.7 19 3 11.3 3 3a1 1 0 0 1 1-1h2z"/></>,
    arrow: <><path d="M5 12h13"/><path d="m13 6 6 6-6 6"/></>,
    external: <><path d="M14 5h5v5"/><path d="m19 5-8 8"/><path d="M19 13v5a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h5"/></>,
    menu: <><path d="M4 7h16M4 12h16M4 17h16"/></>,
    close: <><path d="m6 6 12 12M18 6 6 18"/></>,
  }
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [deck, setDeck] = useState(skillSeed)
  const deckRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('is-visible')
      }),
      { threshold: 0.12 }
    )
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const onKey = event => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const visibleProjects = projects

  const shuffleDeck = () => {
    setDeck(prev => {
      const copy = [...prev]
      for (let i = copy.length - 1; i > 0; i -= 1) {
        const j = Math.floor(Math.random() * (i + 1))
        ;[copy[i], copy[j]] = [copy[j], copy[i]]
      }
      return copy
    })
    deckRef.current?.animate(
      [{ transform: 'translateY(0) rotate(0deg)' }, { transform: 'translateY(-8px) rotate(-1deg)' }, { transform: 'translateY(0) rotate(0deg)' }],
      { duration: 420, easing: 'cubic-bezier(.2,.8,.2,1)' }
    )
  }

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="site-shell">
      <a className="skip-link" href="#about">Skip to content</a>

      <header className="topbar">
        <a className="brand" href="#top" onClick={closeMenu} aria-label="Go to top">
          <span className="brand-mark">MN</span>
          <span className="brand-word">MY NAME</span>
        </a>

        <nav className={`nav ${menuOpen ? 'nav--open' : ''}`} aria-label="Primary navigation">
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#projects" onClick={closeMenu}>Projects</a>
          <a href="#skills" onClick={closeMenu}>Skills</a>
          <a href="#journey" onClick={closeMenu}>Journey</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </nav>

        <button className="menu-toggle" onClick={() => setMenuOpen(v => !v)} aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen}>
          <Icon name={menuOpen ? 'close' : 'menu'} size={21} />
        </button>
      </header>

      <main id="top">
        <section className="hero section">
          <div className="hero-copy reveal">
            <p className="eyebrow eyebrow--accent"><span className="dot" /> Software Engineer Portfolio</p>
            <h1>Hi, I’m <span className="ink-underline">My Name</span>.</h1>
            <p className="hero-tagline">I build <strong>thoughtful software</strong> where backend engineering, AI systems and product-focused development meet.</p>
            <div className="hero-actions">
              <a className="button button--ink" href="#projects">View projects <Icon name="arrow" size={17} /></a>
              <a className="button button--paper" href={`mailto:${profile.email}`}>Let’s talk <Icon name="mail" size={16} /></a>
            </div>
            <div className="mini-socials" aria-label="Social links">
              <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Icon name="github" /></a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Icon name="linkedin" /></a>
              <a href={`mailto:${profile.email}`} aria-label="Email"><Icon name="mail" /></a>
            </div>
          </div>

          <div className="hero-card-wrap reveal reveal--delay-1">
            <div className="hero-card-shadow" />
            <article className="playing-card hero-card">
              <div className="card-corner card-corner--top">A<span>♠</span></div>
              <div className="hero-photo-wrap">
                <div className="placeholder-hint">PHOTO<br />PLACEHOLDER</div>
                <img src="/assets/your-image-here.jpg" alt="Portrait placeholder" />
              </div>
              <div className="hero-card-copy">
                <p className="card-label">Software Development Engineer</p>
                <h2>Build. Ship.<br /><em>Improve.</em></h2>
              </div>
              <div className="card-suit">♠</div>
              <div className="card-corner card-corner--bottom">A<span>♠</span></div>
            </article>
          </div>
        </section>

        <section className="stats-strip section section--compact reveal" aria-label="Quick stats">
          <div className="section-kicker">Quick Stats</div>
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div className="stat-card" key={stat.label} style={{ '--stat-delay': `${index * 70}ms` }}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </section>

        <section id="about" className="about section">
          <div className="section-heading reveal">
            <div>
              <p className="eyebrow">Let’s Start With My Name</p>
              <h2>About the<br /><span>developer</span>.</h2>
            </div>
            <p className="section-intro">A practical engineer with an eye for systems that are useful, maintainable and ready to evolve.</p>
          </div>

          <div className="about-grid">
            <article className="about-copy reveal">
              <p>{profile.about}</p>
              <div className="about-rule" />
              <div className="about-notes">
                <div><span>What I build</span><strong>AI products, backend services, web apps</strong></div>
                <div><span>How I work</span><strong>Understand → design → implement → test → improve</strong></div>
                <div><span>What I value</span><strong>Clarity, performance, security and good UX</strong></div>
              </div>
            </article>

            <aside className="about-card reveal reveal--delay-1">
              <div className="about-card-top">
                <span>ABOUT ME</span>
                <span className="tiny-suit">♥</span>
              </div>
              <div className="about-card-avatar">
                <div className="placeholder-hint">YOUR<br />IMAGE</div>
                <img src="/assets/your-image-here.jpg" alt="About image placeholder" />
              </div>
              <div className="about-card-footer">
                <strong>My Name</strong>
                <span>Software Development Engineer</span>
              </div>
            </aside>
          </div>
        </section>

        <section id="projects" className="projects section">
          <div className="section-heading reveal">
            <div>
              <p className="eyebrow">Where Did My Time Go?</p>
              <h2>Projects that<br /><span>do something</span>.</h2>
            </div>
            <p className="section-intro">Selected builds focused on solving real workflows with modern application architecture and applied AI.</p>
          </div>

          <div className="projects-grid">
            {visibleProjects.map((project, index) => (
              <article className={`project-card ${project.cardClass} reveal`} style={{ '--reveal-delay': `${index * 90}ms` }} key={project.title}>
                <div className="project-media">
                  <div className="project-media-grid" />
                  <div className="placeholder-hint placeholder-hint--project">PROJECT<br />IMAGE</div>
                  <img src={project.image} alt={`${project.title} screenshot placeholder`} />
                  <span className="project-number">0{index + 1}</span>
                </div>
                <div className="project-body">
                  <p className="project-eyebrow">{project.eyebrow}</p>
                  <h3>{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <ul className="project-list">
                    {project.bullets.map(point => <li key={point}>{point}</li>)}
                  </ul>
                  <div className="stack-row">{project.stack.map(tech => <span key={tech}>{tech}</span>)}</div>
                  <a className="project-link" href={project.link}>View Details <Icon name="external" size={15} /></a>
                </div>
              </article>
            ))}
          </div>
          <div className="show-more-wrap reveal">
            <a className="text-button text-button--link" href={profile.github} target="_blank" rel="noreferrer">
              Explore Project Archive <span>↗</span>
            </a>
          </div>
        </section>

        <section id="skills" className="skills section">
          <div className="section-heading section-heading--center reveal">
            <div>
              <p className="eyebrow">My Skill Deck</p>
              <h2>A deck full of<br /><span>useful cards</span>.</h2>
            </div>
            <p className="section-intro">Each card is a tool in the stack — shuffled for a little personality, kept practical underneath.</p>
          </div>

          <div className="deck-table reveal" ref={deckRef}>
            <div className="deck-header">
              <span>19 SKILLS</span>
              <button className="shuffle-button" onClick={shuffleDeck}>↻ Shuffle Deck</button>
            </div>
            <div className="skill-grid">
              {deck.map(([name, rank, suit], index) => (
                <article className={`playing-card skill-card ${suit === '♥' || suit === '♦' ? 'skill-card--red' : ''}`} key={`${name}-${index}`}>
                  <div className="card-corner card-corner--top">{rank}<span>{suit}</span></div>
                  <div className="skill-card-center">
                    <span className="skill-suit">{suit}</span>
                    <strong>{name}</strong>
                  </div>
                  <div className="card-corner card-corner--bottom">{rank}<span>{suit}</span></div>
                </article>
              ))}
            </div>
            <div className="deck-legend">
              <span>KING = Deeply experienced</span>
              <span>QUEEN = I can do</span>
              <span>JACK = Confident</span>
              <span>JOKER = Wild card</span>
            </div>
          </div>
        </section>

        <section id="journey" className="journey section">
          <div className="section-heading reveal">
            <div>
              <p className="eyebrow">The Grind So Far</p>
              <h2>From learning to<br /><span>shipping</span>.</h2>
            </div>
            <p className="section-intro">A compact view of the kind of engineering work this portfolio is built around.</p>
          </div>

          <div className="timeline">
            {timeline.map((item, index) => (
              <article className="timeline-item reveal" style={{ '--reveal-delay': `${index * 100}ms` }} key={`${item.level}-${item.role}`}>
                <div className="timeline-level">Lvl {item.level}</div>
                <div className="timeline-line" />
                <div className="timeline-content">
                  <div className="timeline-meta"><span>{item.period}</span><span>{item.company}</span></div>
                  <h3>{item.role}</h3>
                  <ul>{item.bullets.map(b => <li key={b}>{b}</li>)}</ul>
                  <div className="tag-row">{item.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="xp section">
          <div className="xp-top reveal">
            <div>
              <p className="eyebrow">Pro Gamer, Aren’t I?</p>
              <h2>XP Earned <span>: 2400</span></h2>
            </div>
            <div className="xp-token">♠</div>
          </div>
          <div className="achievement-grid">
            {achievements.map(([rarity, title, body, xp], index) => (
              <article className="achievement-card reveal" style={{ '--reveal-delay': `${index * 70}ms` }} key={title}>
                <div className="achievement-top"><span>{rarity}</span><span>{xp}</span></div>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="contact section">
          <div className="contact-card reveal">
            <div className="contact-copy">
              <p className="eyebrow eyebrow--accent">Find Me On</p>
              <h2>Let’s build<br /><span>something useful</span>.</h2>
              <p>For roles, collaborations, product ideas or engineering conversations, reach out through any channel below.</p>
            </div>
            <div className="contact-links">
              <a href={`mailto:${profile.email}`}><span><Icon name="mail" /> Email</span><strong>{profile.email}</strong></a>
              <a href={`tel:${profile.phone.replace(/[^+\d]/g, '')}`}><span><Icon name="phone" /> Phone</span><strong>{profile.phone}</strong></a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer"><span><Icon name="linkedin" /> LinkedIn</span><strong>in/abbas-s-0a9522225</strong></a>
              <a href={profile.github} target="_blank" rel="noreferrer"><span><Icon name="github" /> GitHub</span><strong>github.com/Abbassadri786</strong></a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <span>© {new Date().getFullYear()} My Name</span>
        <span>Built with React · kept intentionally simple</span>
        <a href="#top">Back to top ↑</a>
      </footer>
    </div>
  )
}

createRoot(document.getElementById('root')).render(<App />)
