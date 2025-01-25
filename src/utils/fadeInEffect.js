
export const applyFadeInEffect = () => {
  const fadeInSections = document.querySelectorAll('.fade-hidden');

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-visible');
        observer.unobserve(entry.target);
      }
    });
  });

  fadeInSections.forEach(section => observer.observe(section));
  return observer;
};