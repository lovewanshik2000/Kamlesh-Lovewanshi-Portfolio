(function () {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const header = document.querySelector('.header');
  const navLinks = document.querySelectorAll('.nav a[href^="#"]');
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileLinks = document.querySelectorAll('.mobile-menu a[href^="#"]');
  const progressBar = document.getElementById('scrollBar');
  const yearEl = document.getElementById('year');
  const loader = document.querySelector('.page-loader');
  const cursor = document.querySelector('.cursor');
  const cursorLabel = document.querySelector('.cursor-label');

  if (yearEl) { yearEl.textContent = new Date().getFullYear(); }

  function updateHeaderState() {
    if (\!header) return;
    header.classList.toggle('scrolled', window.scrollY > 10);
  }

  function updateScrollProgress() {
    if (\!progressBar) return;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const progress = maxScroll > 0 ? (window.scrollY / maxScroll) * 100 : 0;
    progressBar.style.width = progress + '%';
  }

  function initLoader() {
    if (\!loader) return;
    setTimeout(() => loader.classList.add('hidden'), prefersReducedMotion ? 250 : 1200);
  }

  function initMobileMenu() {
    if (\!hamburger || \!mobileMenu) return;

    function closeMenu() {
      mobileMenu.setAttribute('hidden', 'hidden');
      hamburger.setAttribute('aria-expanded', 'false');
      document.body.classList.remove('menu-open');
    }

    hamburger.addEventListener('click', () => {
      const expanded = hamburger.getAttribute('aria-expanded') === 'true';
      hamburger.setAttribute('aria-expanded', String(\!expanded));
      if (expanded) {
        closeMenu();
      } else {
        mobileMenu.removeAttribute('hidden');
        document.body.classList.add('menu-open');
      }
    });

    mobileLinks.forEach((link) => link.addEventListener('click', closeMenu));

    document.addEventListener('click', (event) => {
      const target = event.target;
      if (\!mobileMenu.hasAttribute('hidden') && \!mobileMenu.contains(target) && \!hamburger.contains(target)) {
        closeMenu();
      }
    });
  }

  function initSmoothLinks() {
    document.querySelectorAll('a[href^="#"]').forEach((link) => {
      const targetId = link.getAttribute('href');
      if (\!targetId || targetId === '#') return;
      link.addEventListener('click', (event) => {
        const target = document.querySelector(targetId);
        if (\!target) return;
        event.preventDefault();
        target.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth', block: 'start' });
        history.pushState(null, '', targetId);
      });
    });
  }

  function initRevealAnimations() {
    if (prefersReducedMotion) {
      document.querySelectorAll('.reveal').forEach((el) => el.classList.add('show'));
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
  }

  function initCounters() {
    const counters = document.querySelectorAll('[data-count-to]');
    if (\!counters.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (\!entry.isIntersecting) return;
        const el = entry.target;
        const target = Number(el.getAttribute('data-count-to')) || 0;
        const suffix = el.getAttribute('data-suffix') || '';

        if (prefersReducedMotion) {
          el.textContent = target + suffix;
          observer.unobserve(el);
          return;
        }

        const start = performance.now();
        const duration = 1200;

        function tick(now) {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          const value = Math.round(target * eased);
          el.textContent = value + suffix;
          if (progress < 1) requestAnimationFrame(tick);
        }

        requestAnimationFrame(tick);
        observer.unobserve(el);
      });
    }, { threshold: 0.45 });

    counters.forEach((counter) => observer.observe(counter));
  }

  function initTypedWords() {
    const typed = document.querySelector('.typed-words');
    if (\!typed) return;
    const words = typed.getAttribute('data-words').split(',');
    let index = 0;
    let charIndex = 0;
    let deleting = false;

    function tick() {
      const current = words[index];
      if (\!current) return;

      if (\!deleting) {
        charIndex += 1;
        typed.textContent = current.slice(0, charIndex);
        if (charIndex === current.length) {
          deleting = true;
          setTimeout(tick, 1200);
          return;
        }
      } else {
        charIndex -= 1;
        typed.textContent = current.slice(0, charIndex);
        if (charIndex === 0) {
          deleting = false;
          index = (index + 1) % words.length;
        }
      }

      setTimeout(tick, deleting ? 45 : 130);
    }

    tick();
  }

  function initCursor() {
    if (prefersReducedMotion || window.matchMedia('(pointer: coarse)').matches) return;
    if (\!cursor) return;

    cursor.classList.add('show');
    document.addEventListener('pointermove', (event) => {
      cursor.style.left = event.clientX + 'px';
      cursor.style.top = event.clientY + 'px';
    });

    document.querySelectorAll('a, button, .project-item, .concept-card, .legend-item').forEach((element) => {
      element.addEventListener('pointerenter', () => {
        const customLabel = element.getAttribute('data-cursor-label') || 'VIEW CASE STUDY →';
        cursorLabel.textContent = customLabel.toUpperCase();
        cursor.classList.add('hover');
      });
      element.addEventListener('pointerleave', () => {
        cursor.classList.remove('hover');
      });
    });
  }

  function initNavHighlight() {
    const sections = [...document.querySelectorAll('main section[id]')];
    if (\!sections.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (\!entry.isIntersecting) return;
        const id = entry.target.getAttribute('id');
        navLinks.forEach((link) => {
          const isActive = link.getAttribute('href') === '#' + id;
          link.classList.toggle('active', isActive);
        });
      });
    }, { threshold: 0.5, rootMargin: '-10% 0px -40% 0px' });

    sections.forEach((section) => observer.observe(section));
  }

  updateHeaderState();
  updateScrollProgress();
  initLoader();
  initMobileMenu();
  initSmoothLinks();
  initRevealAnimations();
  initCounters();
  initTypedWords();
  initCursor();
  initNavHighlight();

  window.addEventListener('scroll', () => {
    updateHeaderState();
    updateScrollProgress();
  }, { passive: true });
})();
