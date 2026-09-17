import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const fundamentals = ["Arrays", "Strings", "Hash Maps", "Stacks", "Queues", "Linked Lists", "Trees", "Graphs", "Heaps"];
const algorithms = ["Two Pointers", "Sliding Window", "Binary Search", "Recursion", "DFS", "BFS", "Sorting", "Dynamic Programming"];
const searchArray = [1, 4, 7, 12, 19, 25, 31];

const EngineeringFundamentals = () => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((s) => (s >= 3 ? 0 : s + 1));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const getStyleForIndex = (idx) => {
    if (step === 0) return { opacity: 1, scale: 1 };
    if (step === 1 && idx >= 3) return { opacity: 1, scale: 1, background: idx === 3 ? 'var(--accent-color)' : 'var(--surface-color)' };
    if (step === 2 && idx >= 3 && idx <= 4) return { opacity: 1, scale: 1, background: idx === 3 ? 'var(--accent-color)' : 'var(--surface-color)' };
    if (step === 3 && idx === 3) return { opacity: 1, scale: 1.2, background: 'var(--accent-color)', color: '#000' };
    return { opacity: 0.3, scale: 0.9 };
  };

  return (
    <section className="section container">
      <motion.h2 
        style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '1rem' }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        ENGINEERING FUNDAMENTALS
      </motion.h2>
      <p style={{ color: 'var(--text-secondary)', marginBottom: '3rem' }}>Strong systems start with strong fundamentals.</p>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>
        <div>
          <h3 style={{ marginBottom: '1rem', fontFamily: 'var(--font-mono)', fontSize: '1rem', color: 'var(--accent-color)' }}>DATA STRUCTURES</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
            {fundamentals.map(f => (
              <span key={f} style={{ padding: '0.25rem 0.75rem', background: 'rgba(255,255,255,0.05)', borderRadius: '4px', fontSize: '0.875rem' }}>{f}</span>
            ))}
          </div>
          <h3 style={{ marginBottom: '1rem', fontFamily: 'var(--font-mono)', fontSize: '1rem', color: 'var(--accent-color)' }}>ALGORITHMS</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {algorithms.map(a => (
              <span key={a} style={{ padding: '0.25rem 0.75rem', background: 'rgba(255,255,255,0.05)', borderRadius: '4px', fontSize: '0.875rem' }}>{a}</span>
            ))}
          </div>
        </div>

        <div style={{ background: 'var(--surface-color)', padding: '2rem', borderRadius: '8px' }}>
          <h4 style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontFamily: 'var(--font-mono)', fontSize: '0.875rem' }}>VISUALIZING: BINARY SEARCH (TARGET: 12)</h4>
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            {searchArray.map((num, i) => (
              <motion.div
                key={num}
                animate={getStyleForIndex(i)}
                style={{
                  width: '40px',
                  height: '40px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'var(--bg-color)',
                  border: '1px solid var(--border-color)',
                  borderRadius: '4px',
                  fontFamily: 'var(--font-mono)',
                  fontWeight: 'bold'
                }}
              >
                {num}
              </motion.div>
            ))}
          </div>
          <p style={{ textAlign: 'center', marginTop: '2rem', color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
            {step === 0 && "Step 1: Check middle element"}
            {step === 1 && "Step 2: 12 is less than 19, discard right half"}
            {step === 2 && "Step 3: Check new middle element"}
            {step === 3 && "Step 4: Target found at index 3!"}
          </p>
        </div>
      </div>
    </section>
  );
};

export default EngineeringFundamentals;
