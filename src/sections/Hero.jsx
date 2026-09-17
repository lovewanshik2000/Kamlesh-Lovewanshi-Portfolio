import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Hero.css';

const words = ["SYSTEMS.", "APIs.", "MICROSERVICES.", "CLOUD.", "AUTOMATION."];

const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="top" className="hero-section">
      <div className="container" style={{
        display: 'grid',
        gridTemplateColumns: '1fr auto',
        gap: '4rem',
        alignItems: 'center',
        minHeight: '100vh',
        padding: '0 2rem'
      }}>

        {/* Left — Text Content */}
        <div className="hero-content" style={{ maxWidth: '700px' }}>
          <motion.p
            className="hero-badge"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="dot"></span> 4 YEARS OF SOFTWARE ENGINEERING EXPERIENCE
          </motion.p>

          <h1 className="hero-title">
            <motion.span className="line" initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.4 }}>BUILDING</motion.span>
            <motion.span className="line accent" initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.6 }}>SCALABLE</motion.span>
            <div className="animated-word-wrapper">
              <AnimatePresence mode="wait">
                <motion.span
                  key={words[index]}
                  className="line"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  {words[index]}
                </motion.span>
              </AnimatePresence>
            </div>
          </h1>

          <motion.div
            className="hero-description"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <p>Software Engineer building scalable backend systems, REST APIs and cloud-native applications with Python.</p>
          </motion.div>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <a href="#projects" className="btn btn-primary interactive">EXPLORE MY WORK →</a>
            <a href="/resume.pdf" className="btn btn-secondary interactive" download>DOWNLOAD RESUME</a>
          </motion.div>

          {/* Social Quick Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            style={{ display: 'flex', gap: '1.5rem', marginTop: '2.5rem', alignItems: 'center' }}
          >
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-secondary)', letterSpacing: '0.15em' }}>CONNECT —</span>
            {[
              { label: "GitHub", href: "https://github.com/lovewanshik2000" },
              { label: "LinkedIn", href: "https://www.linkedin.com/in/kamlesh-lovewanshi/" },
              { label: "Email", href: "mailto:kamleshlovewanshi2025@gmail.com" },
            ].map((link, i) => (
              <motion.a
                key={i}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                whileHover={{ y: -2, color: '#fff' }}
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  color: 'var(--text-secondary)',
                  textDecoration: 'none',
                  letterSpacing: '0.05em',
                  transition: 'color 0.2s ease'
                }}
              >
                {link.label}
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Right — Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, x: 60 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          style={{ position: 'relative', flexShrink: 0 }}
        >
          {/* Glow ring behind photo */}
          <div style={{
            position: 'absolute',
            inset: '-4px',
            borderRadius: '24px',
            background: 'linear-gradient(135deg, #3b82f6, #6366f1, #8b5cf6)',
            zIndex: 0,
            filter: 'blur(1px)'
          }} />

          {/* Subtle outer glow */}
          <div style={{
            position: 'absolute',
            inset: '-20px',
            borderRadius: '40px',
            background: 'radial-gradient(ellipse, rgba(59,130,246,0.2) 0%, transparent 70%)',
            zIndex: -1
          }} />

          <img
            src="/kamlesh.png"
            alt="Kamlesh Lovewanshi — Software Engineer"
            style={{
              width: '340px',
              height: '380px',
              objectFit: 'cover',
              objectPosition: 'center top',
              borderRadius: '22px',
              display: 'block',
              position: 'relative',
              zIndex: 1
            }}
          />

          {/* Floating badge — Role */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            style={{
              position: 'absolute',
              bottom: '-1.25rem',
              left: '50%',
              transform: 'translateX(-50%)',
              background: 'rgba(10,10,10,0.85)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border: '1px solid rgba(59,130,246,0.4)',
              borderRadius: '12px',
              padding: '0.75rem 1.5rem',
              whiteSpace: 'nowrap',
              zIndex: 2,
              boxShadow: '0 0 20px rgba(59,130,246,0.25)'
            }}
          >
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: '#3b82f6', letterSpacing: '0.1em', marginBottom: '0.1rem' }}>
              ● AVAILABLE FOR ROLES
            </p>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.85rem', color: '#fff', fontWeight: 600 }}>
              Kamlesh Lovewanshi
            </p>
          </motion.div>
        </motion.div>

      </div>

      {/* Abstract Background */}
      <div className="hero-bg-animation">
        <div className="packet packet-1"></div>
        <div className="packet packet-2"></div>
        <div className="packet packet-3"></div>
      </div>
    </section>
  );
};

export default Hero;
