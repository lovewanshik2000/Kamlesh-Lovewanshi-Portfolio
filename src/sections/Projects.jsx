import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    num: "01",
    name: "FMCG SECONDARY SALES & DISTRIBUTOR MANAGEMENT",
    client: "Godfrey Phillips India",
    impact: "50%+ reporting efficiency",
    tech: "Python, Django, DRF, MySQL, Celery, Redis",
    arch: "ERP → Data Processing → Backend APIs → Business Logic → DB → Async Processing",
    desc: "Sales Force Automation, Distributor Management, Secondary Sales, ERP Data, Analytics."
  },
  {
    num: "02",
    name: "MODERN TRADE MANAGEMENT SYSTEM",
    client: "Godfrey Phillips India",
    impact: "Scalable backend services, Large user base",
    tech: "Python, Django, PostgreSQL",
    arch: "Mobile Client → API Gateway → Order Service → Inventory → DB",
    desc: "Outlet Mapping, Attendance, Route Planning, Inventory, Orders, Sales Analytics."
  },
  {
    num: "03",
    name: "CUGL DOMESTIC PNG LIFECYCLE",
    client: "CUGL",
    impact: "End-to-end operational visibility",
    tech: "Django, SAP Integration",
    arch: "Customer → API → Business Logic → SAP / CGD → Database",
    desc: "Registration, Billing, Field Operations, Customer Service, SAP Integration."
  },
  {
    num: "04",
    name: "AGL FILE & BILL TRACKING SYSTEM",
    client: "AGL",
    impact: "Streamlined vendor billing & compliance",
    tech: "Python, Django, Pandas",
    arch: "Vendor → Portal → Workflow Engine → Approvals → Reports",
    desc: "Workflow automation, multi-level approvals (Finance, HR, HSEQ), vendor portals, contract mapping."
  },
  {
    num: "05",
    name: "LMS & TEST SERIES GENERATOR",
    client: "Hajela IAS Academy",
    impact: "70% reduction in manual content preparation",
    tech: "Django, Python, Docker, Nginx, Gunicorn",
    arch: "PDF → Extraction → Processing → Structured Data → Excel → Deployment",
    desc: "Automated extraction of test content to structured formats, Excel reports."
  }
];

const Projects = () => {
  return (
    <section id="projects" className="section container" style={{ paddingBottom: '10rem' }}>
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{ marginBottom: '4rem', textAlign: 'center' }}
      >
        <h2 style={{ fontSize: 'clamp(3rem, 6vw, 5rem)' }}>CASE STUDIES</h2>
        <p style={{ color: 'var(--text-secondary)' }}>Selected works in backend engineering, scalable architectures, and automation.</p>
      </motion.div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem', position: 'relative' }}>
        {projects.map((project, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="interactive" 
            style={{ 
              position: 'sticky', 
              top: `calc(15vh + ${idx * 30}px)`, 
              background: 'var(--surface-color)', 
              padding: '3rem', 
              borderRadius: '12px', 
              border: '1px solid var(--border-color)',
              boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
              display: 'flex', 
              flexDirection: 'column',
              gap: '2rem'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '2rem' }}>
              <div style={{ flex: '1 1 500px' }}>
                <p style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent-color)', fontSize: '1.25rem', marginBottom: '1rem' }}>{project.num}</p>
                <h3 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', marginBottom: '1rem', lineHeight: 1.2 }}>{project.name}</h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>Client: <span style={{ color: '#fff' }}>{project.client}</span></p>
                
                <div style={{ marginBottom: '1.5rem' }}>
                  <h4 style={{ fontFamily: 'var(--font-mono)', fontSize: '0.875rem', color: '#fff', marginBottom: '0.5rem' }}>ARCHITECTURE</h4>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>{project.arch}</p>
                </div>
                
                <div style={{ marginBottom: '1.5rem' }}>
                  <h4 style={{ fontFamily: 'var(--font-mono)', fontSize: '0.875rem', color: '#fff', marginBottom: '0.5rem' }}>FEATURES</h4>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>{project.desc}</p>
                </div>
              </div>
              
              <div style={{ flex: '1 1 300px', background: 'rgba(255,255,255,0.02)', padding: '2rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)' }}>
                <div style={{ marginBottom: '2rem' }}>
                  <h4 style={{ fontFamily: 'var(--font-mono)', fontSize: '0.875rem', color: '#fff', marginBottom: '0.5rem' }}>TECHNOLOGY</h4>
                  <p style={{ color: 'var(--accent-color)', fontSize: '0.875rem', lineHeight: '1.6' }}>{project.tech}</p>
                </div>
                <div>
                  <h4 style={{ fontFamily: 'var(--font-mono)', fontSize: '0.875rem', color: '#fff', marginBottom: '0.5rem' }}>IMPACT</h4>
                  <p style={{ color: '#27c93f', fontSize: '1.25rem', fontWeight: 'bold' }}>{project.impact}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
