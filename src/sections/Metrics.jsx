import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView, animate } from 'framer-motion';

const Counter = ({ from, to, suffix = "", duration = 2 }) => {
  const nodeRef = useRef();
  const inView = useInView(nodeRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (inView) {
      const controls = animate(from, to, {
        duration,
        onUpdate(value) {
          if (nodeRef.current) {
            nodeRef.current.textContent = Math.round(value) + suffix;
          }
        },
      });
      return () => controls.stop();
    }
  }, [from, to, inView, duration, suffix]);

  return <span ref={nodeRef} />;
};

const metricsData = [
  { value: 100, suffix: "+", label: "REST APIs" },
  { value: 5, suffix: "+", label: "ENTERPRISE APPLICATIONS" },
  { value: 40, suffix: "%", label: "PERFORMANCE IMPROVEMENT" },
  { value: 50, suffix: "%+", label: "ASYNC / REPORTING EFFICIENCY" },
  { value: 70, suffix: "%", label: "AUTOMATION / MANUAL EFFORT REDUCTION" }
];

const Metrics = () => (
  <section id="experience" className="section container" style={{ padding: '8rem 2rem', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)', marginTop: '4rem' }}>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '4rem' }}>
      {metricsData.map((metric, i) => (
        <motion.div 
          key={i}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: i * 0.1 }}
          className="interactive"
        >
          <h3 style={{ fontSize: '3.5rem', color: 'var(--accent-color)', fontFamily: 'var(--font-mono)', lineHeight: 1 }}>
            <Counter from={0} to={metric.value} suffix={metric.suffix} />
          </h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', letterSpacing: '0.1em', marginTop: '1rem', fontWeight: 600 }}>
            {metric.label}
          </p>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Metrics;
