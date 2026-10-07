import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { checkBackendStatus, analyzeJobDescription, queryDocumentKnowledge } from '../services/api';

const PRESETS_04 = [
  {
    id: 'backend',
    label: 'Python Backend & Distributed Systems',
    jd: 'Looking for a Python Backend Developer with 4+ years experience in Django REST, FastAPI, Celery, Redis, PostgreSQL, and scalable microservices.',
  },
  {
    id: 'architect',
    label: 'Backend Engineer (Asynchronous APIs & Data Pipelines)',
    jd: 'Seeking an experienced backend engineer to design async background pipelines, optimize query performance across relational schemas, and integrate ERP/SSO systems.',
  },
];

const PRESETS_05 = [
  {
    id: 'fmcg-db',
    question: 'How are database queries and caching structured to handle high-volume sales reports?',
  },
  {
    id: 'celery-pipeline',
    question: 'What is the retry and failure recovery policy for asynchronous ERP sync workers?',
  },
];

const ProjectDemoSimulator = ({ projectId, color = '#a78bfa', onClose }) => {
  const isCareerPilot = projectId === '04';
  const [backendState, setBackendState] = useState({ online: false, checking: true });
  const [activePreset, setActivePreset] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [currentStep, setCurrentStep] = useState('');
  const [output, setOutput] = useState(null);
  const [viewTab, setViewTab] = useState('summary'); // 'summary' | 'json'

  // Probe backend status on mount
  useEffect(() => {
    let mounted = true;
    checkBackendStatus().then(status => {
      if (mounted) {
        setBackendState({ online: status.online, checking: false, info: status });
      }
    });
    return () => { mounted = false; };
  }, []);

  const handleRunSimulation = async () => {
    setIsRunning(true);
    setOutput(null);

    if (isCareerPilot) {
      setCurrentStep('Parsing unstructured job description...');
      await new Promise(r => setTimeout(r, 350));
      setCurrentStep('Extracting required tech competencies & seniority signals...');
      await new Promise(r => setTimeout(r, 450));
      setCurrentStep('Evaluating semantic similarity against candidate engineering profile...');
      
      const payload = {
        jobTitle: PRESETS_04[activePreset].label,
        jobDescription: PRESETS_04[activePreset].jd,
        candidateSkills: ['Python', 'Django', 'FastAPI', 'Celery', 'PostgreSQL', 'Redis', 'Docker'],
      };

      const result = await analyzeJobDescription(payload);
      setOutput(result);
    } else {
      setCurrentStep('Vectorizing search query via dense embedding model...');
      await new Promise(r => setTimeout(r, 350));
      setCurrentStep('Querying pgvector index for top-3 relevant context chunks...');
      await new Promise(r => setTimeout(r, 450));
      setCurrentStep('Assembling grounded prompt context with source citations...');
      
      const payload = {
        question: PRESETS_05[activePreset].question,
        documentContext: 'Architecture_Spec_FMCG_DMS.pdf',
      };

      const result = await queryDocumentKnowledge(payload);
      setOutput(result);
    }

    setIsRunning(false);
    setCurrentStep('');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      style={{
        marginTop: '1.5rem',
        padding: '1.25rem',
        background: 'rgba(10, 8, 14, 0.95)',
        border: `1px solid ${color}40`,
        borderRadius: '3px',
        boxShadow: `0 12px 36px rgba(0, 0, 0, 0.6), 0 0 20px ${color}15`,
        fontFamily: 'var(--font-mono)',
        fontSize: '0.75rem',
      }}
    >
      {/* Simulator Terminal Header */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingBottom: '0.75rem',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        marginBottom: '1rem',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ef4444' }} />
          <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#f59e0b' }} />
          <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10b981' }} />
          <span style={{ color: color, fontWeight: 700, letterSpacing: '0.1em', marginLeft: '0.5rem' }}>
            {isCareerPilot ? 'CAREERPILOT // CONCEPT R&D DEMO' : 'DOC INTEL // CONCEPT R&D DEMO'}
          </span>
        </div>

        {/* Backend Status Badge */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.4rem',
            padding: '0.2rem 0.5rem',
            background: backendState.online ? 'rgba(16, 185, 129, 0.1)' : 'rgba(245, 158, 11, 0.1)',
            border: `1px solid ${backendState.online ? '#10b981' : '#f59e0b'}35`,
            borderRadius: '2px',
            fontSize: '0.62rem',
          }}>
            <span style={{
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              background: backendState.online ? '#10b981' : '#f59e0b',
              boxShadow: `0 0 6px ${backendState.online ? '#10b981' : '#f59e0b'}`,
            }} />
            <span style={{ color: backendState.online ? '#10b981' : '#f59e0b' }}>
              {backendState.checking
                ? 'PROBING RENDER...'
                : backendState.online
                ? 'RENDER BACKEND ONLINE'
                : 'DEMO MODE (COLD-START TOLERANT)'}
            </span>
          </div>

          <button
            onClick={onClose}
            aria-label="Close demo simulator"
            style={{
              background: 'transparent',
              border: 'none',
              color: '#6b7280',
              cursor: 'pointer',
              fontSize: '0.85rem',
              padding: '0 0.25rem',
            }}
          >
            ✕
          </button>
        </div>
      </div>

      {/* Description / Notice */}
      <p style={{ color: '#9ca3af', fontSize: '0.72rem', lineHeight: 1.5, marginBottom: '1rem' }}>
        {isCareerPilot
          ? 'Interactive demonstration of the JD extraction & candidate semantic matching pipeline. Select a sample role or trigger evaluation:'
          : 'Interactive demonstration of the retrieval-augmented generation (RAG) knowledge engine across backend architecture docs:'}
      </p>

      {/* Preset Selector */}
      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
        {(isCareerPilot ? PRESETS_04 : PRESETS_05).map((preset, idx) => (
          <button
            key={idx}
            onClick={() => { setActivePreset(idx); setOutput(null); }}
            style={{
              padding: '0.4rem 0.75rem',
              background: activePreset === idx ? `${color}18` : 'rgba(255, 255, 255, 0.03)',
              border: `1px solid ${activePreset === idx ? color : 'rgba(255, 255, 255, 0.1)'}`,
              borderRadius: '2px',
              color: activePreset === idx ? '#fff' : '#9ca3af',
              fontSize: '0.65rem',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              fontFamily: 'var(--font-mono)',
            }}
          >
            {isCareerPilot ? preset.label : preset.question.slice(0, 48) + '...'}
          </button>
        ))}
      </div>

      {/* Action Button */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
        <button
          onClick={handleRunSimulation}
          disabled={isRunning}
          style={{
            padding: '0.55rem 1.25rem',
            background: isRunning ? 'rgba(255, 255, 255, 0.05)' : color,
            border: `1px solid ${color}`,
            borderRadius: '2px',
            color: isRunning ? '#6b7280' : '#000',
            fontWeight: 700,
            fontSize: '0.7rem',
            letterSpacing: '0.08em',
            cursor: isRunning ? 'wait' : 'pointer',
            transition: 'all 0.2s ease',
            fontFamily: 'var(--font-mono)',
          }}
        >
          {isRunning ? 'EXECUTING PIPELINE...' : '⚡ RUN INTERACTIVE DEMO'}
        </button>

        {isRunning && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: color, fontSize: '0.68rem' }}>
            <span className="spinner" style={{ animation: 'spin 1s linear infinite' }}>◈</span>
            <span>{currentStep}</span>
          </div>
        )}
      </div>

      {/* Results Output Area */}
      {output && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          style={{
            background: 'rgba(0, 0, 0, 0.5)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: '2px',
            padding: '1rem',
          }}
        >
          {/* Output Toolbar */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
            paddingBottom: '0.5rem',
            marginBottom: '0.75rem',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <span style={{
                padding: '0.15rem 0.45rem',
                background: 'rgba(245, 158, 11, 0.15)',
                border: '1px solid rgba(245, 158, 11, 0.3)',
                color: '#f59e0b',
                borderRadius: '2px',
                fontSize: '0.6rem',
                fontWeight: 700,
              }}>
                {output.demoLabel || (output.isDemo ? 'DEMO DATA' : 'LIVE API')}
              </span>
              <span style={{ color: '#6b7280', fontSize: '0.62rem' }}>
                Source: {output.source || 'verified-schema'}
              </span>
            </div>

            <div style={{ display: 'flex', gap: '0.4rem' }}>
              <button
                onClick={() => setViewTab('summary')}
                style={{
                  background: viewTab === 'summary' ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
                  border: 'none',
                  color: viewTab === 'summary' ? '#fff' : '#6b7280',
                  padding: '0.2rem 0.5rem',
                  borderRadius: '2px',
                  fontSize: '0.6rem',
                  cursor: 'pointer',
                }}
              >
                SUMMARY
              </button>
              <button
                onClick={() => setViewTab('json')}
                style={{
                  background: viewTab === 'json' ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
                  border: 'none',
                  color: viewTab === 'json' ? '#fff' : '#6b7280',
                  padding: '0.2rem 0.5rem',
                  borderRadius: '2px',
                  fontSize: '0.6rem',
                  cursor: 'pointer',
                }}
              >
                JSON
              </button>
            </div>
          </div>

          {/* Tab 1: Summary View */}
          {viewTab === 'summary' && (
            <div>
              {isCareerPilot ? (
                <div>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.75rem', marginBottom: '0.6rem', flexWrap: 'wrap' }}>
                    <span style={{ color: '#10b981', fontSize: '0.85rem', fontWeight: 800, letterSpacing: '0.04em' }}>
                      {output.alignmentStatus || 'STRONG ARCHITECTURAL ALIGNMENT'}
                    </span>
                    <span style={{ color: '#d1d5db', fontSize: '0.68rem', fontWeight: 600 }}>
                      {output.matchRating || 'SAMPLE R&D EVALUATION'}
                    </span>
                    <span style={{ color: '#6b7280', fontSize: '0.62rem' }}>
                      ({output.seniorityLevel || 'Software Engineer • 4+ YOE'})
                    </span>
                  </div>

                  <div style={{ marginBottom: '0.75rem' }}>
                    <p style={{ color: '#6b7280', fontSize: '0.6rem', marginBottom: '0.3rem' }}>IDENTIFIED CORE STACK:</p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.3rem' }}>
                      {(output.parsedSkills?.core || ['Python', 'Django', 'FastAPI', 'Celery', 'Redis', 'PostgreSQL']).map((s, i) => (
                        <span key={i} style={{
                          padding: '0.15rem 0.4rem',
                          background: `${color}15`,
                          border: `1px solid ${color}30`,
                          color: '#fff',
                          fontSize: '0.62rem',
                          borderRadius: '2px',
                        }}>
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  <p style={{ color: '#9ca3af', fontSize: '0.7rem', lineHeight: 1.5 }}>
                    {output.suggestedAction || 'Sample R&D evaluation demonstrating semantic parsing across candidate engineering stack.'}
                  </p>
                </div>
              ) : (
                <div>
                  <p style={{ color: '#6b7280', fontSize: '0.6rem', marginBottom: '0.3rem' }}>GROUNDED ANSWER (RAG SYNTHESIS):</p>
                  <p style={{ color: '#e5e7eb', fontSize: '0.75rem', lineHeight: 1.6, marginBottom: '0.75rem' }}>
                    {output.groundedAnswer}
                  </p>

                  <p style={{ color: '#6b7280', fontSize: '0.6rem', marginBottom: '0.3rem' }}>RETRIEVED ARCHITECTURAL CONTEXT:</p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                    {(output.citations || []).map((cite, i) => (
                      <div key={i} style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        background: 'rgba(255, 255, 255, 0.02)',
                        padding: '0.3rem 0.5rem',
                        border: '1px solid rgba(255, 255, 255, 0.05)',
                        fontSize: '0.62rem',
                      }}>
                        <span style={{ color: color }}>📄 {cite.source}</span>
                        <span style={{ color: '#10b981', fontSize: '0.58rem' }}>[RETRIEVED CHUNK]</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Tab 2: Raw JSON View */}
          {viewTab === 'json' && (
            <pre style={{
              margin: 0,
              color: '#34d399',
              fontSize: '0.62rem',
              maxHeight: '180px',
              overflowY: 'auto',
              lineHeight: 1.4,
            }}>
              {JSON.stringify(output, null, 2)}
            </pre>
          )}
        </motion.div>
      )}
    </motion.div>
  );
};

export default ProjectDemoSimulator;
