import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/* ── Architecture nodes ───────────────────────────────── */
const ARCH_NODES = [
  {
    id: 'client',
    label: 'CLIENT',
    desc: 'Browser, mobile app, or external consumer sending HTTP/HTTPS requests.',
    x: 50, y: 5, color: '#f3f4f6',
    connects: ['nginx'],
  },
  {
    id: 'nginx',
    label: 'NGINX',
    desc: 'Reverse proxy and load balancer handling SSL termination, rate limiting, and request routing.',
    x: 50, y: 22, color: '#f59e0b',
    connects: ['django', 'fastapi'],
  },
  {
    id: 'django',
    label: 'DJANGO / DRF',
    desc: 'Core business logic, REST APIs, enterprise authentication (JWT/SAML2 SSO), and database ORM layer.',
    x: 25, y: 42, color: '#ef4444',
    connects: ['redis', 'celery', 'db'],
  },
  {
    id: 'fastapi',
    label: 'FASTAPI',
    desc: 'Lightweight asynchronous services and AI pipeline orchestration endpoints.',
    x: 72, y: 42, color: '#f97316',
    connects: ['redis', 'db'],
  },
  {
    id: 'redis',
    label: 'REDIS',
    desc: 'In-memory data store for response caching, session state, and Celery task broker messaging.',
    x: 50, y: 62, color: '#dc2626',
    connects: ['celery'],
  },
  {
    id: 'celery',
    label: 'CELERY',
    desc: 'Distributed asynchronous task queue managing long-running ERP synchronization and scheduled reporting.',
    x: 25, y: 80, color: '#ea580c',
    connects: ['db', 'aws'],
  },
  {
    id: 'db',
    label: 'DATABASE',
    desc: 'PostgreSQL & MySQL with indexed relational schemas, partition strategies, and connection pooling.',
    x: 72, y: 80, color: '#fb923c',
    connects: ['aws'],
  },
  {
    id: 'aws',
    label: 'AWS',
    desc: 'Cloud storage and compute infrastructure — Amazon S3 for generated reports, EC2 hosting, and IAM policies.',
    x: 50, y: 96, color: '#f59e0b',
    connects: [],
  },
];

/* ── Packet animation between two nodes ──────────────────*/
const CONNECTIONS = [
  { from: 'client', to: 'nginx' },
  { from: 'nginx', to: 'django' },
  { from: 'nginx', to: 'fastapi' },
  { from: 'django', to: 'redis' },
  { from: 'django', to: 'db' },
  { from: 'fastapi', to: 'redis' },
  { from: 'redis', to: 'celery' },
  { from: 'celery', to: 'db' },
  { from: 'celery', to: 'aws' },
  { from: 'db', to: 'aws' },
];

