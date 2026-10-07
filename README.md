# Kamlesh Lovewanshi — Cinematic Engineering Portfolio & Architecture

[![Production CI Check](https://github.com/lovewanshik2000/Kamlesh-Lovewanshi-Portfolio/actions/workflows/ci.yml/badge.svg)](https://github.com/lovewanshik2000/Kamlesh-Lovewanshi-Portfolio/actions/workflows/ci.yml)
[![Frontend Deployment](https://img.shields.io/badge/Frontend-Vercel-black?style=flat&logo=vercel)](https://kamlesh-lovewanshi-portfolio.vercel.app)
[![Backend API](https://img.shields.io/badge/Backend-Render-46E3B7?style=flat&logo=render&logoColor=black)](https://kamlesh-portfolio-backend.onrender.com/docs)
[![Python](https://img.shields.io/badge/Python-3.12-3776AB?style=flat&logo=python&logoColor=white)](https://www.python.org/)
[![React](https://img.shields.io/badge/React-19.3-61DAFB?style=flat&logo=react&logoColor=black)](https://react.dev/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

An Awwwards-caliber, cinematic interactive portfolio and distributed systems showcase engineered by **Kamlesh Lovewanshi** (Software Engineer & Python Backend Developer with 4+ years building high-throughput REST APIs, asynchronous task queues, and microservices).

---

## Architecture Overview

```
                                  +-------------------------------------------------------+
                                  |                 GitHub Monorepo                       |
                                  |     (lovewanshik2000/Kamlesh-Lovewanshi-Portfolio)    |
                                  +---------------------------+---------------------------+
                                                              |
                               +------------------------------+------------------------------+
                               |                                                             |
                   [Push to main / develop]                                      [Push to main / develop]
                               |                                                             |
                               v                                                             v
               +-------------------------------+                             +-------------------------------+
               |       Frontend Pipeline       |                             |       Backend Pipeline        |
               |          (Vercel)             |                             |           (Render)            |
               +---------------+---------------+                             +---------------+---------------+
                               |                                                             |
                 React 19 + Vite 8 SPA Bundle                                 FastAPI + Uvicorn (0.0.0.0:$PORT)
                 Rolldown Vendor Code Splitting                               CORS restricted to Vercel/Local
                 Immutable Asset Caching (1yr)                                Server-side LLM Key Protection
                 SPA Rewrites via vercel.json                                 Cold-start Health Ping (/health)
                               |                                                             |
                               +-----------------------+     +-------------------------------+
                                                       |     |
                                                       v     v
                                        +-----------------------------+
                                        |   Resilient Demo Engine     |
                                        |   - Sub-150ms Cold Tolerance|
                                        |   - Auto Demo Mode Fallback |
                                        |   - Interactive R&D Sim     |
                                        +-----------------------------+
```

---

## Key Features

- **Cinematic Scene Sequencing**: 8 synchronized narrative scenes transitioning from identity, engineering principles, technology universe, career timeline, project environments, system design, AI exploration, to contact.
- **Interactive Project Simulators**:
  - **CareerPilot-AI**: Live demonstration of unstructured job description parsing, requirement extraction, and semantic candidate matching.
  - **AI Document Intelligence & Knowledge Copilot**: RAG pipeline simulator with dense vector retrieval simulation and source citations.
- **Automated Cold-Start Resilience**: Seamlessly handles free-tier sleeping states (Render 15-minute idle spin-down) via client-side health probing and graceful fallback to verified sample schemas tagged `DEMO DATA`.
- **Zero-Secret Client Security**: All third-party AI keys (`OPENAI_API_KEY`, `GEMINI_API_KEY`) remain strictly server-side. The frontend communicates exclusively through the backend reverse proxy.
- **High-Performance Motion Engine**: GSAP ScrollTrigger and Framer Motion micro-interactions running exclusively on hardware-accelerated CSS properties (`transform`, `opacity`).
- **Production Asset Chunking**: Split vendor bundles (`vendor-react`, `vendor-motion`, `vendor-gsap`, `vendor-icons`), ensuring initial page payload remains under 100kB gzip.

---

## Tech Stack

### Frontend
- **Framework**: React 19.3 + Vite 8.3
- **Motion & 3D**: Framer Motion 13, GSAP 3 (ScrollTrigger)
- **Icons**: Lucide React
- **Typography**: Bebas Neue (cinematic display), Outfit (body), JetBrains Mono (code)
- **Deployment Target**: Vercel (Edge Network)

### Backend
- **Framework**: FastAPI 0.115 + Uvicorn 0.30 (ASGI)
- **Validation**: Pydantic 2.13
- **Runtime**: Python 3.12 (slim containerized)
- **Deployment Target**: Render (Free Web Service)

---

## Project Structure

```
.
├── backend/                        # FastAPI Backend Application
│   ├── Dockerfile                  # Non-root, multi-stage production Docker image
│   ├── .dockerignore               # Container build exclusions
│   ├── .env.example                # Backend environment variables reference
│   ├── main.py                     # FastAPI server, CORS, /health & AI endpoints
│   └── requirements.txt            # Python dependencies (fastapi, uvicorn, pydantic)
├── public/                         # Static assets & head media
│   └── kamlesh.png                 # Profile photograph
├── src/
│   ├── components/                 # Reusable UI components
│   │   ├── CustomCursor.jsx        # Canvas-smoothed custom cursor (desktop)
│   │   ├── Loader.jsx              # Film-strip introductory cinematic loader
│   │   ├── Navbar.jsx              # Responsive glassmorphic navigation bar
│   │   └── ProjectDemoSimulator.jsx# Live interactive demo drawer for R&D projects
│   ├── sections/                   # 8 Cinematic Portfolio Scenes
│   │   ├── Hero.jsx                # SCENE 01: Hero & identity declaration
│   │   ├── About.jsx               # SCENE 02: Principles, philosophy & metrics
│   │   ├── TechUniverse.jsx        # SCENE 03: Categorized stack & tools strip
│   │   ├── Timeline.jsx            # SCENE 04: Career timeline & experience
│   │   ├── Projects.jsx            # SCENE 05: 5 Case studies with animated pipelines
│   │   ├── Systems.jsx             # SCENE 06: Interactive system architecture blueprint
│   │   ├── AIExploration.jsx       # SCENE 07: Applied AI & GenAI exploration
│   │   └── Contact.jsx             # SCENE 08: Direct channels & terminal footer
│   ├── services/
│   │   └── api.js                  # Client API with timeout & Demo Mode fallback
│   ├── App.jsx                     # Top-level composition & noise overlay
│   ├── index.css                   # Core design tokens, typography, utilities
│   └── main.jsx                    # React entrypoint
├── .github/
│   └── workflows/
│       └── ci.yml                  # GitHub Actions continuous integration check
├── render.yaml                     # Render Blueprint specification
├── vercel.json                     # Vercel SPA rewrites & security headers
├── vite.config.js                  # Rollup manual chunking & base path
└── package.json                    # Node dependencies & build scripts
```

---

## Local Development

### Prerequisites
- Node.js 20+ and npm
- Python 3.12+ and pip

### 1. Clone the repository
```bash
git clone https://github.com/lovewanshik2000/Kamlesh-Lovewanshi-Portfolio.git
cd Kamlesh-Lovewanshi-Portfolio
```

### 2. Run Frontend
```bash
npm install
npm run dev
```
Frontend runs on: `http://localhost:3000`

### 3. Run Backend (in parallel terminal)
```bash
python3 -m pip install -r backend/requirements.txt
uvicorn backend.main:app --host 0.0.0.0 --port 8000 --reload
```
Backend API docs available at: `http://localhost:8000/docs`

---

## Production Deployment Guide (100% Free Tiers)

### Part A: Deploying Backend to Render

1. Create a free account at [render.com](https://render.com).
2. Click **New +** -> **Web Service**.
3. Connect your GitHub repository `lovewanshik2000/Kamlesh-Lovewanshi-Portfolio`.
4. Configure the service settings:
   - **Name**: `kamlesh-portfolio-backend`
   - **Region**: Oregon (US West) or closest region
   - **Branch**: `main`
   - **Root Directory**: Leave blank (uses repo root)
   - **Runtime**: `Python 3`
   - **Build Command**: `pip install -r backend/requirements.txt`
   - **Start Command**: `uvicorn backend.main:app --host 0.0.0.0 --port $PORT`
   - **Plan**: `Free`
5. Configure Environment Variables in Render Dashboard:
   - `ENVIRONMENT`: `production`
   - `FRONTEND_URL`: `https://kamlesh-lovewanshi-portfolio.vercel.app`
   - `OPENAI_API_KEY`: *(Optional - leave blank to operate in zero-cost Demo Mode)*
6. Click **Create Web Service**.
7. Note down your backend URL: `https://kamlesh-portfolio-backend.onrender.com`.

*(Alternatively, use **New +** -> **Blueprint** and point to `render.yaml`)*.

---

### Part B: Deploying Frontend to Vercel

1. Create a free account at [vercel.com](https://vercel.com).
2. Click **Add New...** -> **Project**.
3. Import `lovewanshik2000/Kamlesh-Lovewanshi-Portfolio`.
4. Configure the project:
   - **Framework Preset**: `Vite`
   - **Root Directory**: `./`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Add Environment Variable:
   - `VITE_API_URL`: `https://kamlesh-portfolio-backend.onrender.com`
6. Click **Deploy**.

---

## Environment Variables Reference

### Frontend (.env)
| Variable | Required | Description |
|---|---|---|
| `VITE_API_URL` | Yes | URL of deployed Render backend (e.g. `https://kamlesh-portfolio-backend.onrender.com`) |
| `VITE_GITHUB_USERNAME` | No | Public GitHub profile handle |
| `VITE_LINKEDIN_SLUG` | No | Public LinkedIn vanity URL slug |

### Backend (backend/.env)
| Variable | Required | Description |
|---|---|---|
| `PORT` | Auto (Render) | Port number (injected automatically by Render) |
| `ENVIRONMENT` | Yes | Runtime mode (`production` or `development`) |
| `FRONTEND_URL` | Yes | Deployed Vercel domain for CORS validation |
| `OPENAI_API_KEY` | Optional | Server-side key for live LLM completions (leaves in Demo Mode if omitted) |
| `GEMINI_API_KEY` | Optional | Server-side key for Google Gemini model access |

---

## Production Verification Checklist

- [x] `npm install` and `npm run build` pass with 0 errors
- [x] Vendor chunks cleanly separated (`vendor-react`, `vendor-motion`, `vendor-gsap`, `vendor-icons`)
- [x] `vercel.json` provides SPA routing rewrites and security headers
- [x] Backend syntax verified with `python3 -m py_compile backend/main.py`
- [x] FastAPI `/health` endpoint tested and responding HTTP 200
- [x] Dynamic CORS correctly validates localhost and `*.vercel.app` domains
- [x] Interactive demo simulator functional for CareerPilot-AI and AI Document Intelligence
- [x] Automated cold-start tolerance engages `DEMO MODE` when backend is waking up
- [x] Zero API keys or secrets committed in client code
- [x] GitHub Actions CI workflow configured for automated linting and build validation

---

## Troubleshooting Guide

### 1. "Backend waking up / Demo Mode" badge is showing
- **Reason**: Render's free tier automatically spins down web services after 15 minutes of inactivity. The first subsequent request can take 20–50 seconds while the container initializes.
- **Handling**: The portfolio detects this state within 4.5 seconds and immediately provides high-fidelity sample evaluations without blocking the user or throwing errors. Once Render completes initialization, subsequent queries execute live.

### 2. CORS error in browser console
- **Reason**: The `FRONTEND_URL` variable in Render does not match your Vercel URL.
- **Solution**: The backend includes a wildcard regex `^https://.*\.vercel\.app$` allowing all Vercel branch and preview deployments. Ensure requests include credentials headers if configured.

### 3. Build error on Vercel: "Cannot find module"
- **Solution**: Run `npm run build` locally. Check casing on imports (Linux environments are case-sensitive). All imports in this repository use exact casing.

---

## Contact & Profile

- **Engineer**: Kamlesh Lovewanshi
- **Role**: Software Engineer | Python Backend Developer
- **Email**: [kamleshlovewanshi2025@gmail.com](mailto:kamleshlovewanshi2025@gmail.com)
- **LinkedIn**: [linkedin.com/in/kamlesh-lovewanshi](https://linkedin.com/in/kamlesh-lovewanshi)
- **GitHub**: [github.com/lovewanshik2000](https://github.com/lovewanshik2000)
- **Location**: Noida, UP, India
