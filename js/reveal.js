const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      
      // délai progressif basé sur l'ordre dans la page
      const index = [...reveals].indexOf(entry.target);
      entry.target.style.transitionDelay = `${index * 0.15}s`;

      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.15
});

reveals.forEach(reveal => {
  observer.observe(reveal);
});