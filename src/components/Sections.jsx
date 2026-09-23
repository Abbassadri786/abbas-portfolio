import Icon from "./Icon";

export function Stats({ stats }) {
  return (
    <section className="stats-strip section section--compact reveal">
      <div className="section-kicker">Quick Stats</div>
      <div className="stats-grid">
        {stats.map((s) => (
          <div className="stat-card" key={s.label}>
            <strong>{s.value}</strong>
            <span>{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export function About({ profile }) {
  return (
    <section id="about" className="about section">
      <div className="section-heading reveal">
        <div>
          <p className="eyebrow">Let’s Start With My Name</p>
          <h2>
            About the
            <br />
            <span>developer</span>.
          </h2>
        </div>
        <p className="section-intro">
          A practical engineer with an eye for systems that are useful,
          maintainable and ready to evolve.
        </p>
      </div>
      <div className="about-grid">
        <article className="about-copy reveal">
          <p>{profile.about}</p>
          <div className="about-rule" />
          <div className="about-notes">
            <div>
              <span>What I build</span>
              <strong>Backend that works, AI stuff, Python + Automation + AI, and websites—depends on the problem at hand</strong>
            </div>
            <div>
              <span>Prove Your Interest in Coding!</span>
              <strong>I actively code solutions to problems and projects, regularly uploading them to my GitHub</strong>
            </div>
            <div>
              <span>My passions?</span>
              <strong>Creating things, solving problems, and chasing new ideas.</strong>
            </div>
            <div>
              <span>When not coding?</span>
              <strong>Gaming, working out, joking around, talking ideas, or questioning life.</strong>
            </div>
            <div>
              <span>My coding philosophy?</span>
              <strong>Make it work → make it right → make it fast → make it beautiful.</strong>
            </div>
            <div>
              <span>How I work</span>
              <strong>Understand → architect → implement → test → improve</strong>
            </div>
            <div>
              <span>What I value</span>
              <strong>Clarity, performance, security and good UX</strong>
            </div>
          </div>
        </article>
        <aside className="about-card reveal reveal--delay-1">
          <div className="about-card-top">
            <span>ABOUT ME</span>
          </div>
          <div className="about-card-avatar">
            <img src={profile.photo} alt="About image placeholder" />
          </div>
          <div className="about-card-footer">
            <strong>{profile.name}</strong>
            <span>{profile.title}</span>
          </div>
        </aside>
      </div>
    </section>
  );
}

export function Projects({ projects, profile }) {
  return (
    <section id="projects" className="projects section">
      <div className="section-heading reveal">
        <div>
          <p className="eyebrow">Where Did My Time Go?</p>
          <h2>
            Projects that
            <br />
            <span>do something</span>.
          </h2>
        </div>
        <p className="section-intro">
          Selected builds focused on solving real workflows with modern
          application architecture.
        </p>
      </div>
      <div className="projects-grid">
        {projects.map((p, i) => (
          <article
            className={`project-card project-card--${p.variant} reveal`}
            key={p.title}
          >
            <div className="project-media">
              <div className="project-media-grid" />
              <img src={p.image} alt={`${p.title} screenshot placeholder`} />
              <span className="project-number">0{i + 1}</span>
            </div>
            <div className="project-body">
              <p className="project-eyebrow">{p.eyebrow}</p>
              <h3>{p.title}</h3>
              <p className="project-description">{p.description}</p>
              <ul className="project-list">
                {p.bullets.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
              <div className="stack-row">
                {p.stack.map((x) => (
                  <span key={x}>{x}</span>
                ))}
              </div>
              <a
                className="project-link"
                href={p.link}
                target="_blank"
                rel="noreferrer"
              >
                View Details <Icon name="external" size={15} />
              </a>
            </div>
          </article>
        ))}
      </div>
      <div className="show-more-wrap reveal">
        <a
          className="text-button text-button--link"
          href={profile.github}
          target="_blank"
          rel="noreferrer"
        >
          Explore Project Archive <span>↗</span>
        </a>
      </div>
    </section>
  );
}

export function Skills({ skills, deck, setDeck, deckRef }) {
  const shuffleDeck = () =>
    setDeck((prev) => {
      const copy = [...prev];
      for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
      }
      return copy;
    });
  return (
    <section id="skills" className="skills section">
      <div className="section-heading section-heading--center reveal">
        <div>
          <p className="eyebrow">My Skill Deck</p>
          <h2>
            A deck full of
            <br />
            <span>useful skills</span>.
          </h2>
        </div>
        <p className="section-intro">
          Technology cards instead of playing cards — each one highlights a tool
          I use to build, test and ship software.
        </p>
      </div>
      <div className="deck-table reveal" ref={deckRef}>
        <div className="deck-header">
          <span>19 SKILLS</span>
          <button className="shuffle-button" onClick={shuffleDeck}>
            ↻ Shuffle Skills
          </button>
        </div>
        <div className="skill-grid">
          {deck.map((skill, index) => (
            <article
              className={`skill-card skill-card--${skill.tone}`}
              key={`${skill.name}-${index}`}
            >
              <div className="skill-card-center">
                <span className="skill-logo-wrap">
                  <img src={skill.icon} alt="" />
                </span>
                <strong>{skill.name}</strong>
              </div>
            </article>
          ))}
        </div>
        <div className="deck-legend">
          <span>CORE = Strong working knowledge</span>
          <span>PRO = Frequently used</span>
          <span>FOCUS = Current learning</span>
        </div>
      </div>
    </section>
  );
}

export function Journey({ timeline }) {
  return (
    <section id="journey" className="journey section">
      <div className="section-heading reveal">
        <div>
          <p className="eyebrow">The Grind So Far</p>
          <h2>
            From learning to
            <br />
            <span>shipping</span>.
          </h2>
        </div>
        <p className="section-intro">
          A compact view of the kind of engineering work this portfolio is built
          around.
        </p>
      </div>
      <div className="timeline">
        {timeline.map((item) => (
          <article className="timeline-item reveal" key={item.level}>
            <div className="timeline-level">Lvl {item.level}</div>
            <div className="timeline-line" />
            <div className="timeline-content">
              <div className="timeline-meta">
                <span>{item.company}</span>
                <span>{item.period}</span>
              </div>
              <h3>{item.role}</h3>
              <ul>
                {item.bullets.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
              <div className="tag-row">
                {item.tags.map((x) => (
                  <span key={x}>{x}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function XP({ achievements }) {
  return (
    <section className="xp section">
      <div className="xp-top reveal">
        <div>
          <p className="eyebrow">Pro Gamer, Aren’t I?</p>
          <h2>
            XP Earned <span>: 4300</span>
          </h2>
        </div>
        <div className="xp-token">XP</div>
      </div>
      <div className="achievement-grid">
        {achievements.map(([rarity, title, body, xp]) => (
          <article className="achievement-card reveal" key={title}>
            <div className="achievement-top">
              <span>{rarity}</span>
              <span>{xp}</span>
            </div>
            <h3>{title}</h3>
            <p>{body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export function Contact({ profile }) {
  return (
    <section id="contact" className="contact section">
      <div className="contact-card reveal">
        <div className="contact-copy">
          <p className="eyebrow eyebrow--accent">Find Me On</p>
          <h2>
            Let’s build
            <br />
            <span>something useful</span>.
          </h2>
          <p>
            For roles, collaborations, product ideas or engineering
            conversations, reach out through any channel below.
          </p>
        </div>
        <div className="contact-links">
          <a
            href={profile.resume}
            download="Abbas_Sadriwala-Resume.pdf"
          >
            <span>
              <Icon name="file" /> Resume
            </span>
            <strong>Download Resume</strong>
          </a>
          <a href={`mailto:${profile.email}?subject=${encodeURIComponent("Hello Abbas")}`}>
            <span>
              <Icon name="mail" /> Email
            </span>
            <strong>{profile.email}</strong>
          </a>
          <a href={`tel:${profile.phone.replace(/[^+\d]/g, "")}`}>
            <span>
              <Icon name="phone" /> Phone
            </span>
            <strong>{profile.phone}</strong>
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            <span>
              <Icon name="linkedin" /> LinkedIn
            </span>
            <strong>in/abbas-s-0a9522225</strong>
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer">
            <span>
              <Icon name="github" /> GitHub
            </span>
            <strong>github.com/Abbassadri786</strong>
          </a>
          <a href={profile.leetcode} target="_blank" rel="noreferrer">
            <span>
              <Icon name="leetcode" /> LeetCode
            </span>
            <strong>leetcode.com/u/abbassadri786</strong>
          </a>
        </div>
      </div>
    </section>
  );
}
