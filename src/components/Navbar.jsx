import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import './Navbar.css';

const SunIcon = () => (
  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="5" />
    <line x1="12" y1="1" x2="12" y2="3" />
    <line x1="12" y1="21" x2="12" y2="23" />
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
    <line x1="1" y1="12" x2="3" y2="12" />
    <line x1="21" y1="12" x2="23" y2="12" />
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
  </svg>
);

const MoonIcon = () => (
  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
);

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-content">
        <a href="#top" className="logo">KL</a>

        <div className="nav-links">
          <a href="#about">ABOUT</a>
          <a href="#experience">EXPERIENCE</a>
          <a href="#systems">SYSTEMS</a>
          <a href="#projects">PROJECTS</a>
          <a href="#stack">STACK</a>
          <a href="#ai">AI</a>
          <a href="#contact" className="nav-contact">CONTACT</a>
        </div>

        {/* Theme Toggle */}
        <motion.button
          onClick={toggle}
          aria-label="Toggle theme"
          whileTap={{ scale: 0.9 }}
          style={{
            width: '52px',
            height: '28px',
            borderRadius: '999px',
            border: '1px solid var(--border-color)',
            background: theme === 'dark' ? 'rgba(255,255,255,0.08)' : 'rgba(37,99,235,0.12)',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            padding: '3px',
            position: 'relative',
            flexShrink: 0,
            boxShadow: theme === 'dark'
              ? 'inset 0 0 10px rgba(255,255,255,0.05)'
              : 'inset 0 0 10px rgba(37,99,235,0.1)',
          }}
        >
          {/* Sliding thumb */}
          <motion.div
            layout
            animate={{ x: theme === 'dark' ? 0 : 24 }}
            transition={{ type: 'spring', stiffness: 500, damping: 30 }}
            style={{
              width: '22px',
              height: '22px',
              borderRadius: '50%',
              background: theme === 'dark'
                ? 'linear-gradient(135deg, #6366f1, #3b82f6)'
                : 'linear-gradient(135deg, #f59e0b, #f97316)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#fff',
              boxShadow: theme === 'dark'
                ? '0 0 8px rgba(99,102,241,0.6)'
                : '0 0 8px rgba(251,146,60,0.6)',
            }}
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={theme}
                initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
                transition={{ duration: 0.2 }}
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              >
                {theme === 'dark' ? <MoonIcon /> : <SunIcon />}
              </motion.span>
            </AnimatePresence>
          </motion.div>
        </motion.button>
      </div>
    </nav>
  );
};

export default Navbar;
