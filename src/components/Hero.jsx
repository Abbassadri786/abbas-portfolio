import { useEffect, useState } from "react";
import Icon from "./Icon";
import { getTotalExperienceMonths } from "../data";

export default function Hero({ profile, stats }) {
  const [experienceMonths, setExperienceMonths] = useState(() => getTotalExperienceMonths());

  useEffect(() => {
    const refreshExperience = () => setExperienceMonths(getTotalExperienceMonths(new Date()));
    const interval = window.setInterval(refreshExperience, 60 * 1000);
    return () => window.clearInterval(interval);
  }, []);

  const mailHref = `mailto:${profile.email}?subject=${encodeURIComponent("Hello Abbas")}`;

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
          <a
            className="button button--ink"
            href={profile.resume}
            download="Abbas_Sadriwala-Resume.pdf"
          >
            Download Resume <Icon name="file" size={17} />
          </a>
          <a className="button button--paper" href={mailHref}>
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
          <a href={mailHref} aria-label="Email Abbas">
            <Icon name="mail" />
          </a>
        </div>
      </div>

      <div className="hero-card-wrap reveal reveal--delay-1">
        <div className="hero-card-shadow" />
        <article className="hero-card hero-stats-card">
          <div className="hero-stats-header">
            <div>
              <p className="card-label">QUICK STATS</p>
              <h2>At a glance.</h2>
            </div>
            <span className="hero-stats-badge">LIVE</span>
          </div>
          <div className="hero-stats-list">
            {stats.map((stat) => (
              <div className="hero-stat-row" key={stat.label}>
                <span>{stat.label}</span>
                <strong>
                  {stat.value === "experience"
                    ? `${experienceMonths} months`
                    : stat.value}
                </strong>
              </div>
            ))}
          </div>
          <p className="hero-stats-note">
            Growing with every project, challenge, and line of code.
          </p>
        </article>
      </div>
    </section>
  );
}
