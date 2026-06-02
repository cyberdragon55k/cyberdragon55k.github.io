"use client"

import { useEffect, useState } from "react"

export default function Home() {
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [uptime, setUptime] = useState(0)

  useEffect(() => {
    // Dynamic Session Uptime Counter
    const timer = setInterval(() => setUptime((prev) => prev + 1), 1000)

    // Update the system clock and metrics bar dynamically
    function updateClock() {
      const now = new Date()
      const timeStr =
        now.getHours().toString().padStart(2, "0") +
        ":" +
        now.getMinutes().toString().padStart(2, "0") +
        ":" +
        now.getSeconds().toString().padStart(2, "0")
      const statusElement = document.querySelector(".system-status")
      if (statusElement) {
        statusElement.textContent = `SYS_UP: ${timeStr} | CPU: ${Math.floor(Math.random() * 20) + 5}%`
      }
    }
    updateClock()
    const clockInterval = setInterval(updateClock, 1000)

    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowScrollTop(true)
      } else {
        setShowScrollTop(false)
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      clearInterval(timer)
      clearInterval(clockInterval)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const formatUptime = (seconds: number) => {
    const hrs = Math.floor(seconds / 3600).toString().padStart(2, '0')
    const mins = Math.floor((seconds % 3600) / 60).toString().padStart(2, '0')
    const secs = (seconds % 60).toString().padStart(2, '0')
    return `${hrs}:${mins}:${secs}`
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <>
      {showScrollTop && (
        <button onClick={scrollToTop} className="scroll-to-top" aria-label="Scroll to top">
          <span className="scroll-arrow">↑</span>
        </button>
      )}

      {/* Header Section (Mobile Optimized) */}
      <header>
        <div className="container" style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "16px", padding: "16px 0" }}>
          <div className="logo" style={{ fontSize: "1.2rem", fontWeight: "bold", whiteSpace: "nowrap" }}>
            System.Ref
          </div>
          <nav className="nav-links" style={{ display: "flex", flexWrap: "wrap", gap: "16px", justifyContent: "center", fontSize: "0.75rem" }}>
            <a href="#about">ABOUT ME</a>
            <a href="#work">PROJECTS</a>
            <a href="#experience">EXPERIENCE</a>
            <a href="#lab">SKILLS</a>
            <a href="#footer-node">CONTACT</a>
          </nav>
          <div className="system-status" style={{ fontSize: "0.75rem", color: "var(--accent)", whiteSpace: "nowrap", textAlign: "right" }}>
            SYS_UP: 00:00:00 | CPU: --%
          </div>
        </div>
      </header>

      <div className="container">
        {/* Hero Section */}
        <section className="hero">
          <div className="hero-content">
            <p style={{ color: "var(--accent)", marginBottom: "10px" }}>{"[ INITIALIZING PROTOCOL... ]"}</p>
            
            {/* Added Identity Node Here */}
            <h2 style={{ fontSize: "1.2rem", color: "var(--text-secondary)", marginBottom: "8px", fontFamily: "monospace", letterSpacing: "2px" }}>
              ADITYA_NAMDEO //
            </h2>

            <h1 style={{ textTransform: "uppercase" }}>
              DATA & ML <span>SYSTEMS</span> DEVELOPER
            </h1>
            <p style={{ fontSize: "1.2rem", lineHeight: "1.8", maxWidth: "600px", color: "var(--text-secondary)" }}>
              Researching and implementing deep learning models,
              training predictive regression arrays, and automating n8n pipeline workflows 
              from native Kotlin backend layers to live cloud deployments.
            </p>
            
            {/* Front Page Action Controls & Social Nodes */}
            <div style={{ display: "flex", alignItems: "center", flexDirection: "row", flexWrap: "nowrap", gap: "12px", marginTop: "32px", width: "100%" }}>
              <a 
                href="#work" 
                className="btn-retro" 
                style={{ margin: 0, transition: "all 0.2s ease" }}
                onMouseOver={(e) => { e.currentTarget.style.transform = 'translate(-2px, -2px)'; }}
                onMouseOut={(e) => { e.currentTarget.style.transform = 'translate(0px, 0px)'; }}
              >
                EXPLORE FILES
              </a>

              {/* NEW RESUME PROTOCOL DOWNLOAD BUTTON */}
              <a 
                href="/AdityaNamdeoResume.pdf" 
                download="Aditya_Namdeo_Resume.pdf"
                style={{ 
                  margin: 0, 
                  padding: "10px 20px",
                  background: "transparent",
                  color: "var(--accent)",
                  border: "1px solid var(--accent)",
                  fontFamily: "monospace",
                  fontSize: "0.8rem",
                  fontWeight: "bold",
                  textDecoration: "none",
                  transition: "all 0.2s ease",
                  display: "inline-flex",
                  alignItems: "center",
                  whiteSpace: "nowrap"
                }}
                onMouseOver={(e) => { 
                  e.currentTarget.style.transform = 'translate(-2px, -2px)'; 
                  e.currentTarget.style.background = 'rgba(250, 84, 28, 0.05)'; 
                }}
                onMouseOut={(e) => { 
                  e.currentTarget.style.transform = 'translate(0px, 0px)'; 
                  e.currentTarget.style.background = 'transparent'; 
                }}
              >
                GET_RESUME.PDF
              </a>

              <div style={{ display: "flex", gap: "12px" }}>
                <a href="https://github.com/cyberdragon55k" target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "42px", height: "42px", border: "1px solid #333", background: "#0a0a0a", borderRadius: "8px", color: "#a1a1aa", transition: "all 0.2s" }} onMouseOver={(e) => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent)'; }} onMouseOut={(e) => { e.currentTarget.style.borderColor = '#333'; e.currentTarget.style.color = '#a1a1aa'; }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                </a>
                <a href="https://www.linkedin.com/in/adityanamdeo" target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "42px", height: "42px", border: "1px solid #333", background: "#0a0a0a", borderRadius: "8px", color: "#a1a1aa", transition: "all 0.2s" }} onMouseOver={(e) => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent)'; }} onMouseOut={(e) => { e.currentTarget.style.borderColor = '#333'; e.currentTarget.style.color = '#a1a1aa'; }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                </a>
                <a href="https://x.com/cyberdragon55k" target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "42px", height: "42px", border: "1px solid #333", background: "#0a0a0a", borderRadius: "8px", color: "#a1a1aa", transition: "all 0.2s" }} onMouseOver={(e) => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent)'; }} onMouseOut={(e) => { e.currentTarget.style.borderColor = '#333'; e.currentTarget.style.color = '#a1a1aa'; }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16z"/><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"/></svg>
                </a>
              </div>
            </div>

          </div>
          <div className="window-frame">
            <div className="window-header">
              <span>PORTRAIT_01.JPG</span>
              <div className="window-controls">
                <button className="window-btn" aria-label="Minimize">
                  <span className="minimize-icon"></span>
                </button>
                <button className="window-btn" aria-label="Maximize">
                  <span className="maximize-icon"></span>
                </button>
                <button className="window-btn window-close" aria-label="Close">
                  <span className="close-icon"></span>
                </button>
              </div>
            </div>
            <img src="/hero-portrait.jpg" alt="Professional Portrait" className="hero-image" />
          </div>
        </section>

        {/* Real-time Engineering Stats Bar */}
        <div className="stats-bar font-mono">
          <div className="stat-item">
            <div className="stat-val" style={{ color: "var(--accent)" }}>01</div>
            <div className="stat-label">ML INTERNSHIP</div>
          </div>
          <div className="stat-item">
            <div className="stat-val" style={{ color: "var(--accent)" }}>05+</div>
            <div className="stat-label">MODELS DEPLOYED</div>
          </div>
          <div className="stat-item">
            <div className="stat-val" style={{ color: "var(--accent)" }}>17</div>
            <div className="stat-label">CORE REPOS</div>
          </div>
          <div className="stat-item">
            <div className="stat-val" style={{ color: "var(--accent)" }}><span className="tabular-nums">{formatUptime(uptime)}</span></div>
            <div className="stat-label">SESSION_UPTIME</div>
          </div>
        </div>

        {/* SEC_01: About Me Terminal Sector */}
        <section id="about" style={{ scrollMarginTop: "80px", marginTop: "60px", marginBottom: "60px" }} className="font-mono">
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #222", paddingBottom: "8px", marginBottom: "24px" }}>
            <span style={{ color: "var(--accent)", fontSize: "0.8rem", fontWeight: "bold" }}>[ SEC_01 // USER_PROFILE_LOGS ]</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: "32px", alignItems: "start" }}>
            {/* Narrative Summary */}
            <div style={{ color: "var(--text-secondary)", fontSize: "0.9rem", lineHeight: "1.6" }}>
              <h2 style={{ color: "#fff", fontSize: "1.8rem", fontWeight: "900", textTransform: "uppercase", marginBottom: "16px", letterSpacing: "-0.05em" }}>
                $ WHO <span style={{ background: "linear-gradient(to right, #00f2fe, #9b51e0)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>AM I</span>
              </h2>
              <p style={{ marginBottom: "14px" }}>
                I'm an undergraduate <span style={{ color: "#fff", borderBottom: "1px solid #444" }}>Computer Software Engineering</span> student at BGIEM with a core focus on building resilient, intelligent systems. My academic and development track drives me to bridge complex data structures and algorithmic logic straight into clean, production-grade deployment code.
              </p>
              <p style={{ marginBottom: "14px" }}>
                Recently I have completed my experience as a <span style={{ color: "var(--accent)", fontWeight: "bold" }}>Machine Learning Intern</span> at the Suvidha Foundation, where I focused on researching, building, and deploying deep learning models. My work inside advanced tech spaces is backed by global recognition, highlighted by my selection as a delegate for the international <span style={{ color: "#fff", fontWeight: "bold" }}>HPAIR 2026 Harvard Conference</span>.
              </p>
              <p style={{ color: "#666", fontSize: "0.75rem", borderLeft: "2px solid #222", paddingLeft: "12px", fontStyle: "italic" }}>
                "When I'm not compiling predictive models in Python, you'll find me engineering backend microservices in Kotlin, orchestrating automated workflow node sequences via n8n, or analyzing runtime script bottlenecks."
              </p>
            </div>

            {/* Core Capability Pillars */}
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <div style={{ border: "1px solid #222", background: "#0a0a0a", padding: "16px" }}>
                <h3 style={{ fontSize: "0.75rem", color: "var(--accent)", textTransform: "uppercase", fontWeight: "bold", margin: "0 0 6px 0", letterSpacing: "0.05em" }}>
                  01 // Machine Learning
                </h3>
                <p style={{ fontSize: "0.75rem", color: "#a1a1aa", margin: 0, lineHeight: "1.5" }}>
                  Researching deep learning frameworks, training predictive regression arrays, and integrating generative vision automation pipelines like the Avi engine.
                </p>
              </div>
              <div style={{ border: "1px solid #222", background: "#0a0a0a", padding: "16px" }}>
                <h3 style={{ fontSize: "0.75rem", color: "var(--accent)", textTransform: "uppercase", fontWeight: "bold", margin: "0 0 6px 0", letterSpacing: "0.05em" }}>
                  02 // Data Engineering
                </h3>
                <p style={{ fontSize: "0.75rem", color: "#a1a1aa", margin: 0, lineHeight: "1.5" }}>
                  Structuring rule-based data cleaning engines, processing massive training sequences, and optimizing curated datasets for model validation token targets.
                </p>
              </div>
              <div style={{ border: "1px solid #222", background: "#0a0a0a", padding: "16px" }}>
                <h3 style={{ fontSize: "0.75rem", color: "var(--accent)", textTransform: "uppercase", fontWeight: "bold", margin: "0 0 6px 0", letterSpacing: "0.05em" }}>
                  03 // Systems Integration
                </h3>
                <p style={{ fontSize: "0.75rem", color: "#a1a1aa", margin: 0, lineHeight: "1.5" }}>
                  Orchestrating automated operational node networks using n8n, building structured application back-ends in Kotlin, and configuring localized infrastructure server clusters.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SEC_02: Portfolio Deployments */}
        <section id="work" style={{ scrollMarginTop: "80px" }}>
          <h2 className="section-title">Latest Deployments</h2>
          <div className="portfolio-grid">
            <div className="project-card">
              <div className="window-header" style={{ background: "#333", color: "#fff" }}>
                <span>PROJECT_ALPHA // NEWSSUMM++</span>
                <div className="window-controls">
                  <button className="window-btn" aria-label="Minimize"><span className="minimize-icon"></span></button>
                  <button className="window-btn" aria-label="Maximize"><span className="maximize-icon"></span></button>
                  <button className="window-btn window-close" aria-label="Close"><span className="close-icon"></span></button>
                </div>
              </div>
              <img src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&q=80" alt="Retro Tech" className="project-img" />
              <div className="project-info">
                <span className="project-tag">#DATA_ENGINEERING #NLP</span>
                <h3 className="project-title">NewsSumm++ Corpus Optimizer</h3>
                <p style={{ fontSize: "0.8rem", color: "var(--text-secondary)" }}>
                  Engineered a highly refined text dataset by designing rule-based parsing algorithms to clear formatting noise from large text collections.
                </p>
              </div>
            </div>

            <div className="project-card">
              <div className="window-header" style={{ background: "#333", color: "#fff" }}>
                <span>PROJECT_BETA // VALUATION_ENGINE</span>
                <div className="window-controls">
                  <button className="window-btn" aria-label="Minimize"><span className="minimize-icon"></span></button>
                  <button className="window-btn" aria-label="Maximize"><span className="maximize-icon"></span></button>
                  <button className="window-btn window-close" aria-label="Close"><span className="close-icon"></span></button>
                </div>
              </div>
              <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&q=80" alt="Coding" className="project-img" />
              <div className="project-info">
                <span className="project-tag">#MACHINE_LEARNING #REGRESSION</span>
                <h3 className="project-title">Used Bike Price Predictor</h3>
                <p style={{ fontSize: "0.8rem", color: "var(--text-secondary)" }}>
                  Developed an end-to-end ML valuation matrix using custom localized feature tracking pipelines to calculate marketplace asset values.
                </p>
              </div>
            </div>

            <div className="project-card">
              <div className="window-header" style={{ background: "#333", color: "#fff" }}>
                <span>PROJECT_GAMMA // AUTOMATION</span>
                <div className="window-controls">
                  <button className="window-btn" aria-label="Minimize"><span className="minimize-icon"></span></button>
                  <button className="window-btn" aria-label="Maximize"><span className="maximize-icon"></span></button>
                  <button className="window-btn window-close" aria-label="Close"><span className="close-icon"></span></button>
                </div>
              </div>
              <img src="https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=600&q=80" alt="Abstract Art" className="project-img" />
              <div className="project-info">
                <span className="project-tag">#SYSTEMS #RASPBERRY_PI</span>
                <h3 className="project-title">n8n Automation Architecture</h3>
                <p style={{ fontSize: "0.8rem", color: "var(--text-secondary)" }}>
                  Configured a local server system node on hardware utilizing specialized automated workflows for system syncs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SEC_03: Experience & Education Vertical Stack Tracker */}
        <section id="experience" style={{ scrollMarginTop: "80px", marginTop: "80px", marginBottom: "80px" }} className="font-mono">
          <div style={{ display: "flex", alignItems: "center", borderBottom: "1px solid #222", paddingBottom: "8px", marginBottom: "40px" }}>
            <span style={{ color: "var(--accent)", fontSize: "0.8rem", fontWeight: "bold" }}>[ SEC_03 // CHRONOLOGICAL_LOGS ]</span>
          </div>

          <h2 style={{ color: "#fff", fontSize: "1.8rem", fontWeight: "900", textTransform: "uppercase", marginBottom: "32px", letterSpacing: "-0.05em" }}>
            JOURNEY // <span style={{ background: "linear-gradient(to right, #00f2fe, #9b51e0)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>HISTORY</span>
          </h2>

          <div style={{ position: "relative", maxWidth: "800px", margin: "0 auto", paddingLeft: "20px" }}>
            <div style={{ position: "absolute", left: "0", top: "8px", bottom: "8px", width: "2px", background: "linear-gradient(to bottom, #00f2fe 0%, #fa541c 50%, #9b51e0 100%)" }}></div>

            <div style={{ position: "relative", marginBottom: "40px", paddingLeft: "20px" }}>
              <div style={{ position: "absolute", left: "-24px", top: "4px", width: "10px", height: "10px", backgroundColor: "#00f2fe", border: "2px solid #000" }}></div>
              <div style={{ border: "1px solid #222", background: "#0a0a0a", padding: "20px" }}>
                <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "baseline", gap: "10px", borderBottom: "1px dashed #222", paddingBottom: "6px", marginBottom: "12px" }}>
                  <div>
                    <span style={{ fontSize: "0.65rem", color: "#00f2fe", border: "1px solid rgba(0,242,254,0.3)", padding: "2px 6px", background: "rgba(0,242,254,0.05)", marginRight: "8px" }}>WORK</span>
                    <h3 style={{ display: "inline-block", fontSize: "1rem", fontWeight: "bold", color: "#fff", margin: 0 }}>MACHINE LEARNING INTERN</h3>
                  </div>
                  <span style={{ fontSize: "0.75rem", color: "#555" }}>MARCH 2026 - PRESENT // REMOTE</span>
                </div>
                <h4 style={{ fontSize: "0.8rem", color: "var(--accent)", margin: "0 0 12px 0", fontWeight: "bold" }}>SUVIDHA FOUNDATION</h4>
                <ul style={{ margin: "0 0 16px 0", paddingLeft: "16px", color: "var(--text-secondary)", fontSize: "0.8rem" }} className="space-y-2">
                  <li>Engineered large data pipelines applying custom rule-based parsing architectures.</li>
                  <li>Pruned textual dataset anomalies to lock target training pairs down within high-quality validation thresholds.</li>
                  <li>Collaborated on building machine learning algorithms for system data automation.</li>
                </ul>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                  {["Python", "Dataset Cleaning", "ML Pipelines", "Rule-Based Logic"].map((tag) => (
                    <span key={tag} style={{ fontSize: "0.65rem", color: "#666", border: "1px solid #222", padding: "2px 8px", background: "#050505" }}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>

            <div style={{ position: "relative", paddingLeft: "20px" }}>
              <div style={{ position: "absolute", left: "-24px", top: "4px", width: "10px", height: "10px", backgroundColor: "#9b51e0", border: "2px solid #000" }}></div>
              <div style={{ border: "1px solid #222", background: "#0a0a0a", padding: "20px" }}>
                <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "baseline", gap: "10px", borderBottom: "1px dashed #222", paddingBottom: "6px", marginBottom: "12px" }}>
                  <div>
                    <span style={{ fontSize: "0.65rem", color: "#9b51e0", border: "1px solid rgba(155,81,224,0.3)", padding: "2px 6px", background: "rgba(155,81,224,0.05)", marginRight: "8px" }}>EDUCATION</span>
                    <h3 style={{ display: "inline-block", fontSize: "1rem", fontWeight: "bold", color: "#fff", margin: 0 }}>B.TECH IN COMPUTER SCIENCE</h3>
                  </div>
                  <span style={{ fontSize: "0.75rem", color: "#555" }}>2024 - PRESENT // JABALPUR</span>
                </div>
                <h4 style={{ fontSize: "0.8rem", color: "var(--accent)", margin: "0 0 12px 0", fontWeight: "bold" }}>BADERIA GLOBAL INSTITUTE OF ENGINEERING & MANAGEMENT</h4>
                <ul style={{ margin: "0 0 16px 0", paddingLeft: "16px", color: "var(--text-secondary)", fontSize: "0.8rem" }} className="space-y-2">
                  <li>Currently specializing in Machine Learning paradigms and foundational Core System Designs.</li>
                  <li>Deeply engaging in core Data Structures & Algorithms (DSA) optimization metrics using C++.</li>
                  <li>Managing local terminal deployments, distributed system architectures, and scripting automation protocols.</li>
                </ul>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                  {["C++ (DSA)", "Python", "SQL Databases", "System Architecture"].map((tag) => (
                    <span key={tag} style={{ fontSize: "0.65rem", color: "#666", border: "1px solid #222", padding: "2px 8px", background: "#050505" }}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Marquee */}
      <div className="marquee-container">
        <div className="marquee-text">
          <span>DATA ENGINE SYSTEMS • </span>
          <span>MACHINE LEARNING OPERATIONS • </span>
          <span>BUILDING CORES • </span>
          <span>RETRO STYLING MODERN TECH • </span>
          <span>DATA ENGINE SYSTEMS • </span>
          <span>MACHINE LEARNING OPERATIONS • </span>
          <span>BUILDING CORES • </span>
          <span>RETRO STYLING MODERN TECH • </span>
        </div>
      </div>

      <div className="container">
        {/* SEC_04: Terminal Section */}
        <section className="terminal-section" id="lab" style={{ scrollMarginTop: "80px" }}>
          <div className="terminal-header">SYSTEM_CONSOLE.EXE</div>
          <div className="terminal-row">
            <span className="prompt">{"guest@system:~$"}</span>
            <span className="command">fetch skills --all</span>
          </div>
          <div className="terminal-row">
            <span className="output">{"> Analyzing system core competencies..."}</span>
          </div>
          
          <div className="terminal-row">
            <span className="output">{"[████████████████████] 100% - PYTHON & DEEP LEARNING (TENSORFLOW, PYTORCH)"}</span>
          </div>
          <div className="terminal-row">
            <span className="output">{"[███████████████████░] 95%  - DATA PIPELINES & ENGINEERING (PANDAS, NUMPY, SCIKIT-LEARN)"}</span>
          </div>
          <div className="terminal-row">
            <span className="output">{"[██████████████░░░░░░] 70%  - DATA STRUCTURES & ALGORITHMS (C++ / OOP)"}</span>
          </div>
          <div className="terminal-row">
            <span className="output">{"[████████████░░░░░░░░] 60%  - DATA RELATIONS & ARCHITECTURES (SQL / MYSQL)"}</span>
          </div>
          <div className="terminal-row">
            <span className="output">{"[████████████░░░░░░░░] 60%  - WORKFLOW PIPELINE AUTOMATION (n8n, GIT)"}</span>
          </div>
          <div className="terminal-row">
            <span className="output">{"[████░░░░░░░░░░░░░░░░] 20%  - ANDROID DEV (KOTLIN)"}</span>
          </div>
          <div className="terminal-row">
            <span className="output">{"[██████████████████░░] 90%  - TECHNICAL ORCHESTRATION (TEAM MANAGEMENT, EVENT COORDINATION)"}</span>
          </div>

          <div className="terminal-row">
            <span className="prompt">{"guest@system:~$"}</span>
            <span className="command">run contact_protocol.sh</span>
          </div>
          <div className="terminal-row">
            <span className="output">
              {"> Establishing secure peer-to-peer data tunnel connection... "}
              <span className="cursor-blink">_</span>
            </span>
          </div>
        </section>

        {/* SEC_05: The Communication Port (Contact Form) */}
        <section id="footer-node" style={{ scrollMarginTop: "80px", marginTop: "100px", marginBottom: "60px" }} className="font-mono">
          <div style={{ display: "flex", alignItems: "center", borderBottom: "1px solid #222", paddingBottom: "8px", marginBottom: "40px" }}>
            <span style={{ color: "var(--accent)", fontSize: "0.8rem", fontWeight: "bold" }}>[ SEC_05 // COMMUNICATION_PORT ]</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-5 space-y-6">
              <h2 style={{ color: "#fff", fontSize: "1.8rem", fontWeight: "900", textTransform: "uppercase", letterSpacing: "-0.05em", marginBottom: "16px" }}>
                INITIATE <span style={{ background: "linear-gradient(to right, #00f2fe, #9b51e0)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>PING</span>
              </h2>
              <p style={{ color: "var(--text-secondary)", fontSize: "0.85rem", lineHeight: "1.6" }}>
                Have a complex dataset to prune, an algorithmic structure to optimize, or just want to chat about AI? Open a secure channel.
              </p>

              <div style={{ border: "1px solid #222", background: "#0a0a0a", padding: "20px" }}>
                <h3 style={{ fontSize: "0.75rem", color: "#fff", textTransform: "uppercase", fontWeight: "bold", marginBottom: "16px" }}>// SECURE_ENDPOINTS</h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px", fontSize: "0.8rem", color: "#a1a1aa" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <span style={{ color: "var(--accent)" }}>[@]</span> <span>aditya5namdeo@gmail.com</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <span style={{ color: "var(--accent)" }}>[LOC]</span> <span>Jabalpur, Madhya Pradesh, IN</span>
                  </div>
                </div>
              </div>

              <div style={{ border: "1px solid var(--accent)", background: "rgba(250, 84, 28, 0.05)", padding: "20px" }}>
                <h3 style={{ fontSize: "0.75rem", color: "var(--accent)", textTransform: "uppercase", fontWeight: "bold", marginBottom: "8px" }}>STATUS: OPEN</h3>
                <p style={{ fontSize: "0.75rem", color: "#fff", margin: 0 }}>Looking for Machine Learning, Data Engineering, and intelligent systems collaborations.</p>
              </div>
            </div>

            <div className="md:col-span-7">
              <form action="https://formspree.io/f/mbdbnado" method="POST" style={{ border: "1px solid #222", background: "#0a0a0a", padding: "24px", display: "flex", flexDirection: "column", gap: "16px" }}>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                    <label style={{ fontSize: "0.7rem", color: "#666", textTransform: "uppercase" }}>IDENTIFIER [NAME]</label>
                    <input type="text" name="name" required placeholder="guest_user" style={{ background: "#050505", border: "1px solid #333", padding: "10px", color: "#fff", fontSize: "0.8rem", fontFamily: "monospace", outline: "none" }} />
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                    <label style={{ fontSize: "0.7rem", color: "#666", textTransform: "uppercase" }}>RETURN_ADDRESS [EMAIL]</label>
                    <input type="email" name="email" required placeholder="user@node.com" style={{ background: "#050505", border: "1px solid #333", padding: "10px", color: "#fff", fontSize: "0.8rem", fontFamily: "monospace", outline: "none" }} />
                  </div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                  <label style={{ fontSize: "0.7rem", color: "#666", textTransform: "uppercase" }}>PAYLOAD [MESSAGE]</label>
                  <textarea name="message" required rows={4} placeholder="Transmit data..." style={{ background: "#050505", border: "1px solid #333", padding: "10px", color: "#fff", fontSize: "0.8rem", fontFamily: "monospace", outline: "none", resize: "vertical" }}></textarea>
                </div>
                <button type="submit" style={{ background: "var(--accent)", color: "#000", border: "none", padding: "12px", fontSize: "0.8rem", fontWeight: "bold", textTransform: "uppercase", cursor: "pointer", marginTop: "8px" }}>
                  EXECUTE TRANSMISSION
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* The Upgraded Brutalist Telemetry Footer Section */}
        <footer style={{ borderTop: "2px solid var(--accent)", marginTop: "80px", paddingTop: "50px", paddingBottom: "50px", width: "100%", display: "flex", flexDirection: "column", alignItems: "center", gap: "40px" }} className="font-mono">
          
          {/* Link Routing Table Module */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%", maxWidth: "600px" }}>
            <div style={{ fontSize: "0.65rem", color: "var(--accent)", fontWeight: "bold", textTransform: "uppercase", letterSpacing: "2px", marginBottom: "10px", width: "100%", textAlign: "left", borderLeft: "2px solid var(--accent)", paddingLeft: "8px" }}>
              // LINK_ROUTING_TABLE
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: "10px", width: "100%" }}>
              <a href="https://github.com/cyberdragon55k" target="_blank" rel="noopener noreferrer" style={{ color: "#fff", textDecoration: "none", display: "flex", alignItems: "center", justifyContent: "center", gap: "10px", border: "1px solid #222", background: "#050505", padding: "12px 16px", fontSize: "0.75rem", transition: "all 0.2s" }} onMouseOver={(e) => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.background = 'rgba(250, 84, 28, 0.05)'; }} onMouseOut={(e) => { e.currentTarget.style.borderColor = '#222'; e.currentTarget.style.background = '#050505'; }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                [ GITHUB ]
              </a>
              <a href="https://www.linkedin.com/in/adityanamdeo" target="_blank" rel="noopener noreferrer" style={{ color: "#fff", textDecoration: "none", display: "flex", alignItems: "center", justifyContent: "center", gap: "10px", border: "1px solid #222", background: "#050505", padding: "12px 16px", fontSize: "0.75rem", transition: "all 0.2s" }} onMouseOver={(e) => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.background = 'rgba(250, 84, 28, 0.05)'; }} onMouseOut={(e) => { e.currentTarget.style.borderColor = '#222'; e.currentTarget.style.background = '#050505'; }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                [ LINKEDIN ]
              </a>
              <a href="https://x.com/cyberdragon55k" target="_blank" rel="noopener noreferrer" style={{ color: "#fff", textDecoration: "none", display: "flex", alignItems: "center", justifyContent: "center", gap: "10px", border: "1px solid #222", background: "#050505", padding: "12px 16px", fontSize: "0.75rem", transition: "all 0.2s" }} onMouseOver={(e) => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.background = 'rgba(250, 84, 28, 0.05)'; }} onMouseOut={(e) => { e.currentTarget.style.borderColor = '#222'; e.currentTarget.style.background = '#050505'; }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16z"/><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"/></svg>
                [ TWITTER ]
              </a>
            </div>
          </div>

          {/* Main Structural Signature Block (Color Injected) */}
          <div style={{ border: "1px dashed var(--accent)", background: "rgba(250, 84, 28, 0.02)", width: "100%", maxWidth: "600px", padding: "32px 24px", position: "relative", textAlign: "center" }}>
            {/* Corner Tech Anchors */}
            <div style={{ position: "absolute", top: "-1px", left: "-1px", width: "12px", height: "12px", borderTop: "2px solid #fff", borderLeft: "2px solid #fff" }}></div>
            <div style={{ position: "absolute", bottom: "-1px", right: "-1px", width: "12px", height: "12px", borderBottom: "2px solid #fff", borderRight: "2px solid #fff" }}></div>
            
            <p style={{ color: "var(--accent)", fontSize: "0.65rem", margin: "0 0 8px 0", letterSpacing: "4px", textTransform: "uppercase", fontWeight: "bold" }}>
              [SYSTEM_SHUTDOWN // 2026]
            </p>
            
            <h2 style={{ fontSize: "1.8rem", fontWeight: "900", letterSpacing: "6px", margin: "0 0 12px 0", background: "linear-gradient(to right, #ff4d4d, #f97316, #9b51e0)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", textTransform: "uppercase" }}>
              END_OF_PAGE
            </h2>
            
            <div style={{ width: "80px", height: "2px", background: "linear-gradient(to right, transparent, var(--accent), transparent)", margin: "16px auto" }}></div>
            
            <p style={{ color: "#a1a1aa", fontSize: "0.7rem", margin: 0, letterSpacing: "2px", textTransform: "uppercase" }}>
              SHAPED BY CURIOSITY. DRIVEN BY PURPOSE.
            </p>
          </div>

        </footer>

        {/* Option 1: The Powerline Status Ribbon */}
        <div className="footer-badge" style={{ position: "relative", zIndex: 10, paddingBottom: "24px", textAlign: "center", width: "100%", display: "flex", justifyContent: "center" }}>
          <div style={{ background: "var(--accent)", color: "#000", display: "inline-flex", alignItems: "center", fontSize: "0.65rem", fontFamily: "monospace", fontWeight: "bold", textTransform: "uppercase", letterSpacing: "1px" }}>
            <span style={{ background: "rgba(0, 0, 0, 0.12)", padding: "6px 12px" }}>SYS_ADMIN // A.NAMDEO</span>
            <span style={{ background: "#000", color: "var(--accent)", padding: "5px 12px", border: "1px solid var(--accent)" }}>ENV // PRODUCTION</span>
          </div>
        </div>
      </div>
    </>
  )
}