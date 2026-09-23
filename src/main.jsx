import React, { useEffect, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import {
  profile,
  projects,
  skills,
  stats,
  timeline,
  achievements,
} from "./data";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import {
  About,
  Projects,
  Skills,
  Journey,
  XP,
  Contact,
} from "./components/Sections";

function App() {
  const [deck, setDeck] = useState(skills);
  const deckRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach(
          (entry) =>
            entry.isIntersecting && entry.target.classList.add("is-visible"),
        ),
      { threshold: 0.12 },
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  return (
    <div className="site-shell">
      <a className="skip-link" href="#about">
        Skip to content
      </a>
      <Header profile={profile} />
      <main id="top">
        <Hero profile={profile} stats={stats} />
        <About profile={profile} />
        <Projects projects={projects} profile={profile} />
        <Skills
          skills={skills}
          deck={deck}
          setDeck={setDeck}
          deckRef={deckRef}
        />
        <Journey timeline={timeline} />
        <XP achievements={achievements} />
        <Contact profile={profile} />
      </main>
      <Footer />
    </div>
  );
}
createRoot(document.getElementById("root")).render(<App />);
