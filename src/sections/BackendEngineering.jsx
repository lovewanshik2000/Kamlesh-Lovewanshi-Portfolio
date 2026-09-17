import React from 'react';
import { motion } from 'framer-motion';

const skills = ["Python", "Django", "DRF", "FastAPI", "REST APIs", "Microservices", "API Integration", "Authentication", "Authorization", "RBAC"];

const BackendEngineering = () => (
  <section className="section container">
    <motion.h2 
      style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '3rem' }}
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
    >
      BACKEND ENGINEERING
    </motion.h2>

    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '4rem', alignItems: 'center' }}>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.1 }}
        style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}
      >
        {skills.map(skill => (
          <motion.span 
            key={skill}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, backgroundColor: 'var(--accent-color)', color: 'var(--bg-color)' }}
            style={{ 
              padding: '0.5rem 1rem', 
              border: '1px solid var(--border-color)', 
              borderRadius: '4px',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.875rem',
              transition: 'background-color 0.3s, color 0.3s'
            }}
          >
            {skill}
          </motion.span>
        ))}
      </motion.div>

      {/* Animated API Request Visualization */}
      <div style={{ background: 'var(--surface-color)', padding: '2rem', borderRadius: '8px' }}>
        <h4 style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontFamily: 'var(--font-mono)', fontSize: '0.875rem' }}>API REQUEST LIFECYCLE</h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {["POST /api/orders", "Authentication", "Validation", "Business Logic", "Database", "Async Event", "201 Created"].map((step, i) => (
            <motion.div 
              key={step}
              initial={{ opacity: 0.3, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.8 }}
              transition={{ delay: i * 0.2, duration: 0.5 }}
              style={{
                padding: '1rem',
                borderLeft: `2px solid ${i === 0 || i === 6 ? 'var(--accent-color)' : 'var(--text-secondary)'}`,
                color: i === 0 || i === 6 ? '#fff' : 'var(--text-secondary)',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.875rem',
                backgroundColor: 'rgba(255,255,255,0.02)'
              }}
            >
              {step}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default BackendEngineering;