/* ── SVG Architecture diagram ─────────────────────────── */
const ArchDiagram = ({ hoveredNode, setHoveredNode }) => {
  const getNode = (id) => ARCH_NODES.find(n => n.id === id);

  const isConnectedToHovered = (nodeId) => {
    if (!hoveredNode) return true;
    if (nodeId === hoveredNode) return true;
    const hNode = getNode(hoveredNode);
    if (hNode?.connects.includes(nodeId)) return true;
    // also check if nodeId connects to hovered
    const n = getNode(nodeId);
    if (n?.connects.includes(hoveredNode)) return true;
    return false;
  };

  return (
    <div style={{ position: 'relative', width: '100%', paddingTop: '130%' }}>
      <svg
        viewBox="0 0 100 110"
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
        aria-label="System architecture diagram"
        role="img"
      >
        <defs>
          {CONNECTIONS.map((conn, i) => {
            const from = getNode(conn.from);
            const to   = getNode(conn.to);
            return (
              <marker
                key={`arrow-${i}`}
                id={`arrow-${i}`}
                viewBox="0 0 10 10"
                refX="8" refY="5"
                markerWidth="4" markerHeight="4"
                orient="auto-start-reverse"
              >
                <path d="M 0 0 L 10 5 L 0 10 z" fill={from?.color + '60'} />
              </marker>
            );
          })}
        </defs>

        {/* Connection lines */}
        {CONNECTIONS.map((conn, i) => {
          const from = getNode(conn.from);
          const to   = getNode(conn.to);
          if (!from || !to) return null;
          const isActive = !hoveredNode ||
            hoveredNode === conn.from ||
            hoveredNode === conn.to;

          return (
            <g key={i}>
              <line
                x1={from.x} y1={from.y + 3}
                x2={to.x}   y2={to.y - 3}
                stroke={from.color + (isActive ? '40' : '10')}
                strokeWidth="0.4"
                strokeDasharray="1.5 1"
                markerEnd={`url(#arrow-${i})`}
                style={{ transition: 'stroke 0.3s ease' }}
              />
              {/* Animated data packet */}
              {isActive && (
                <circle r="0.8" fill={from.color} opacity="0.9">
                  <animateMotion
                    dur={`${1.5 + i * 0.3}s`}
                    repeatCount="indefinite"
                    path={`M${from.x},${from.y + 3} L${to.x},${to.y - 3}`}
                  />
                </circle>
              )}
            </g>
          );
        })}

        {/* Nodes */}
        {ARCH_NODES.map(node => {
          const active = isConnectedToHovered(node.id);
          return (
            <g
              key={node.id}
              transform={`translate(${node.x}, ${node.y})`}
              style={{ cursor: 'pointer' }}
              onMouseEnter={() => setHoveredNode(node.id)}
              onMouseLeave={() => setHoveredNode(null)}
              role="button"
              tabIndex={0}
              aria-label={`${node.label} - ${node.desc}`}
              onFocus={() => setHoveredNode(node.id)}
              onBlur={() => setHoveredNode(null)}
            >
              {/* Glow */}
              {hoveredNode === node.id && (
                <circle r="6" fill={node.color} opacity="0.12">
                  <animate attributeName="r" values="4;7;4" dur="2s" repeatCount="indefinite" />
                </circle>
              )}
              {/* Node dot */}
              <circle
                r={hoveredNode === node.id ? 3.2 : 2.4}
                fill={active ? node.color : '#1f2937'}
                stroke={active ? node.color : '#374151'}
                strokeWidth="0.4"
                style={{ transition: 'all 0.3s ease' }}
              />
              {/* Label */}
              <text
                textAnchor="middle"
                dy="5"
                fontSize="2.2"
                fontFamily="'JetBrains Mono', monospace"
                fill={active ? node.color : '#374151'}
                fontWeight="600"
                letterSpacing="0.1"
                style={{ transition: 'fill 0.3s ease', userSelect: 'none' }}
              >
                {node.label}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
};

/* ── SystemDesign section ─────────────────────────────── */
const SystemDesign = () => {
  const [hoveredNode, setHoveredNode] = useState(null);
  const hNode = ARCH_NODES.find(n => n.id === hoveredNode);
  const sectionRef = useRef(null);
  const titleRef   = useRef(null);

  useEffect(() => {
    if (!titleRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(titleRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 0.9, ease: 'power3.out',
          scrollTrigger: { trigger: titleRef.current, start: 'top 80%' },
        }
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="systems"
      ref={sectionRef}
      className="section"
      style={{
        background: 'linear-gradient(180deg, #08060a 0%, #060608 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div aria-hidden="true" style={{
        position: 'absolute', top: '50%', right: '-5%',
        transform: 'translateY(-50%)',
        width: '600px', height: '600px',
        background: 'radial-gradient(ellipse, rgba(239,68,68,0.05) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="container">
        <div className="scene-label">SCENE 06 — SYSTEM DESIGN</div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '5rem',
          alignItems: 'start',
        }}>
          {/* Left — title + description */}
          <div>
            <div ref={titleRef} style={{ opacity: 0 }}>
              <h2 style={{
                fontSize: 'clamp(2.5rem, 5vw, 5rem)',
                fontWeight: 800,
                letterSpacing: '-0.03em',
                lineHeight: 1.05,
                marginBottom: '1.5rem',
              }}>
                BEYOND CODE.<br />
                <span style={{
                  background: 'linear-gradient(135deg, #ef4444, #f97316)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}>
                  THINKING IN<br />SYSTEMS.
                </span>
              </h2>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              style={{
                color: '#9ca3af',
                fontSize: '0.95rem',
                lineHeight: 1.8,
                marginBottom: '2.5rem',
              }}
            >
              I don't just write APIs — I design the architecture that supports them.
              Hover a component to understand how it fits in the system.
            </motion.p>

            {/* Hovered node info */}
            <AnimatePresence mode="wait">
              {hNode ? (
                <motion.div
                  key={hNode.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.25 }}
                  style={{
                    padding: '1.5rem',
                    background: `${hNode.color}08`,
                    border: `1px solid ${hNode.color}30`,
                    borderRadius: '2px',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                >
                  <div style={{
                    position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
                    background: `linear-gradient(90deg, ${hNode.color}, transparent)`,
                  }} />
                  <p style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.65rem',
                    color: hNode.color,
                    letterSpacing: '0.15em',
                    marginBottom: '0.5rem',
                  }}>
                    {hNode.label}
                  </p>
                  <p style={{ color: '#d1d5db', fontSize: '0.875rem', lineHeight: 1.7 }}>
                    {hNode.desc}
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  key="prompt"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  style={{
                    padding: '1.5rem',
                    border: '1px solid rgba(255,255,255,0.05)',
                    borderRadius: '2px',
                  }}
                >
                  <p style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.68rem',
                    color: '#4b5563',
                    letterSpacing: '0.12em',
                  }}>
                    ← HOVER A COMPONENT TO EXPLORE
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* System principles */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              style={{ marginTop: '2.5rem', display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}
            >
              {['Scalability', 'Fault Tolerance', 'Caching', 'Async Processing', 'RBAC', 'API Design'].map(p => (
                <span key={p} className="tech-pill">{p}</span>
              ))}
            </motion.div>
          </div>

          {/* Right — SVG diagram */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <ArchDiagram hoveredNode={hoveredNode} setHoveredNode={setHoveredNode} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SystemDesign;
