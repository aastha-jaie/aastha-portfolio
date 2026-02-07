const projects = [
  {
    title: "Customer Onboarding Platform",
    description:
      "Built a self-serve onboarding workflow with guided forms, service health checks, and telemetry that reduced client onboarding time by 80% while maintaining auditability.",
    tags: ["React", "TypeScript", "Walmart Global Tech"],
  },
  {
    title: "Biz2X Lending Dashboard",
    description:
      "Designed and implemented responsive dashboards with analytics, funding status, and proactive alerts so customer success teams could prioritize $100M+ lending pipelines.",
    tags: ["React", "GraphQL", "Biz2Credit"],
  },
];

const skills = [
  "React",
  "JavaScript",
  "TypeScript",
  "Redux",
  "Redux Toolkit",
  "Java",
  "Spring",
  "GenAI",
  "REST APIs",
  "PostgreSQL",
  "Git",
  "CI/CD",
];

const socials = [
  { label: "Email", value: "aasthajaie22@gmail.com", href: "mailto:aasthajaie22@gmail.com" },
  { label: "GitHub", value: "https://github.com/aastha-jaie", href: "https://github.com/aastha-jaie" },
  {
    label: "LinkedIn",
    value: "https://www.linkedin.com/in/aastha-jaie/",
    href: "https://www.linkedin.com/in/aastha-jaie/",
  },
];

const experience = [
  {
    company: "Walmart Global Tech Ltd — Bengaluru, India",
    role: "Software Engineer III (Senior Level)",
    period: "Apr 2022 — Oct 2025",
    highlights: [
      "Directed delivery of executive dashboards and a self-serve onboarding portal used daily by 400+ users, automating 25 manual spreadsheets and compressing onboarding SLAs from three weeks to under five days (75% faster).",
      "Partnered with UX, product, and backend pods to map 30+ multi-step customer journeys and define scalable REST/GraphQL integrations that unlocked compliant launches across 4 international markets.",
      "Optimized React builds (code-splitting, state pruning, memoization) to reduce bundle size by 65% (1.1 MB to 380 KB) and cut re-render time by 40%, improving Lighthouse performance from 61 to 92.",
      "Mentored a pod of 8 junior engineers, codified review checklists, and facilitated 40+ technical interviews to scale the front-end guild without regression debt.",
    ],
  },
  {
    company: "Biz2Credit — Delhi, India",
    role: "Software Engineer",
    period: "Apr 2021 — Mar 2022",
    highlights: [
      "Built and iterated on the Biz2X customer dashboard UI so SMB lenders could track loan applications and financial analytics in real time, boosting daily active usage by 32% and reducing support tickets by 28%.",
      "Hardened authentication flows, accessibility, and performance budgets, lifting client-facing availability to 99.95% and contributing to a 10% revenue lift for lending partners.",
      "Collaborated closely with backend squads to define 15+ GraphQL/REST contracts, deliver full-stack features, and balance roadmap throughput with production stability.",
      "Introduced feature flags and A/B testing that cut rollout time for lender programs by 50% while improving borrower funnel conversion by 18%.",
    ],
  },
  {
    company: "Newgen Software Technologies — Noida, India",
    role: "Software Engineer",
    period: "Jul 2019 — Mar 2021",
    highlights: [
      "Delivered reusable UI modules for regulated banking applications (account opening, loan processing, account management) that reduced customization time by 52% across 6 Tier-1 banks.",
      "Partnered with 12+ client stakeholders to translate regulatory business requirements into UI specs and ship quarterly releases that passed RBI/FFIEC audits with zero findings.",
    ],
  },
];

