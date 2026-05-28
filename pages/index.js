import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ArrowUpRight, Moon, Sun } from "lucide-react";

const contributions = [
  {
    text: "Conducted Stern Undergraduate Research on labor-market survey structure, wage-cycle inflection points, and monetary policy expectations.",
    href: "/spur-writing-sample.pdf",
    label: "Writing sample",
  },
  {
    text: "Built an NLP workflow for FOMC transcripts, tracking inflation and labor-market concern through central bank communication.",
  },
  {
    text: "Created valuation, sensitivity, and three-statement forecasting work as an Investment Banking Intern in the Healthcare Group at Integrus Partners.",
  },
  {
    text: "Researched the Southwest Energy O&M sector at Hevesta Capital, developing sourcing frameworks for acquisition targets.",
  },
  {
    text: "Built finance-focused technical projects including a Black-Scholes option pricing visualizer and earnings surprise analysis.",
    href: "https://github.com/Vihaan-Narvekar",
    label: "GitHub",
  },
];

const experience = [
  [
    "NYU Department of Finance",
    "Researcher, Monetary Policy Communication Risk Monitor",
    "May 2026 - Present",
  ],
  [
    "NYU Stern Undergraduate Research",
    "Undergraduate Researcher, labor market volatility and policy expectations",
    "Sep 2025 - Jan 2026",
  ],
  ["Primerica", "Incoming Data Science Analyst", "Summer 2026"],
  ["Integrus Partners", "Investment Banking Intern, Healthcare Group", "Aug 2025 - Oct 2025"],
  ["Hevesta Capital", "Private Equity Intern", "Jul 2025 - Aug 2025"],
  ["InspirEdu", "Accounting Intern", "May 2025 - Jul 2025"],
];

const skills = [
  "Python",
  "Pandas",
  "scikit-learn",
  "TensorFlow",
  "R",
  "SQL",
  "C++",
  "Bloomberg Terminal",
  "S&P Capital IQ",
  "Excel",
];

function InlineLink({ href, children }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
      <ArrowUpRight size={13} />
    </a>
  );
}

export default function Home() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialTheme = savedTheme || (prefersDark ? "dark" : "light");

    setTheme(initialTheme);
    document.documentElement.dataset.theme = initialTheme;
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const handlePointerMove = (event) => {
      document.documentElement.style.setProperty("--pointer-x", `${event.clientX}px`);
      document.documentElement.style.setProperty("--pointer-y", `${event.clientY}px`);
    };

    window.addEventListener("pointermove", handlePointerMove);
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, []);

  return (
    <>
      <Head>
        <title>Vihaan Narvekar</title>
        <meta
          name="description"
          content="Vihaan Narvekar's personal site, resume, research, and technical work."
        />
      </Head>

      <main className="site-page">
        <header className="site-header">
          <a className="name-link" href="#top">
            Vihaan Narvekar
          </a>
          <nav aria-label="Primary navigation">
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              Resume
            </a>
            <a href="https://github.com/Vihaan-Narvekar" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/vihaan-narvekar/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a href="https://x.com/VihaanNarvekar" target="_blank" rel="noopener noreferrer">
              X
            </a>
            <button
              className="theme-toggle"
              type="button"
              onClick={() => setTheme((currentTheme) => (currentTheme === "dark" ? "light" : "dark"))}
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            >
              {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
            </button>
          </nav>
        </header>

        <section className="intro" id="top">
          <div className="intro-copy">
            <h1>About</h1>
            <p>
              Thanks for stopping by my page. I&apos;m a student at New York University&apos;s
              Leonard N. Stern School of Business studying Business with concentrations in Finance
              and Data Science, alongside a B.S. in Computer Science.
            </p>
            <p>
              I&apos;m interested in the places where finance and technical work meet: macroeconomic
              research, financial modeling, market structure, and data systems that make complicated
              information easier to interpret.
            </p>
            <p>
              At NYU, I&apos;m involved with Stern Undergraduate Research, the Quantitative Finance
              Society, and the Business Analytics Club. My recent research work has focused on labor
              market data, BLS survey methodology, and the relationship between employment signals
              and monetary policy expectations.
            </p>
          </div>
          <div className="headshot-wrap">
            <Image
              className="headshot"
              src="/headshot.jpg"
              alt="Vihaan Narvekar"
              width="168"
              height="168"
              priority
            />
          </div>
        </section>

        <section className="section">
          <h2>Selected Work</h2>
          <ul className="contribution-list">
            {contributions.map((item) => (
              <li key={item.text}>
                <span>{item.text}</span>
                {item.href ? <InlineLink href={item.href}>{item.label}</InlineLink> : null}
              </li>
            ))}
          </ul>
        </section>

        <section className="section">
          <h2>Experience</h2>
          <div className="experience-list">
            {experience.map(([company, role, date]) => (
              <article key={`${company}-${role}`}>
                <div>
                  <h3>{company}</h3>
                  <p>{role}</p>
                </div>
                <span>{date}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="section">
          <h2>Education</h2>
          <p>
            New York University, Leonard N. Stern School of Business. B.S. in Business with
            concentrations in Finance and Data Science; B.S. in Computer Science. Cumulative GPA:
            3.9/4.0.
          </p>
          <p className="muted">
            Relevant coursework: Probability Theory, Data Science and AI, Futures and Options, and
            Multivariable Calculus.
          </p>
        </section>

        <section className="section">
          <h2>Skills</h2>
          <div className="skill-row">
            {skills.map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
        </section>

        <footer className="footer">
          <p>Vihaan Narvekar</p>
          <div>
            <a href="mailto:vihaan.narvekar@stern.nyu.edu">Email</a>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              Resume
            </a>
            <a href="/spur-writing-sample.pdf" target="_blank" rel="noopener noreferrer">
              Writing sample
            </a>
            <a href="https://x.com/VihaanNarvekar" target="_blank" rel="noopener noreferrer">
              X
            </a>
          </div>
        </footer>
      </main>
    </>
  );
}
