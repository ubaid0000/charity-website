const counters = document.querySelectorAll('.counter');
  let started = false;

  function animateCounters() {
    if (started) return;
    started = true;

    counters.forEach(counter => {
      const target = +counter.getAttribute('data-target');
      const speed = 200;

      const updateCount = () => {
        const current = +counter.innerText;
        const increment = Math.ceil(target / speed);

        if (current < target) {
          counter.innerText = current + increment;
          setTimeout(updateCount, 20);
        } else {
          counter.innerText = target;
        }
      };

      updateCount();
    });
  }

  window.addEventListener('scroll', () => {
    const section = document.querySelector('.stats-section');
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < window.innerHeight - 100) {
      animateCounters();
    }
  });