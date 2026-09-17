import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const concepts = [
  { id: 'scalability', title: 'SCALABILITY', desc: 'Requests → Load Balancer → Services' },
  { id: 'performance', title: 'PERFORMANCE', desc: 'Caching, Indexing & Query Optimization' },
  { id: 'reliability', title: 'RELIABILITY', desc: 'Fault Tolerance & High Availability' },
  { id: 'security', title: 'SECURITY', desc: 'Authentication, Authorization & RBAC' },
  { id: 'automation', title: 'AUTOMATION', desc: 'CI/CD Pipelines & Background Workers' },
  { id: 'observability', title: 'OBSERVABILITY', desc: 'Monitoring, Logging & Tracing' },
];

const Systems = () => {
  const [active, setActive] = useState(null);

  return (
    <section id="systems" className="section container">
      <motion.h2 
        style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', marginBottom: '3rem' }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        I THINK IN SYSTEMS.
      </motion.h2>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        {concepts.map((concept, i) => (
          <motion.div
            key={concept.id}
            className="interactive"
            onMouseEnter={() => setActive(concept.id)}
            onMouseLeave={() => setActive(null)}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            style={{
              padding: '2rem',
              background: 'var(--surface-color)',
              border: `1px solid ${active === concept.id ? 'var(--accent-color)' : 'var(--border-color)'}`,
              borderRadius: '8px',
              cursor: 'default',
              transition: 'border 0.3s'
            }}
          >
            <h3 style={{ color: active === concept.id ? 'var(--accent-color)' : 'var(--text-primary)', transition: 'color 0.3s' }}>
              {concept.title}
            </h3>
            
            <AnimatePresence>
              {active === concept.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  style={{ marginTop: '1rem', color: 'var(--text-secondary)' }}
                >
                  <p>{concept.desc}</p>
                  
                  {/* Basic visualization placeholder */}
                  <div style={{ marginTop: '1rem', height: '4px', background: '#333', overflow: 'hidden', borderRadius: '2px' }}>
                    <motion.div 
                      initial={{ x: '-100%' }}
                      animate={{ x: '100%' }}
                      transition={{ repeat: Infinity, duration: 1.5, ease: 'linear' }}
                      style={{ width: '50%', height: '100%', background: 'var(--accent-color)' }}
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Systems;
