// pre-loader
(function () {
  const loader = document.querySelector('#pre-loader');

  setTimeout(() => {
    loader.classList.add('hidden');
  }, 2000);
})();

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
        const seconds = [0, 800, 400];

        chars.forEach((char, index) => {
          setTimeout(() => {
            char.classList.add('show');
          }, 100 * index + seconds[idx]);
        });
      });
    }
  }

  setTimeout(() => {
    showText();
  }, 2100);
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

// section3
(function () {
  const section3 = document.querySelector('.sec3');
  const secWrapper = section3.closest('#section3');
  const title = section3.querySelector('.tit');

  // 글자 분리하기
  const text = title.innerText;

  title.innerHTML = text
    .split('')
    .map((char) => `<span aria-hidden="true">${char === ' ' ? '&nbsp;' : char}</span>`)
    .join('');

  title.setAttribute('aria-label', text);

  function handleScroll() {
    const scrollTop = window.scrollY;
    const offsetTop = secWrapper.offsetTop;
    const innerHeight = window.innerHeight;

    if (scrollTop >= offsetTop - innerHeight / 3) {
      const chars = title.querySelectorAll('span');

      chars.forEach((char, index) => {
        setTimeout(() => {
          char.classList.add('show');
        }, 30 * index);
      });
    }
  }

  window.addEventListener('scroll', handleScroll);
})();

// section5
(function () {
  const section3 = document.querySelector('.sec5');
  const secWrapper = section3.closest('#section5');
  const title = section3.querySelector('.tit');

  // 글자 분리하기
  const text = title.innerText;

  title.innerHTML = text
    .split('')
    .map((char) => `<span aria-hidden="true">${char === ' ' ? '&nbsp;' : char}</span>`)
    .join('');

  title.setAttribute('aria-label', text);

  function handleScroll() {
    const scrollTop = window.scrollY;
    const offsetTop = secWrapper.offsetTop;
    const innerHeight = window.innerHeight;

    if (scrollTop >= offsetTop - innerHeight / 3) {
      const chars = title.querySelectorAll('span');

      chars.forEach((char, index) => {
        setTimeout(() => {
          char.classList.add('show');
        }, 30 * index);
      });
    }
  }

  window.addEventListener('scroll', handleScroll);
})();
