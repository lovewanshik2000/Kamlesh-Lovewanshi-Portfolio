# Multi-stage / Lightweight Production Dockerfile for FastAPI Backend on Render / Cloud
FROM python:3.12-slim AS builder

WORKDIR /app

# Install build dependencies if needed
ENV PYTHONDONTWRITEBYTECODE=1 \
    PYTHONUNBUFFERED=1

COPY requirements.txt .
RUN pip install --no-cache-dir --user -r requirements.txt

# Final runtime image
FROM python:3.12-slim AS runner

WORKDIR /app

# Create non-root user for container security
RUN groupadd -g 10001 appuser && \
    useradd -u 10000 -g appuser -s /sbin/nologin -d /app appuser

# Copy installed wheels from builder
COPY --from=builder /root/.local /home/appuser/.local
ENV PATH=/home/appuser/.local/bin:$PATH \
    PYTHONDONTWRITEBYTECODE=1 \
    PYTHONUNBUFFERED=1 \
    PORT=8000

# Copy application source code
COPY . .
RUN chown -R appuser:appuser /app

USER appuser

# Expose standard port
EXPOSE 8000

# Render dynamically injects $PORT at runtime
CMD ["sh", "-c", "uvicorn main:app --host 0.0.0.0 --port ${PORT:-8000}"]
