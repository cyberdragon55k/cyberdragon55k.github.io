"use client"

import { useEffect, useState } from "react"

export default function Home() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    // Update the system clock
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
    const interval = setInterval(updateClock, 1000)

    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowScrollTop(true)
      } else {
        setShowScrollTop(false)
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      clearInterval(interval)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

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

      <header>
        <div className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div className="logo">System.Ref</div>
          <nav className="nav-links">
            <a href="#work">PROJECTS</a>
            <a href="#lab">LAB</a>
            <a href="#archive">ARCHIVE</a>
            <a href="#contact">CONTACT</a>
          </nav>
          <div className="system-status">SYS_UP: 24:12:05:08 | CPU: 12%</div>
        </div>
      </header>

      <div className="container">
        {/* Hero Section */}
        <section className="hero">
          <div className="hero-content">
            <p style={{ color: "var(--accent)", marginBottom: "10px" }}>{"[ INITIALIZING PROTOCOL... ]"}</p>
            <h1>
              Creative <span>Developer</span> &amp; Designer
            </h1>
            <p>
              Architecting digital experiences through a lens of brutalist minimalism and retro-futurism. Based in the
              digital ether.
            </p>
            <a href="#work" className="btn-retro">
              EXPLORE FILES
            </a>
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

        {/* Stats */}
        <div className="stats-bar">
          <div className="stat-item">
            <div className="stat-val">08+</div>
            <div className="stat-label">Years XP</div>
          </div>
          <div className="stat-item">
            <div className="stat-val">124</div>
            <div className="stat-label">Nodes Built</div>
          </div>
          <div className="stat-item">
            <div className="stat-val">001</div>
            <div className="stat-label">Global Rank</div>
          </div>
          <div className="stat-item">
            <div className="stat-val">42k</div>
            <div className="stat-label">Lines Written</div>
          </div>
        </div>

        {/* Portfolio */}
        <section id="work">
          <h2 className="section-title">Latest Deployments</h2>
          <div className="portfolio-grid">
            {/* Project 1 */}
            <div className="project-card">
              <div className="window-header" style={{ background: "#333", color: "#fff" }}>
                <span>PROJECT_ALPHA</span>
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
              <img
                src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&q=80"
                alt="Retro Tech"
                className="project-img"
              />
              <div className="project-info">
                <span className="project-tag">#WEB_DESIGN #UI_UX</span>
                <h3 className="project-title">Vaporwave Interface System</h3>
                <p style={{ fontSize: "0.8rem", color: "var(--text-secondary)" }}>
                  A complete design system inspired by 90s OS aesthetics with modern react functionality.
                </p>
              </div>
            </div>
            {/* Project 2 */}
            <div className="project-card">
              <div className="window-header" style={{ background: "#333", color: "#fff" }}>
                <span>PROJECT_BETA</span>
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
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&q=80"
                alt="Coding"
                className="project-img"
              />
              <div className="project-info">
                <span className="project-tag">#DEVELOPMENT #WEB3</span>
                <h3 className="project-title">Cybernetic Dashboard</h3>
                <p style={{ fontSize: "0.8rem", color: "var(--text-secondary)" }}>
                  High-performance data visualization for distributed cloud networks.
                </p>
              </div>
            </div>
            {/* Project 3 */}
            <div className="project-card">
              <div className="window-header" style={{ background: "#333", color: "#fff" }}>
                <span>PROJECT_GAMMA</span>
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
              <img
                src="https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=600&q=80"
                alt="Abstract Art"
                className="project-img"
              />
              <div className="project-info">
                <span className="project-tag">#BRANDING #IDENTITY</span>
                <h3 className="project-title">Analog Brand Core</h3>
                <p style={{ fontSize: "0.8rem", color: "var(--text-secondary)" }}>
                  Reimagining brand identity through glitch art and thermal printing techniques.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Marquee */}
      <div className="marquee-container">
        <div className="marquee-text">
          <span>AVAILABLE FOR FREELANCE • </span>
          <span>HIRE THE SYSTEM • </span>
          <span>BUILDING THE FUTURE • </span>
          <span>RETRO STYLING MODERN TECH • </span>
          <span>AVAILABLE FOR FREELANCE • </span>
          <span>HIRE THE SYSTEM • </span>
          <span>BUILDING THE FUTURE • </span>
          <span>RETRO STYLING MODERN TECH • </span>
        </div>
      </div>

      <div className="container">
        {/* Terminal Section */}
        <section className="terminal-section" id="lab">
          <div className="terminal-header">SYSTEM_CONSOLE.EXE</div>
          <div className="terminal-row">
            <span className="prompt">{"guest@system:~$"}</span>
            <span className="command">fetch skills --all</span>
          </div>
          <div className="terminal-row">
            <span className="output">{"> Analyzing core competencies..."}</span>
          </div>
          <div className="terminal-row">
            <span className="output">{"[████████████████] 100% - FRONT-END ARCHITECTURE"}</span>
          </div>
          <div className="terminal-row">
            <span className="output">{"[████████████░░░░] 75% - INTERFACE DESIGN"}</span>
          </div>
          <div className="terminal-row">
            <span className="output">{"[██████████████░░] 85% - CREATIVE CODING"}</span>
          </div>
          <div className="terminal-row">
            <span className="prompt">{"guest@system:~$"}</span>
            <span className="command">run contact_protocol.sh</span>
          </div>
          <div className="terminal-row">
            <span className="output">
              {"> Establishing secure connection... "}
              <span className="cursor-blink">_</span>
            </span>
          </div>
        </section>

        {/* Footer */}
        <footer>
          <div className="footer-logo">
            <p style={{ color: "var(--accent)", fontSize: "0.8rem", marginBottom: "10px" }}>END_OF_PAGE</p>
            <h2>
              SYS_REF
              <br />
              2024©
            </h2>
          </div>
          <div style={{ textAlign: "right" }}>
            <div style={{ marginBottom: "20px" }}>
              <a href="#" style={{ color: "var(--text-primary)", textDecoration: "none", marginLeft: "20px" }}>
                TWITTER
              </a>
              <a href="#" style={{ color: "var(--text-primary)", textDecoration: "none", marginLeft: "20px" }}>
                GITHUB
              </a>
              <a href="#" style={{ color: "var(--text-primary)", textDecoration: "none", marginLeft: "20px" }}>
                LINKEDIN
              </a>
            </div>
            <p className="copyright">BUILT ON THE EDGE OF THE WEB. ALL RIGHTS RESERVED.</p>
          </div>
        </footer>

        <div className="footer-badge">
          <a href="https://v0.link/cdiK7jS" target="_blank" rel="noopener noreferrer" className="badge-link-footer">
            <div className="badge-content-footer">
              <span className="badge-label">UI:</span>
              <span className="badge-highlight">1UI.dev</span>
              <span className="badge-separator">→</span>
              <span className="badge-label">LIVE:</span>
              <span className="badge-highlight">v0.app</span>
            </div>
          </a>
        </div>
      </div>
    </>
  )
}
