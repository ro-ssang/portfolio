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
        const seconds = [800, 2300, 1600];

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
