"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FiArrowUpRight, FiFacebook, FiGithub, FiMail, FiMoon, FiSun } from "react-icons/fi";
import { HiOutlineAcademicCap, HiOutlineCodeBracket, HiOutlineCommandLine, HiOutlineServerStack } from "react-icons/hi2";
import { LuDatabase, LuSparkles } from "react-icons/lu";

const skillGroups = [
  { icon: HiOutlineCodeBracket, title: "Frontend", description: "Accessible interfaces that feel fast, focused, and intuitive.", skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"], accent: "violet" },
  { icon: HiOutlineServerStack, title: "Backend", description: "Reliable services and APIs built around real product needs.", skills: ["Node.js", "Express.js", "REST APIs", "Authentication", "Authorization"], accent: "cyan" },
  { icon: LuDatabase, title: "Data & tools", description: "Organized data models and workflows that are easy to maintain.", skills: ["MongoDB", "Mongoose", "Git", "GitHub", "API testing", "Deployment"], accent: "amber" },
];

const projects = [
  { number: "01", title: "Dhismo Project", description: "A modern project for presenting building and construction work through a clear, professional, and responsive interface.", tags: ["React", "JavaScript", "Responsive UI"], href: "https://github.com/" },
  { number: "02", title: "Game Next Project", description: "An engaging gaming-focused web experience designed to make discovering and exploring games simple and enjoyable.", tags: ["Next.js", "UI design", "Responsive web"], href: "https://github.com/" },
];

const roadmap = ["Problem solving & algorithms", "Software architecture & system design", "Testing, security & quality", "Scalability, performance & CI/CD"];

export default function PortfolioPage() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <main className={`portfolio ${darkMode ? "dark" : ""}`}>
      <div className="noise" aria-hidden="true" />
      <nav className="nav container" aria-label="Main navigation">
        <Link className="brand" href="#top" aria-label="Mohamed Abdulkadir home">MA<span>.</span></Link>
        <div className="nav-links"><Link href="#about">About</Link><Link href="#stack">Stack</Link><Link href="#work">Work</Link><Link href="#contact">Contact</Link></div>
        <button className="theme-toggle" onClick={() => setDarkMode((value) => !value)} aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}>{darkMode ? <FiSun /> : <FiMoon />}</button>
      </nav>

      <section className="hero container" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span /> Available for learning & collaboration</p>
          <h1>Building with purpose.<br /><em>Engineering what&apos;s next.</em></h1>
          <p className="hero-text">I&apos;m Mohamed, a self-taught <strong>Full-Stack Developer</strong> building toward Software Engineering. I turn ideas into reliable, maintainable web experiences.</p>
          <div className="hero-actions"><Link className="button button-primary" href="#work">View my work <FiArrowUpRight /></Link><Link className="button button-ghost" href="mailto:maxamedgoley@gmail.com">Let&apos;s connect <FiMail /></Link></div>
          <div className="socials"><Link href="https://github.com/" target="_blank" rel="noreferrer"><FiGithub /> GitHub</Link><Link href="https://www.facebook.com/" target="_blank" rel="noreferrer"><FiFacebook /> Facebook</Link></div>
        </div>
        <div className="hero-visual"><div className="portrait-frame"><Image src="/SecMoha.jpeg" alt="Mohamed Abdulkadir Abdullahi" width={420} height={520} priority /></div><div className="code-card"><span>const</span> direction = <b>&quot;software engineer&quot;</b>;</div><div className="orbit orbit-one" /><div className="orbit orbit-two" /></div>
      </section>

      <div className="metrics container"><div><strong>01</strong><span>Curious mind</span></div><div><strong>∞</strong><span>Always learning</span></div><div><strong>24/7</strong><span>Building mindset</span></div></div>

      <section className="section container" id="about"><div className="section-label"><span>01</span><span>About me</span></div><div className="about-grid"><h2>More than a stack.<br /><em>A way of thinking.</em></h2><div className="about-copy"><p>I started with frontend development and kept going deeper—into backend services, databases, APIs, authentication, and deployment.</p><p>Today, I focus on understanding how the pieces work together. I enjoy the full journey: understanding a problem, designing a solution, building it, testing it, and improving it.</p><div className="principle"><LuSparkles /><span>Understand → Plan → Design → Build → Test → Improve</span></div></div></div></section>

      <section className="section container" id="stack"><div className="section-label"><span>02</span><span>What I work with</span></div><div className="stack-heading"><h2>Tools for turning<br /><em>ideas into systems.</em></h2><p>My toolkit keeps growing, but the goal stays the same: build useful software that lasts.</p></div><div className="skills-grid">{skillGroups.map(({ icon: Icon, title, description, skills, accent }) => <article className={`skill-card ${accent}`} key={title}><div className="skill-icon"><Icon /></div><h3>{title}</h3><p>{description}</p><div className="tags">{skills.map((skill) => <span key={skill}>{skill}</span>)}</div></article>)}</div></section>

      <section className="section container" id="work"><div className="section-label"><span>03</span><span>Selected work</span></div><div className="work-heading"><h2>Learning by<br /><em>building.</em></h2><p>Real projects are where technical knowledge becomes engineering judgment.</p></div><div className="projects-grid">{projects.map((project) => <article className="project-card" key={project.number}><div className="project-top"><span>{project.number}</span><Link href={project.href} target="_blank" rel="noreferrer" aria-label={`Open ${project.title} repository`}><FiArrowUpRight /></Link></div><h3>{project.title}</h3><p>{project.description}</p><div className="tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></article>)}</div></section>

      <section className="section container journey"><div className="section-label"><span>04</span><span>Next chapter</span></div><div className="journey-grid"><div><h2>From developer<br />to <em>engineer.</em></h2><p>I&apos;m actively developing the habits and technical depth required to build software professionally—and eventually, AI-powered products.</p></div><div className="roadmap">{roadmap.map((item, index) => <div className="roadmap-item" key={item}><span>0{index + 1}</span><p>{item}</p><HiOutlineCommandLine /></div>)}</div></div></section>

      <section className="contact container" id="contact"><div className="contact-icon"><HiOutlineAcademicCap /></div><p className="eyebrow">Have an idea in mind?</p><h2>Let&apos;s build something<br /><em>meaningful.</em></h2><Link className="button button-primary" href="mailto:maxamedgoley@gmail.com">Say hello <FiMail /></Link></section>
      <footer className="footer container"><span>© 2026 Mohamed Abdulkadir Abdullahi</span><span>Full-Stack Developer · Building toward Software Engineering</span></footer>
    </main>
  );
}
