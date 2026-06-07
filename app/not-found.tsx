"use client"

import Link from 'next/link'

export default function NotFound() {
  return (
    <div style={{ 
      minHeight: "100vh", 
      display: "flex", 
      flexDirection: "column", 
      alignItems: "center", 
      justifyContent: "center", 
      background: "#050505", 
      fontFamily: "monospace", 
      padding: "20px", 
      textAlign: "center" 
    }}>
      
      {/* Red Kernel Panic Block */}
      <h1 style={{ 
        fontSize: "clamp(4rem, 15vw, 8rem)", 
        fontWeight: "900", 
        margin: "0 0 10px 0", 
        color: "#ff4d4d", 
        textShadow: "4px 4px 0px rgba(255, 77, 77, 0.2)",
        lineHeight: "1"
      }}>
        404
      </h1>
      
      <div style={{ 
        background: "#ff4d4d", 
        color: "#000", 
        padding: "6px 16px", 
        fontWeight: "900", 
        textTransform: "uppercase", 
        letterSpacing: "2px", 
        marginBottom: "32px",
        transform: "rotate(-2deg)"
      }}>
        [ SYSTEM_FATAL_ERROR ]
      </div>
      
      {/* Terminal Readout */}
      <div style={{ 
        color: "#a1a1aa", 
        fontSize: "0.9rem", 
        maxWidth: "500px", 
        lineHeight: "1.8", 
        marginBottom: "48px",
        textAlign: "left",
        borderLeft: "2px solid #ff4d4d",
        paddingLeft: "16px"
      }}>
        <p style={{ margin: "0 0 8px 0" }}><span style={{ color: "#ff4d4d" }}>{">"}</span> KERNEL PANIC: Memory sector unreadable.</p>
        <p style={{ margin: "0 0 8px 0" }}><span style={{ color: "#ff4d4d" }}>{">"}</span> The requested directory does not exist or has been corrupted.</p>
        <p style={{ margin: "0 0 8px 0", color: "var(--accent)" }}><span className="cursor-blink">_</span> Awaiting administrative override...</p>
      </div>
      
      {/* Return to Safety */}
      <Link 
        href="/" 
        className="glitch-hover"
        style={{ 
          padding: "16px 32px", 
          border: "1px solid var(--accent)", 
          background: "rgba(250, 84, 28, 0.05)", 
          color: "var(--accent)", 
          textDecoration: "none", 
          fontWeight: "bold", 
          textTransform: "uppercase",
          letterSpacing: "2px",
          transition: "all 0.2s ease"
        }}
      >
        [ REBOOT_SYSTEM ]
      </Link>
    </div>
  )
}