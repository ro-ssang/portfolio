// section1
(function () {
  const section1 = document.querySelector('.sec1');
  const section1Title = section1.querySelector('.tit');
  const words = section1Title.querySelectorAll('em');

  // 텍스트 분리하기
  words.forEach((elem) => {
    const text = elem.innerText;

    elem.innerHTML = text
      .split('')
      .map((char) => `<span aria-hidden="true">${char}</span>`)
      .join('');

    elem.setAttribute('aria-label', text);
  });

  function showText() {
    const scrollTop = window.scrollY;
    const offsetTop = section1.offsetTop;

    if (scrollTop >= offsetTop) {
      words.forEach((word, idx) => {
        const chars = word.querySelectorAll('span');
        const seconds = [200, 1700, 1000];

        chars.forEach((char, index) => {
          setTimeout(() => {
            char.classList.add('show');
          }, 100 * index + seconds[idx]);
        });
      });
    }
  }

  showText();

  // window.addEventListener('scroll', showText);
})();

// section2
(function () {
  const section2 = document.querySelector('.sec2');
  const children = Array.from(section2.children);

  function handleScroll() {
    const scrollTop = window.scrollY;
    const innerHeight = window.innerHeight;

    children.forEach((child) => {
      const sectionCont = child.closest('#section2');
      const offsetTop = child.offsetTop + sectionCont.offsetTop;

      const avatar = child.querySelector('.avatar');

      if (scrollTop >= offsetTop - innerHeight / 2) {
        child.classList.add('show');
      }

      // 이질감 효과
      if (avatar && scrollTop >= offsetTop - innerHeight / 2) {
        const offset = (scrollTop - offsetTop) * 0.1;

        avatar.style.transform = `translateY(${offset}px)`;
      }
    });
  }

  window.addEventListener('scroll', handleScroll);
})();
