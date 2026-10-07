import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const contactLinks = [
  {
    label: 'EMAIL',
    value: 'kamleshlovewanshi2025@gmail.com',
    href: 'mailto:kamleshlovewanshi2025@gmail.com',
    color: '#ef4444',
    glow: 'rgba(239,68,68,0.3)',
    icon: (
      <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
  },
  {
    label: 'LINKEDIN',
    value: 'linkedin.com/in/kamlesh-lovewanshi',
    href: 'https://www.linkedin.com/in/kamlesh-lovewanshi/',
    color: '#60a5fa',
    glow: 'rgba(96,165,250,0.3)',
    icon: (
      <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    label: 'GITHUB',
    value: 'github.com/lovewanshik2000',
    href: 'https://github.com/lovewanshik2000',
    color: '#d1d5db',
    glow: 'rgba(209,213,219,0.2)',
    icon: (
      <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
      </svg>
    ),
  },
  {
    label: 'PHONE',
    value: '+91 8770563635',
    href: 'tel:+918770563635',
    color: '#f59e0b',
    glow: 'rgba(245,158,11,0.3)',
    icon: (
      <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
  },
];

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('kamleshlovewanshi2025@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="contact"
      className="section"
      style={{
        background: 'linear-gradient(180deg, #08060a 0%, #060608 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Ambient glows */}
      <div aria-hidden="true" style={{
        position: 'absolute', bottom: '10%', right: '-10%',
        width: '600px', height: '500px',
        background: 'radial-gradient(ellipse, rgba(220,38,38,0.1) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div aria-hidden="true" style={{
        position: 'absolute', top: '20%', left: '-10%',
        width: '400px', height: '400px',
        background: 'radial-gradient(ellipse, rgba(249,115,22,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="container">
        <div className="scene-label">SCENE 10 — CONTACT</div>

        {/* Hero title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          style={{ marginBottom: '5rem', textAlign: 'center' }}
        >
          <p style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.62rem',
            letterSpacing: '0.25em',
            color: '#6b7280',
            marginBottom: '1.5rem',
          }}>
            OPEN TO OPPORTUNITIES — FULL-TIME / CONTRACT / REMOTE
          </p>
          <h2 style={{
            fontSize: 'clamp(3rem, 9vw, 9rem)',
            fontWeight: 800,
            letterSpacing: '-0.03em',
            lineHeight: 1.0,
            marginBottom: '0.5rem',
          }}>
            LET'S BUILD
          </h2>
          <h2 style={{
            fontSize: 'clamp(3rem, 9vw, 9rem)',
            fontWeight: 800,
            letterSpacing: '-0.03em',
            lineHeight: 1.0,
            background: 'linear-gradient(135deg, #ef4444, #f97316, #f59e0b)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            marginBottom: '2rem',
          }}>
            SOMETHING GREAT.
          </h2>
          <p style={{
            color: '#9ca3af',
            maxWidth: '560px',
            margin: '0 auto',
            fontSize: '0.95rem',
            lineHeight: 1.8,
          }}>
            Building scalable backend systems, APIs, distributed workflows and cloud-based applications, while exploring AI/ML, GenAI and intelligent automation.
          </p>
        </motion.div>

        {/* Contact grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem',
          marginBottom: '4rem',
        }}>
          {contactLinks.map((link, i) => (
            <motion.a
              key={i}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ y: -4 }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                padding: '1.5rem',
                background: 'rgba(12,8,6,0.8)',
                border: `1px solid rgba(255,255,255,0.06)`,
                borderRadius: '2px',
                textDecoration: 'none',
                color: '#fff',
                transition: 'border-color 0.3s ease, box-shadow 0.3s ease, background 0.3s ease',
                position: 'relative',
                overflow: 'hidden',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = link.color + '50';
                e.currentTarget.style.boxShadow = `0 0 30px ${link.glow}`;
                e.currentTarget.style.background = `${link.color}06`;
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.background = 'rgba(12,8,6,0.8)';
              }}
            >
              {/* Top accent */}
              <div style={{
                position: 'absolute', top: 0, left: 0, right: 0, height: '1px',
                background: `linear-gradient(90deg, ${link.color}, transparent)`,
                opacity: 0.5,
              }} />

              <div style={{
                width: '40px', height: '40px',
                borderRadius: '2px',
                background: `${link.color}12`,
                border: `1px solid ${link.color}30`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: link.color,
                flexShrink: 0,
              }}>
                {link.icon}
              </div>

              <div style={{ minWidth: 0, flex: 1 }}>
                <p style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.58rem',
                  letterSpacing: '0.18em',
                  color: link.color,
                  marginBottom: '0.2rem',
                }}>
                  {link.label}
                </p>
                <p style={{
                  fontSize: '0.82rem',
                  color: '#d1d5db',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                }}>
                  {link.value}
                </p>
              </div>

              <svg width="14" height="14" fill="none" stroke="#4b5563" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </motion.a>
          ))}
        </div>

        {/* Copy email CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ display: 'flex', justifyContent: 'center', marginBottom: '6rem' }}
        >
          <button
            onClick={handleCopy}
            id="copy-email-btn"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.75rem',
              padding: '1rem 2.5rem',
              background: 'linear-gradient(135deg, #dc2626, #f97316)',
              border: 'none',
              borderRadius: '2px',
              color: '#fff',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              letterSpacing: '0.18em',
              cursor: 'pointer',
              boxShadow: '0 0 30px rgba(220,38,38,0.4)',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={e => e.currentTarget.style.boxShadow = '0 0 50px rgba(220,38,38,0.6)'}
            onMouseLeave={e => e.currentTarget.style.boxShadow = '0 0 30px rgba(220,38,38,0.4)'}
          >
            <AnimatePresence mode="wait">
              {copied ? (
                <motion.span key="copied" initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 8 }}>
                  ✓ EMAIL COPIED TO CLIPBOARD
                </motion.span>
              ) : (
                <motion.span key="copy" initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 8 }}>
                  ⌘ COPY EMAIL ADDRESS
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </motion.div>

        {/* Footer divider */}
        <div className="cine-divider" />

        <div style={{
          marginTop: '2.5rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
        }}>
          <p style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.65rem',
            letterSpacing: '0.12em',
            color: '#374151',
          }}>
            © 2026 KAMLESH LOVEWANSHI — ALL RIGHTS RESERVED
          </p>
          <p style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.65rem',
            letterSpacing: '0.12em',
            color: '#374151',
          }}>
            BUILT WITH REACT + VITE + GSAP + FRAMER MOTION
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
