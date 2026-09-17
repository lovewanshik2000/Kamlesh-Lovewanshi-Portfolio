import React from 'react';
import { motion } from 'framer-motion';

const Identity = () => (
  <section id="about" className="section container">
    <motion.h2 
      style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', marginBottom: '2rem' }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
    >
      I BUILD BACKEND SYSTEMS.
    </motion.h2>
    
    <motion.div 
      style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', color: 'var(--accent-color)', fontFamily: 'var(--font-mono)' }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
    >
      {['SCALABLE', 'RELIABLE', 'SECURE', 'PERFORMANT', 'DISTRIBUTED', 'AUTOMATED'].map((word, i) => (
        <motion.span 
          key={word}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.1, color: '#fff' }}
          className="interactive"
          style={{ cursor: 'default' }}
        >
          {word} {i < 5 && <span style={{ color: 'var(--text-secondary)' }}>/</span>}
        </motion.span>
      ))}
    </motion.div>
    
    <motion.p 
      style={{ marginTop: '2rem', fontSize: '1.25rem', color: 'var(--text-secondary)', maxWidth: '800px' }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.4 }}
    >
      From REST APIs and microservices to cloud infrastructure and asynchronous workloads.
    </motion.p>
  </section>
);

export default Identity;
