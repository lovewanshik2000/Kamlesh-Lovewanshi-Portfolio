import React, { useEffect, useRef, useState } from 'react';

const CustomCursor = () => {
  const cursorRef   = useRef(null);
  const followerRef = useRef(null);
  const posRef      = useRef({ x: 0, y: 0 });
  const followerPos = useRef({ x: 0, y: 0 });
  const [visible, setVisible]     = useState(false);
  const [isHover, setIsHover]     = useState(false);
  const [isClick, setIsClick]     = useState(false);
  const isTouchDevice = useRef(false);

  useEffect(() => {
    // Detect touch device — disable custom cursor
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      isTouchDevice.current = true;
      return;
    }

    const moveCursor = (e) => {
      posRef.current = { x: e.clientX, y: e.clientY };
      if (!visible) setVisible(true);
    };

    const handleMouseDown = () => setIsClick(true);
    const handleMouseUp   = () => setIsClick(false);

    const handleEnterInteractive = () => setIsHover(true);
    const handleLeaveInteractive = () => setIsHover(false);

    document.addEventListener('mousemove', moveCursor, { passive: true });
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup',   handleMouseUp);

    const setupInteractives = () => {
      const interactives = document.querySelectorAll('a, button, [data-cursor]');
      interactives.forEach(el => {
        el.addEventListener('mouseenter', handleEnterInteractive);
        el.addEventListener('mouseleave', handleLeaveInteractive);
      });
      return interactives;
    };

    const interactives = setupInteractives();

    let rafId;
    const lerp = (a, b, t) => a + (b - a) * t;

    const animate = () => {
      followerPos.current.x = lerp(followerPos.current.x, posRef.current.x, 0.08);
      followerPos.current.y = lerp(followerPos.current.y, posRef.current.y, 0.08);

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${posRef.current.x - 4}px, ${posRef.current.y - 4}px)`;
      }
      if (followerRef.current) {
        const size = isHover ? 40 : isClick ? 12 : 24;
        followerRef.current.style.transform = `translate(${followerPos.current.x - size / 2}px, ${followerPos.current.y - size / 2}px)`;
        followerRef.current.style.width  = `${size}px`;
        followerRef.current.style.height = `${size}px`;
      }

      rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup',   handleMouseUp);
      interactives.forEach(el => {
        el.removeEventListener('mouseenter', handleEnterInteractive);
        el.removeEventListener('mouseleave', handleLeaveInteractive);
      });
    };
  }, [visible, isHover, isClick]);

  if (isTouchDevice.current) return null;

  return (
    <>
      <style>{`
        @media (hover: none) { .custom-cursor, .cursor-follower { display: none !important; } }
        body { cursor: none !important; }
        a, button { cursor: none !important; }
      `}</style>

      {/* Dot cursor */}
      <div
        ref={cursorRef}
        className="custom-cursor"
        style={{
          position: 'fixed',
          top: 0, left: 0,
          width: '8px', height: '8px',
          borderRadius: '50%',
          background: '#dc2626',
          pointerEvents: 'none',
          zIndex: 9998,
          opacity: visible ? 1 : 0,
          transition: 'opacity 0.3s ease',
          boxShadow: '0 0 8px rgba(220,38,38,0.8)',
          willChange: 'transform',
        }}
      />

      {/* Follower ring */}
      <div
        ref={followerRef}
        className="cursor-follower"
        style={{
          position: 'fixed',
          top: 0, left: 0,
          borderRadius: '50%',
          border: `1px solid ${isHover ? 'rgba(239,68,68,0.7)' : 'rgba(220,38,38,0.4)'}`,
          background: isHover ? 'rgba(220,38,38,0.05)' : 'transparent',
          pointerEvents: 'none',
          zIndex: 9997,
          opacity: visible ? 1 : 0,
          transition: 'opacity 0.3s ease, border-color 0.2s ease, background 0.2s ease, width 0.25s ease, height 0.25s ease',
          willChange: 'transform',
        }}
      />
    </>
  );
};

export default CustomCursor;
