import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_ITEMS = [
  { label: 'HOME',       href: '#top' },
  { label: 'IDENTITY',   href: '#identity' },
  { label: 'UNIVERSE',   href: '#stack' },
  { label: 'EXPERIENCE', href: '#experience' },
  { label: 'PROJECTS',   href: '#projects' },
  { label: 'SYSTEMS',    href: '#systems' },
  { label: 'AUTOMATION', href: '#automation' },
  { label: 'ABOUT',      href: '#about' },
  { label: 'CONTACT',    href: '#contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const [activeSection, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);

      // Active section tracking
      const sections = NAV_ITEMS.map(n => n.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(sections[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 4.2, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 900,
          padding: '0 2rem',
          height: '64px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          transition: 'background 0.4s ease, border-color 0.4s ease',
          background: scrolled ? 'rgba(6,6,8,0.92)' : 'transparent',
          borderBottom: scrolled ? '1px solid rgba(220,38,38,0.15)' : '1px solid transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
        }}
        aria-label="Main navigation"
      >
        {/* Logo */}
        <a
          href="#top"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1.5rem',
            letterSpacing: '0.12em',
            color: '#dc2626',
            lineHeight: 1,
            textShadow: '0 0 20px rgba(220,38,38,0.5)',
          }}
          aria-label="Back to top"
        >
          KL
        </a>

        {/* Desktop Nav Links */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '2.5rem',
          }}
          className="desktop-nav"
        >
          {NAV_ITEMS.map(({ label, href }) => {
            const id = href.slice(1);
            const isActive = activeSection === id;
            return (
              <a
                key={label}
                href={href}
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.65rem',
                  letterSpacing: '0.2em',
                  color: isActive ? '#ef4444' : '#6b7280',
                  textDecoration: 'none',
                  transition: 'color 0.2s ease',
                  position: 'relative',
                  paddingBottom: '2px',
                }}
                onMouseEnter={e => e.target.style.color = '#fff'}
                onMouseLeave={e => e.target.style.color = isActive ? '#ef4444' : '#6b7280'}
              >
                {label}
                {isActive && (
                  <motion.span
                    layoutId="nav-indicator"
                    style={{
                      position: 'absolute',
                      bottom: -2,
                      left: 0,
                      right: 0,
                      height: '1px',
                      background: '#dc2626',
                    }}
                  />
                )}
              </a>
            );
          })}

          {/* CTA */}
          <a
            href="#contact"
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.65rem',
              letterSpacing: '0.2em',
              padding: '0.5rem 1.25rem',
              border: '1px solid rgba(220,38,38,0.5)',
              borderRadius: '2px',
              color: '#dc2626',
              textDecoration: 'none',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'rgba(220,38,38,0.1)';
              e.currentTarget.style.borderColor = '#dc2626';
              e.currentTarget.style.color = '#fff';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.borderColor = 'rgba(220,38,38,0.5)';
              e.currentTarget.style.color = '#dc2626';
            }}
          >
            CONTACT
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(m => !m)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '0.5rem',
            color: '#fff',
          }}
          className="mobile-menu-btn"
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.5">
            {menuOpen ? (
              <>
                <line x1="4" y1="4" x2="18" y2="18" />
                <line x1="18" y1="4" x2="4" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="7" x2="19" y2="7" />
                <line x1="3" y1="14" x2="19" y2="14" />
              </>
            )}
          </svg>
        </button>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            style={{
              position: 'fixed',
              top: 0,
              right: 0,
              bottom: 0,
              width: 'min(280px, 100vw)',
              background: 'rgba(6,6,8,0.97)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              borderLeft: '1px solid rgba(220,38,38,0.2)',
              zIndex: 901,
              display: 'flex',
              flexDirection: 'column',
              padding: '5rem 2rem 2rem',
              gap: '2rem',
            }}
          >
            {[...NAV_ITEMS, { label: 'CONTACT', href: '#contact' }].map(({ label, href }) => (
              <a
                key={label}
                href={href}
                onClick={() => setMenuOpen(false)}
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.8rem',
                  letterSpacing: '0.2em',
                  color: '#9ca3af',
                  textDecoration: 'none',
                  paddingBottom: '1.25rem',
                  borderBottom: '1px solid rgba(255,255,255,0.05)',
                }}
              >
                {label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </>
  );
};

export default Navbar;
