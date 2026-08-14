// ───────────────────────────────────────────────────────────────
// 1. SCROLL ANIMATIONS
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
// 3. IMAGE LOAD STATUS 
// ────────────────────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {
  const pfpFront = document.querySelector('.pfp-front');
  const pfpBack = document.querySelector('.pfp-back');

  if (pfpFront) {
    pfpFront.addEventListener('load', () => {
      console.log('Front PFP image loaded successfully');
    });
    pfpFront.addEventListener('error', () => {
      console.warn('Front PFP image failed to load');
    });
  }

  if (pfpBack) {
    pfpBack.addEventListener('load', () => {
      console.log('Back PFP image loaded successfully');
    });
    pfpBack.addEventListener('error', () => {
      console.warn('Back PFP image failed to load');
    });
  }
});
