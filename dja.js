document.addEventListener('DOMContentLoaded', () => {
  // Sélectionne la section contenant la mission
  const missionSection = document.querySelector('.mission-section');
  
  // Sélectionne l'image à l'intérieur de la mission
  const missionImage = missionSection.querySelector('.mission-image img');
  
  // Sélectionne le bloc de texte de la mission
  const missionText = missionSection.querySelector('.mission-text');

  // Crée un nouvel Intersection Observer pour surveiller la visibilité de la section
  const observer = new IntersectionObserver((entries) => {
    // Pour chaque entrée observée (normalement une seule ici)
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // La section est visible à au moins 30% → lance les animations
        missionImage.classList.add('animate-zoom');
        missionText.classList.add('animate-fade-slide');
      } else {
        // La section est partiellement ou totalement hors de la vue → remet l'état initial
        missionImage.classList.remove('animate-zoom');
        missionText.classList.remove('animate-fade-slide');
      }
    });
  }, {
    threshold: 0.3 // Se déclenche quand 30% de la section est visible
  });

  // Démarre l'observation sur la section mission
  observer.observe(missionSection);
});

document.addEventListener("DOMContentLoaded", function () {
  const footer = document.querySelector(".site-footer");
  const icons = document.querySelector(".animated-icons");

  if (!footer) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        footer.classList.add("footer-visible");
        if (icons) icons.classList.add("footer-visible");
      } else {
        footer.classList.remove("footer-visible");
        if (icons) icons.classList.remove("footer-visible");
      }
    });
  }, {
    threshold: 0.3
  });

  observer.observe(footer);
});


document.addEventListener('DOMContentLoaded', () => {
  if (!('IntersectionObserver' in window)) return; // Sécurité

  const cards = document.querySelectorAll('.news-card');
  const mobileBreakpoint = 768;

  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5, // 50% visible
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const el = entry.target;

      if (window.innerWidth < mobileBreakpoint) {
        if (entry.isIntersecting) {
          el.classList.add('flip-open');
          el.classList.remove('flip-close');
        } else {
          el.classList.remove('flip-open');
          el.classList.add('flip-close');
        }
      }
    });
  }, observerOptions);

  cards.forEach(card => {
    observer.observe(card);
  });

  // Optional : mise à jour au redimensionnement
  window.addEventListener('resize', () => {
    if (window.innerWidth >= mobileBreakpoint) {
      cards.forEach(card => {
        card.classList.remove('flip-open', 'flip-close');
      });
    }
  });
});