export default function App() {
  return (
    <div className="page">
      <header className="hero" id="top">
        <nav className="nav">
          <div className="logo">AJ</div>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </div>
          <a className="nav-cta" href="/aastha-jaie_resume.pdf" download>
            Download Resume
          </a>
        </nav>

        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Software Engineer · Frontend + Full-Stack</p>
            <h1>
              Aastha Jaie
              <span>Delivering high-impact products with thoughtful UX and scalable systems.</span>
            </h1>
            <p className="lead">
              I design fast, human-first interfaces with React and TypeScript, and
              build durable backends with Java, Spring, and GenAI-powered workflows.
              I love shipping thoughtful UX, pragmatic architectures, and
              measurable impact.
            </p>
            <div className="hero-actions">
              <a className="primary" href="#projects">
                View Projects
              </a>
              <a className="ghost" href="#contact">
                Let&apos;s Talk
              </a>
            </div>
            <div className="stats">
              <div>
                <span className="stat-value">5+</span>
                <span className="stat-label">Major launches</span>
              </div>
              <div>
                <span className="stat-value">12+</span>
                <span className="stat-label">Product experiments</span>
              </div>
              <div>
                <span className="stat-value">3x</span>
                <span className="stat-label">Performance uplift</span>
              </div>
            </div>
          </div>
          <div className="hero-card">
            <div className="card-head">Currently focused</div>
            <ul>
              <li>Frontend architecture, performance, and accessibility</li>
              <li>GenAI + AI features integrated into product workflows</li>
              <li>Actively seeking frontend / full-stack roles</li>
            </ul>
            <div className="card-foot">
              <span>Open to interviews</span>
              <a href="#contact">Schedule a call</a>
            </div>
          </div>
        </div>
      </header>

      <section id="about" className="section about">
        <div>
          <h2>About</h2>
          <p>
            I&apos;m a full-stack engineer who blends product intuition with
            production-grade engineering. My work spans React, TypeScript, Redux
            Toolkit, Java, and Spring, with a growing focus on GenAI and
            intelligent automation. I care about the craft: clean states, clear
            boundaries, and interfaces that earn attention.
          </p>
        </div>
        <div className="about-panels">
          <div className="panel">
            <h3>What I deliver</h3>
            <p>
              Launch-ready web apps, scalable APIs, and data-driven flows that
              are easy to operate and delightful to use.
            </p>
          </div>
          <div className="panel">
            <h3>What I value</h3>
            <p>
              Tight feedback loops, product clarity, sustainable engineering, and
              measurable outcomes.
            </p>
          </div>
        </div>
      </section>

      <section id="experience" className="section experience">
        <div className="section-head">
          <h2>Experience</h2>
          <p>Impact-driven roles with product, platform, and GenAI initiatives.</p>
        </div>
        <div className="experience-list">
          {experience.map((item) => (
            <details key={item.company} className="experience-card">
              <summary className="experience-summary">
                <div>
                  <h3>{item.role}</h3>
                  <span className="experience-company">{item.company}</span>
                </div>
                <span className="experience-period">{item.period}</span>
              </summary>
              <ul className="experience-points">
                {item.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </details>
          ))}
        </div>
      </section>

      <section id="projects" className="section projects">
        <div className="section-head">
          <h2>Projects</h2>
          <p>Selected work across onboarding, lending, and regulated product experiences.</p>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <article key={project.title} className="project-card">
              <div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
              <div className="tag-row">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="skills" className="section skills">
        <div className="section-head">
          <h2>Skills</h2>
          <p>Tools and technologies I use to bring products to life.</p>
        </div>
        <div className="skill-grid">
          {skills.map((skill) => (
            <span key={skill} className="skill-chip">
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section className="section resume">
        <div>
          <h2>Resume</h2>
          <p>
            Download a copy of my latest resume for a full breakdown of roles,
            responsibilities, and outcomes.
          </p>
        </div>
        <a className="primary" href="/aastha-jaie_resume.pdf" download>
          Download Resume
        </a>
      </section>

      <section id="contact" className="section contact">
        <div className="section-head">
          <h2>Contact</h2>
          <p>Open to frontend / full-stack opportunities. I&apos;ll reply within 48 hours.</p>
        </div>
        <div className="contact-grid">
          {socials.map((social) => (
            <a key={social.label} className="contact-card" href={social.href}>
              <span>{social.label}</span>
              <strong>{social.value}</strong>
            </a>
          ))}
        </div>
      </section>

      <footer className="footer">
        <span>© 2026 Aastha Jaie. Building product-grade web and backend systems.</span>
        <a href="#top">Back to top</a>
      </footer>
    </div>
  );
}
