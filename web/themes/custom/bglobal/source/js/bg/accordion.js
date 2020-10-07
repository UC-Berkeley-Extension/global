(function () {
  const heading = document.querySelectorAll('.accordion__title');

  Array.prototype.forEach.call(heading, a => {
    const button = a.querySelector('.accordion__button');
    const drawer = a.nextElementSibling;
    button.onclick = () => {
      const expanded = button.getAttribute('aria-expanded') === 'true';
      button.setAttribute('aria-expanded', !expanded);
      drawer.classList.toggle('expanded');
      if (drawer.style.maxHeight) {
        drawer.style.maxHeight = null;
      } else {
        drawer.style.maxHeight = drawer.scrollHeight + 'px';
      }
    };
  });
})();
