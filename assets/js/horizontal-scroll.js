(function () {
  const section = document.querySelector('.sec4');
  const sitesCont = document.querySelector('.sec4 .sites_cont');
  const wrapper = document.querySelector('.sec4 .sites_wrapper');
  const sites = document.querySelectorAll('.sec4 .site');
  const titles = wrapper.querySelectorAll('.sec4 .proj_tit');

  let scrollWidth = 0;

  function setSize() {
    sites.forEach((site) => (scrollWidth += site.clientWidth));
    const wrapperWidth = window.innerWidth < 1500 ? window.innerWidth : 1500;
    wrapper.style.width = wrapperWidth + 'px';

    sitesCont.style.height = scrollWidth + 'px';
  }

  setSize();
  window.addEventListener('resize', () => {
    scrollWidth = 0;
    setSize();
  });
  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const offsetTop = section.offsetTop + sitesCont.offsetTop;
    const wHeight = window.innerHeight;

    if (scrollTop >= offsetTop) {
      sitesCont.style.paddingTop = scrollWidth - wHeight + 'px';
    } else {
      sitesCont.style.paddingTop = 0 + 'px';
    }

    if (scrollTop >= offsetTop && scrollTop <= offsetTop + scrollWidth - wHeight) {
      wrapper.style.position = 'fixed';
      wrapper.style.top = 0;
    } else {
      wrapper.style.position = 'static';
    }

    if (scrollTop < offsetTop) {
      sites.forEach((site) => (site.style.transform = `translate(0%, 0%)`));
    } else if (scrollTop >= offsetTop && scrollTop <= offsetTop + scrollWidth - wHeight) {
      const percent = ((scrollTop - offsetTop) / (scrollWidth - wHeight)) * (sites.length - 1) * 100;

      sites.forEach((site) => (site.style.transform = `translate(${-percent}%, 0%)`));
    } else if (scrollTop > offsetTop + scrollWidth - wHeight) {
      sites.forEach((site) => (site.style.transform = `translate(${-100 * (sites.length - 1)}%, 0%)`));
    }

    // titles 이질감 효과
    const offset = (scrollTop - offsetTop) * 0.1;

    if (scrollTop >= offsetTop) {
      titles.forEach((title) => {
        title.style.transform = `translateX(${-offset}px)`;
      });
    }
  });
})();

(function () {
  const section = document.querySelector('.sec6');
  const sitesCont = document.querySelector('.sec6 .sites_cont');
  const wrapper = document.querySelector('.sec6 .sites_wrapper');
  const sites = document.querySelectorAll('.sec6 .site');
  const titles = wrapper.querySelectorAll('.sec6 .proj_tit');

  let scrollWidth = 0;

  function setSize() {
    sites.forEach((site) => (scrollWidth += site.clientWidth));
    const wrapperWidth = window.innerWidth < 1500 ? window.innerWidth : 1500;
    wrapper.style.width = wrapperWidth + 'px';

    sitesCont.style.height = scrollWidth + 'px';
  }

  setSize();
  window.addEventListener('resize', () => {
    scrollWidth = 0;
    setSize();
  });
  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const offsetTop = section.offsetTop + sitesCont.offsetTop;
    const wHeight = window.innerHeight;

    if (scrollTop >= offsetTop) {
      sitesCont.style.paddingTop = scrollWidth - wHeight + 'px';
    } else {
      sitesCont.style.paddingTop = 0 + 'px';
    }

    if (scrollTop >= offsetTop && scrollTop <= offsetTop + scrollWidth - wHeight) {
      wrapper.style.position = 'fixed';
      wrapper.style.top = 0;
    } else {
      wrapper.style.position = 'static';
    }

    if (scrollTop < offsetTop) {
      sites.forEach((site) => (site.style.transform = `translate(0%, 0%)`));
    } else if (scrollTop >= offsetTop && scrollTop <= offsetTop + scrollWidth - wHeight) {
      const percent = ((scrollTop - offsetTop) / (scrollWidth - wHeight)) * (sites.length - 1) * 100;

      sites.forEach((site) => (site.style.transform = `translate(${-percent}%, 0%)`));
    } else if (scrollTop > offsetTop + scrollWidth - wHeight) {
      sites.forEach((site) => (site.style.transform = `translate(${-100 * (sites.length - 1)}%, 0%)`));
    }

    // titles 이질감 효과
    const offset = (scrollTop - offsetTop) * 0.1;

    if (scrollTop >= offsetTop) {
      titles.forEach((title) => {
        title.style.transform = `translateX(${-offset}px)`;
      });
    }
  });
})();
