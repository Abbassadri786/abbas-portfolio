import Icon from "./Icon";
export default function Hero({ profile }) {
  return (
    <section className="hero section">
      <div className="hero-copy reveal">
        <p className="eyebrow eyebrow--accent">
          <span className="dot" /> Software Engineer Portfolio
        </p>
        <h1>
          Hi, I’m <span className="ink-underline">{profile.name}</span>.
        </h1>
        <p className="hero-tagline">
          I build <strong>thoughtful software</strong> where backend
          engineering, AI systems and product-focused development meet.
        </p>
        <div className="hero-actions">
          <a className="button button--ink" href={profile.resume} target="_blank" rel="noreferrer">
            View Resume <Icon name="arrow" size={17} />
          </a>
          <a className="button button--paper" href={`mailto:${profile.email}`}>
            Let’s talk <Icon name="mail" size={16} />
          </a>
        </div>
        <div className="mini-socials">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <Icon name="github" />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <Icon name="linkedin" />
          </a>
          <a href={`mailto:${profile.email}`} aria-label="Email">
            <Icon name="mail" />
          </a>
        </div>
      </div>
      <div className="hero-card-wrap reveal reveal--delay-1">
        <div className="hero-card-shadow" />
        <article className="hero-card">
          <div className="hero-photo-wrap">
            <img src={profile.photo} alt="Portrait placeholder" />
          </div>
          <div className="hero-card-copy">
            <p className="card-label">{profile.title}</p>
            <h2>
              Build. Ship.
              <br />
              <em>Improve.</em>
            </h2>
          </div>
        </article>
      </div>
    </section>
  );
}
