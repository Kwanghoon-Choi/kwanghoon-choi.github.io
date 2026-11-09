// Highlight the nav link of the section currently in view.
(function () {
  const links = Array.from(document.querySelectorAll('.nav-links a'));
  const sections = links
    .map((a) => document.querySelector(a.getAttribute('href')))
    .filter(Boolean);

  function update() {
    const offset = window.innerHeight * 0.3;
    let current = sections[0];
    for (const s of sections) {
      if (s.getBoundingClientRect().top <= offset) current = s;
    }
    // At the very bottom, select the last section.
    if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 2) {
      current = sections[sections.length - 1];
    }
    links.forEach((a) =>
      a.classList.toggle('is-current', a.getAttribute('href') === '#' + current.id)
    );
  }

  window.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update);
  update();
})();
