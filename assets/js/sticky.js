(function () {
  window.addEventListener('scroll', function () {
    const scrollTop = document.documentElement.scrollTop || window.pageYOffset || window.scrollY;

    // sticky 효과
    document.querySelectorAll('[data-sticky]').forEach((stickyElem) => {
      const revealElem = stickyElem.querySelector('[data-reveal]');
      const outlinedElem = stickyElem.querySelector('[data-outlined]');

      const offsetTop = stickyElem.offsetTop;
      const outlinedHeight = outlinedElem.clientHeight;

      const cha = scrollTop - offsetTop;

      if (scrollTop >= offsetTop && cha <= outlinedHeight) {
        stickyElem.style.transform = `translate(0px, ${cha}px)`;
        revealElem.style.height = `${outlinedHeight - cha}px`;
      }
    });
  });
})();
