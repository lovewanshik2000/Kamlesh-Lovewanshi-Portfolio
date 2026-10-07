import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LINES = [
  { text: 'INITIALIZING SYSTEM', delay: 0.2 },
  { text: 'LOADING ARCHITECTURE', delay: 0.9 },
  { text: 'CONNECTING SERVICES', delay: 1.6 },
  { text: 'SYSTEM READY', delay: 2.3 },
];

const Loader = ({ onComplete }) => {
  const [phase, setPhase] = useState(0); // 0=lines, 1=name, 2=exit

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 2800);
    const t2 = setTimeout(() => setPhase(2), 3800);
    const t3 = setTimeout(() => onComplete && onComplete(), 4400);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase < 2 && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            background: '#060608',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0',
          }}
        >
          {/* Ambient glow */}
          <div style={{
            position: 'absolute',
            width: '600px',
            height: '300px',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%,-50%)',
            background: 'radial-gradient(ellipse, rgba(220,38,38,0.12) 0%, transparent 70%)',
            pointerEvents: 'none',
          }} />

          {/* Lines phase */}
          {phase === 0 && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'flex-start', minWidth: '260px' }}>
              {LINES.map((line, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: line.delay, duration: 0.4 }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.7rem',
                    letterSpacing: '0.2em',
                    color: i === LINES.length - 1 ? '#ef4444' : '#6b7280',
                  }}
                >
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: line.delay + 0.3 }}
                    style={{ color: '#dc2626' }}
                  >
                    ▸
                  </motion.span>
                  {line.text}
                  {i === LINES.length - 1 && (
                    <motion.span
                      animate={{ opacity: [1, 0, 1] }}
                      transition={{ repeat: Infinity, duration: 0.8 }}
                      style={{ display: 'inline-block', width: '6px', height: '12px', background: '#dc2626', verticalAlign: 'middle' }}
                    />
                  )}
                </motion.div>
              ))}
            </div>
          )}

          {/* Name phase */}
          {phase === 1 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              style={{ textAlign: 'center' }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(4rem, 12vw, 9rem)',
                  letterSpacing: '0.08em',
                  lineHeight: 0.9,
                  background: 'linear-gradient(135deg, #ffffff 0%, #f97316 60%, #dc2626 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                KAMLESH
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(4rem, 12vw, 9rem)',
                  letterSpacing: '0.08em',
                  lineHeight: 0.9,
                  color: '#ffffff',
                  marginBottom: '1.5rem',
                }}
              >
                LOVEWANSHI
              </motion.div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.65rem',
                  letterSpacing: '0.3em',
                  color: '#6b7280',
                }}
              >
                SOFTWARE ENGINEER — PYTHON BACKEND DEVELOPER
              </motion.p>
            </motion.div>
          )}

          {/* Progress bar */}
          <motion.div
            style={{
              position: 'absolute',
              bottom: '3rem',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '200px',
              height: '1px',
              background: 'rgba(255,255,255,0.08)',
              overflow: 'hidden',
            }}
          >
            <motion.div
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 3.6, ease: 'linear' }}
              style={{ height: '100%', background: 'linear-gradient(90deg, #dc2626, #f97316)' }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
