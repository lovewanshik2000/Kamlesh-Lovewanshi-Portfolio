import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Ambient floating ember particles
const Particles = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;
    let W, H;

    const particles = [];
    const PARTICLE_COUNT = window.innerWidth < 768 ? 35 : 75;

    const resize = () => {
      W = canvas.width  = window.innerWidth;
      H = canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        r: Math.random() * 1.6 + 0.4,
        dx: (Math.random() - 0.5) * 0.22,
        dy: -(Math.random() * 0.45 + 0.12),
        alpha: Math.random() * 0.55 + 0.15,
        hue: Math.random() < 0.7 ? '220,38,38' : '249,115,22',
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      particles.forEach(p => {
        p.x += p.dx;
        p.y += p.dy;
        if (p.y < -5) { p.y = H + 5; p.x = Math.random() * W; }
        if (p.x < -5) p.x = W + 5;
        if (p.x > W + 5) p.x = -5;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.hue},${p.alpha})`;
        ctx.fill();
      });
      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 2,
        opacity: 0.7,
      }}
      aria-hidden="true"
    />
  );
};

// Cycling capabilities — technical and concise
const WORDS = ['HIGH-THROUGHPUT APIS.', 'DISTRIBUTED ARCHITECTURES.', 'ASYNC WORKER QUEUES.', 'ENTERPRISE PIPELINES.', 'INTELLIGENT SYSTEMS.'];

const Hero = () => {
  const sectionRef   = useRef(null);
  const heroStageRef = useRef(null);
  const ambientRef   = useRef(null);
  const [wordIdx, setWordIdx] = useState(0);
  const [show, setShow]       = useState(true);

  // Cycling capability words
  useEffect(() => {
    const cycle = setInterval(() => {
      setShow(false);
      setTimeout(() => {
        setWordIdx(i => (i + 1) % WORDS.length);
        setShow(true);
      }, 300);
    }, 2800);
    return () => clearInterval(cycle);
  }, []);

  // GSAP ScrollTrigger — Cinematic depth transition into Scene 02 (Identity)
  useEffect(() => {
    if (!heroStageRef.current || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.to(heroStageRef.current, {
        scale: 0.85,
        y: -140,
        opacity: 0,
        filter: 'blur(10px)',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: '85% top',
          scrub: 1,
        },
      });

      if (ambientRef.current) {
        gsap.to(ambientRef.current, {
          opacity: 0,
          scale: 1.3,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end: '60% top',
            scrub: 1,
          },
        });
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="top"
      ref={sectionRef}
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        background: '#060608',
        paddingTop: '5rem',
        paddingBottom: '3rem',
      }}
    >
      {/* Red atmospheric spotlight emerging from darkness */}
      <motion.div
        ref={ambientRef}
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2.2, delay: 0.8, ease: 'easeOut' }}
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '15%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '1000px',
          height: '650px',
          background: 'radial-gradient(ellipse at center, rgba(220,38,38,0.22) 0%, rgba(249,115,22,0.08) 45%, transparent 75%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      {/* Grid overlay for spatial depth */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'linear-gradient(rgba(220,38,38,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(220,38,38,0.035) 1px, transparent 1px)',
          backgroundSize: '75px 75px',
          zIndex: 1,
          maskImage: 'radial-gradient(ellipse 80% 70% at 50% 50%, black 40%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 70% at 50% 50%, black 40%, transparent 100%)',
        }}
      />

      <Particles />

      {/* Hero stage wrapper with scroll-driven depth transformation */}
      <div
        ref={heroStageRef}
        style={{
          position: 'relative',
          zIndex: 3,
          textAlign: 'center',
          padding: '0 1.25rem',
          maxWidth: '1200px',
          margin: '0 auto',
          willChange: 'transform, opacity, filter',
        }}
      >
        {/* Status indicator badge */}
        <motion.p
          initial={{ opacity: 0, y: -18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.2 }}
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.62rem',
            letterSpacing: '0.25em',
            color: '#9ca3af',
            marginBottom: '1.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.65rem',
          }}
        >
          <span style={{
            display: 'inline-block',
            width: '6px', height: '6px', borderRadius: '50%',
            background: '#10b981',
            boxShadow: '0 0 10px rgba(16,185,129,0.8)',
          }} />
          SOFTWARE ENGINEER • PYTHON BACKEND DEVELOPER • 4+ YEARS EXPERIENCE
          <span style={{
            display: 'inline-block',
            width: '6px', height: '6px', borderRadius: '50%',
            background: '#10b981',
            boxShadow: '0 0 10px rgba(16,185,129,0.8)',
          }} />
        </motion.p>

        {/* Master Cinematic Walking Scene Stage */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, delay: 2.0, ease: [0.22, 1, 0.36, 1] }}
          style={{
            position: 'relative',
            maxWidth: '1000px',
            margin: '0 auto 2rem',
            borderRadius: '4px',
            overflow: 'hidden',
            border: '1px solid rgba(220, 38, 38, 0.25)',
            boxShadow: '0 30px 80px rgba(0, 0, 0, 0.9), 0 0 50px rgba(220, 38, 38, 0.2)',
            background: '#060608',
          }}
        >
          {/* Subtle slow backward dolly camera motion with natural cadence */}
          <motion.div
            animate={{
              scale: [1, 1.035, 1],
              y: [0, -5, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 8,
              ease: 'easeInOut',
            }}
            style={{ position: 'relative', willChange: 'transform' }}
          >
            <picture>
              <source media="(max-width: 640px)" srcSet="/cinematic_hero_9_16.jpg" />
              <img
                src="/cinematic_hero_16_9.jpg"
                alt="Kamlesh Lovewanshi — Cinematic Walking Scene"
                style={{
                  width: '100%',
                  height: 'auto',
                  maxHeight: '560px',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
            </picture>

            {/* Seamless floor bleed and ambient vignette */}
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'radial-gradient(ellipse at center, transparent 40%, rgba(6, 6, 8, 0.35) 75%, rgba(6, 6, 8, 0.9) 100%), linear-gradient(180deg, transparent 70%, #060608 100%)',
              pointerEvents: 'none',
            }} />
          </motion.div>
        </motion.div>

        {/* Identity & Role Title */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.6 }}
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 'clamp(0.68rem, 1.6vw, 0.86rem)',
            letterSpacing: '0.28em',
            color: '#d1d5db',
            marginBottom: '1.25rem',
            fontWeight: 600,
          }}
        >
          SOFTWARE ENGINEER &nbsp;•&nbsp; PYTHON BACKEND DEVELOPER
        </motion.div>

        {/* Animated capability cycler */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.8 }}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem',
            fontSize: 'clamp(1rem, 2.2vw, 1.3rem)',
            color: '#9ca3af',
            fontWeight: 500,
            marginBottom: '2.5rem',
            flexWrap: 'wrap',
          }}
        >
          <span style={{ color: '#fff' }}>ENGINEERING</span>
          <span
            style={{
              display: 'inline-block',
              color: '#f97316',
              minWidth: '240px',
              opacity: show ? 1 : 0,
              transform: show ? 'translateY(0)' : 'translateY(-6px)',
              transition: 'opacity 0.25s ease, transform 0.25s ease',
              textAlign: 'left',
              fontWeight: 700,
            }}
          >
            {WORDS[wordIdx]}
          </span>
        </motion.div>

        {/* Action CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 3.0 }}
          style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '2.5rem' }}
        >
          <a href="#projects" className="btn-cine" id="hero-view-work">
            <span>VIEW MY WORK</span>
            <span>→</span>
          </a>
          <a href="#contact" className="btn-ghost" id="hero-connect">
            LET'S CONNECT
          </a>
        </motion.div>

        {/* Scroll To Explore Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 3.4 }}
          style={{
            display: 'inline-flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.4rem',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.62rem',
            letterSpacing: '0.2em',
            color: '#6b7280',
          }}
        >
          <span>SCROLL TO ENTER</span>
          <motion.span
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
            style={{ color: '#ef4444', fontSize: '0.8rem' }}
          >
            ▼
          </motion.span>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
