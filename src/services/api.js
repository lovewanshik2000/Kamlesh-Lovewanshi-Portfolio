/**
 * API Service with Automated Demo Mode & Graceful Fallback
 * 
 * Free-tier deployments (e.g. Render) spin down after 15 minutes of inactivity.
 * This service implements timeout-bounded requests and seamless fallback to
 * structured sample demo data so recruiters and interviewers always experience
 * responsive interactive demonstrations without ever encountering broken errors.
 */

const API_BASE_URL = (import.meta.env.VITE_API_URL || 'http://localhost:8000').replace(/\/$/, '');
const REQUEST_TIMEOUT_MS = 4500;

// High-fidelity fallback sample data for CareerPilot-AI
const DEMO_CAREERPILOT_DATA = {
  isDemo: true,
  demoLabel: 'CONCEPT / R&D DEMO',
  jobTitle: 'Software Engineer | Python Backend Developer',
  alignmentStatus: 'STRONG ARCHITECTURAL ALIGNMENT',
  matchRating: 'HIGH RELEVANCE (R&D EVALUATION)',
  seniorityLevel: 'Software Engineer (4+ YOE)',
  parsedSkills: {
    core: ['Python', 'Django REST Framework', 'FastAPI', 'System Architecture'],
    databases: ['PostgreSQL (pgvector)', 'MySQL', 'Redis'],
    distributed: ['Celery', 'Docker', 'Async Task Queues', 'Microservices'],
    cloudAndDevOps: ['AWS S3', 'NGINX', 'CI/CD Pipelines'],
    aiExploration: ['RAG Architectures', 'LangChain', 'OpenCV / YOLO'],
  },
  strengths: [
    'Direct architectural alignment with distributed async systems (Celery + Redis).',
    'Demonstrated enterprise scale (100+ REST API endpoints, ERP integration).',
    'Targeted database optimization (~40% report query time reduction).',
  ],
  suggestedAction: 'Sample R&D evaluation demonstrating semantic parsing across candidate engineering stack.',
};

// High-fidelity fallback sample data for AI Document Intelligence (RAG)
const DEMO_RAG_DATA = {
  isDemo: true,
  demoLabel: 'CONCEPT / R&D DEMO',
  query: 'How are database queries and caching structured to handle high-volume sales reports?',
  groundedAnswer: 'Database queries are optimized using B-tree compound indexing across distributor and regional sales partition keys. Analytical aggregation runs via Celery task queues with Redis intermediate caching, offloading expensive computations from the primary transaction pool and reducing end-to-end report generation turnaround by ~40%.',
  citations: [
    { source: 'Architecture_Spec_FMCG_DMS.pdf', chunkId: 'chk_sec_04_db_opt' },
    { source: 'Async_Worker_Pipeline_Celery.md', chunkId: 'chk_celery_task_spec' },
  ],
  pipelineStages: [
    'Document Ingestion & Semantic Chunking',
    'pgvector Dense Embeddings Similarity Search (Top-3)',
    'Context Reranking & Prompt Assembly',
    'Grounded LLM Response Synthesis',
  ],
};

/**
 * Fetch wrapper with timeout handling
 */
async function fetchWithTimeout(url, options = {}, timeoutMs = REQUEST_TIMEOUT_MS) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeoutMs);

  try {
    const response = await fetch(url, {
      ...options,
      signal: controller.signal,
      headers: {
        'Content-Type': 'application/json',
        ...(options.headers || {}),
      },
    });
    clearTimeout(timeoutId);
    return response;
  } catch (err) {
    clearTimeout(timeoutId);
    throw err;
  }
}

/**
 * Health check with status detection
 */
export async function checkBackendStatus() {
  const start = performance.now();
  try {
    const res = await fetchWithTimeout(`${API_BASE_URL}/health`, { method: 'GET' }, 3000);
    if (res.ok) {
      const data = await res.json();
      return {
        online: true,
        mode: 'live',
        latencyMs: Math.round(performance.now() - start),
        info: data,
      };
    }
  } catch (err) {
    // Expected when Render is waking up or service is offline
  }

  return {
    online: false,
    mode: 'demo',
    latencyMs: Math.round(performance.now() - start),
    message: 'Backend is waking up (free-tier cold start) — running in DEMO MODE',
  };
}

/**
 * CareerPilot-AI: Analyze Job Description
 */
export async function analyzeJobDescription(payload = {}) {
  try {
    const res = await fetchWithTimeout(`${API_BASE_URL}/api/ai/analyze`, {
      method: 'POST',
      body: JSON.stringify(payload),
    });

    if (res.ok) {
      const data = await res.json();
      return {
        ...data,
        source: 'live-backend',
        isDemo: data.is_demo ?? false,
      };
    }
  } catch (err) {
    console.info('[Portfolio API] Live backend unavailable or waking up; engaging DEMO MODE fallback.');
  }

  // Graceful Demo Mode fallback
  return {
    ...DEMO_CAREERPILOT_DATA,
    jobTitle: payload.jobTitle || DEMO_CAREERPILOT_DATA.jobTitle,
    source: 'demo-fallback',
  };
}

/**
 * AI Document Intelligence: Query knowledge copilot
 */
export async function queryDocumentKnowledge(payload = {}) {
  try {
    const res = await fetchWithTimeout(`${API_BASE_URL}/api/ai/document-qa`, {
      method: 'POST',
      body: JSON.stringify(payload),
    });

    if (res.ok) {
      const data = await res.json();
      return {
        ...data,
        source: 'live-backend',
        isDemo: data.is_demo ?? false,
      };
    }
  } catch (err) {
    console.info('[Portfolio API] Live backend unavailable or waking up; engaging DEMO MODE fallback.');
  }

  // Graceful Demo Mode fallback
  return {
    ...DEMO_RAG_DATA,
    query: payload.question || DEMO_RAG_DATA.query,
    source: 'demo-fallback',
  };
}

export default {
  checkBackendStatus,
  analyzeJobDescription,
  queryDocumentKnowledge,
};
