import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const terminalCommands = [
  { cmd: "whoami", out: "kamlesh-lovewanshi" },
  { cmd: "role", out: "software-engineer --transitioning-to=data-science" },
  { cmd: "focus", out: "backend-engineering + predictive-analytics + ml" },
  { cmd: "data-stack", out: "databricks + apache-spark + mlflow + pandas" },
  { cmd: "ai-ml", out: "llm-fine-tuning + vector-databases + embeddings" },
  { cmd: "backend", out: "python + django + fastapi + rest-apis" },
  { cmd: "cloud", out: "aws + docker + ci/cd" },
];

const Terminal = () => {
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleLines(v => (v < terminalCommands.length ? v + 1 : v));
    }, 800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="stack" className="section container" style={{ padding: '6rem 0' }}>
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{ 
          maxWidth: '850px', 
          margin: '0 auto', 
          background: 'rgba(10, 10, 10, 0.6)', 
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: '1px solid rgba(255,255,255,0.1)', 
          borderRadius: '12px', 
          overflow: 'hidden', 
          boxShadow: '0 30px 60px rgba(0,0,0,0.6), 0 0 40px rgba(59, 130, 246, 0.15)' 
        }}
      >
        <div style={{ background: 'rgba(255,255,255,0.03)', padding: '0.75rem 1.5rem', display: 'flex', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div style={{ display: 'flex', gap: '8px' }}>
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ff5f56', boxShadow: '0 0 10px #ff5f56' }} />
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ffbd2e', boxShadow: '0 0 10px #ffbd2e' }} />
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#27c93f', boxShadow: '0 0 10px #27c93f' }} />
          </div>
          <div style={{ flex: 1, textAlign: 'center', fontFamily: 'var(--font-sans)', fontSize: '0.75rem', color: 'var(--text-secondary)', letterSpacing: '0.05em' }}>
            kamlesh@macbook-pro ~ /portfolio/skills
          </div>
        </div>
        <div style={{ padding: '2.5rem', fontFamily: 'var(--font-mono)', fontSize: '0.9rem', lineHeight: '2' }}>
          {terminalCommands.slice(0, visibleLines).map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3 }}>
              <p>
                <span style={{ color: '#27c93f', fontWeight: '600' }}>kamlesh</span>
                <span style={{ color: 'var(--text-secondary)' }}>@</span>
                <span style={{ color: '#3b82f6', fontWeight: '600' }}>system</span>
                <span style={{ color: '#fff', margin: '0 8px' }}>❯</span>
                <span style={{ color: '#e5e7eb' }}>{item.cmd}</span>
              </p>
              <p style={{ color: '#9ca3af', marginBottom: '1rem', paddingLeft: '1rem', borderLeft: '2px solid rgba(255,255,255,0.1)', marginLeft: '0.5rem' }}>
                {item.out}
              </p>
            </motion.div>
          ))}
          {visibleLines < terminalCommands.length && (
            <motion.div animate={{ opacity: [1, 0] }} transition={{ repeat: Infinity, duration: 0.8 }}>
              <p>
                <span style={{ color: '#27c93f', fontWeight: '600' }}>kamlesh</span>
                <span style={{ color: 'var(--text-secondary)' }}>@</span>
                <span style={{ color: '#3b82f6', fontWeight: '600' }}>system</span>
                <span style={{ color: '#fff', margin: '0 8px' }}>❯</span>
                <span style={{ display: 'inline-block', width: '8px', height: '1.2em', background: '#fff', verticalAlign: 'middle', marginLeft: '4px' }}></span>
              </p>
            </motion.div>
          )}
        </div>
      </motion.div>
    </section>
  );
};

export default Terminal;
