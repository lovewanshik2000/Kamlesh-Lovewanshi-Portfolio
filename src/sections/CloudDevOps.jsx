import React from 'react';
import { motion } from 'framer-motion';

const pipeline = ["Git", "GitHub", "Jenkins", "Build", "Test", "Docker", "AWS"];

const CloudDevOps = () => (
  <section className="section container">
    <motion.h2 
      style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '1rem' }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      CLOUD, BUT PRACTICAL.
    </motion.h2>
    
    <div style={{ marginTop: '4rem' }}>
      <h3 style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)', fontSize: '1rem', marginBottom: '2rem' }}>CI/CD PIPELINE</h3>
      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '1rem' }}>
        {pipeline.map((step, i) => (
          <React.Fragment key={step}>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              style={{
                padding: '1rem 1.5rem',
                background: 'var(--surface-color)',
                border: '1px solid var(--border-color)',
                borderRadius: '4px',
                fontFamily: 'var(--font-mono)',
                color: step === 'AWS' || step === 'Docker' ? 'var(--accent-color)' : '#fff'
              }}
            >
              {step}
            </motion.div>
            {i < pipeline.length - 1 && (
              <motion.div
                initial={{ opacity: 0, width: 0 }}
                whileInView={{ opacity: 1, width: '2rem' }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 + 0.1 }}
                style={{ height: '2px', background: 'var(--text-secondary)' }}
              />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  </section>
);

export default CloudDevOps;
