/**
 * ================================================================
 * NOIR PORTFOLIO — JavaScript
 * Handles scroll animations, smooth navigation & image fallback
 * ================================================================
 */

// ────────────────────────────────────────────────────────────────
// 1. SCROLL ANIMATIONS (fade-up effect)
// ────────────────────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {
  // Select all elements that should fade in on scroll
  const fadeElements = document.querySelectorAll(
    '.project-card, .achievement-item, .section-header'
  );

  // Create an Intersection Observer
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -30px 0px',
    }
  );

  // Set initial state and start observing
  fadeElements.forEach((el) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(25px)';
    el.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
    observer.observe(el);
  });
});

// ────────────────────────────────────────────────────────────────
// 2. SMOOTH SCROLL FOR NAV LINKS
// ────────────────────────────────────────────────────────────────

document.querySelectorAll('.site-nav a').forEach((link) => {
  link.addEventListener('click', (e) => {
    const targetId = link.getAttribute('href');
    if (targetId && targetId.startsWith('#')) {
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    }
  });
});

// ────────────────────────────────────────────────────────────────
// 3. IMAGE ERROR HANDLING
// ────────────────────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {
  const pfpFront = document.querySelector('.pfp-front');
  const pfpBack = document.querySelector('.pfp-back');

  if (pfpFront) {
    pfpFront.addEventListener('error', () => {
      console.warn('Front PFP image failed to load — using fallback symbol.');
      console.log('The image will show a "◈" symbol instead.');
    });
  }

  if (pfpBack) {
    pfpBack.addEventListener('error', () => {
      console.warn('Back PFP image failed to load — using fallback symbol.');
      console.log('The image will show a "◈" symbol instead.');
    });
  }
});

// ────────────────────────────────────────────────────────────────
// 4. CONSOLE WELCOME (fun easter egg)
// ────────────────────────────────────────────────────────────────

console.log('%c Noir · Portfolio ', 'background: #000; color: #fff; font-size: 1.5rem; padding: 0.5rem 1rem; border: 2px solid #fff;');
console.log('%c Built with ❤️ by Noir Studios', 'color: #888; font-size: 0.9rem;');
console.log('%c PFP images are in grayscale (black & white)', 'color: #666; font-size: 0.8rem;');
