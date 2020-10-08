/* eslint-disable */
(function () {
  const heading = document.querySelectorAll('.accordion__title-wrapper');
  
  Array.prototype.forEach.call(heading, a => {
    const button = a.querySelector('.accordion__button');
    const drawer = a.nextElementSibling;
    button.onclick = () => {
      const expanded = button.getAttribute('aria-expanded') === 'true';
      button.setAttribute('aria-expanded', !expanded);
      drawer.classList.toggle('expanded');

      if (expanded) {
        drawer.style.maxHeight = drawer.scrollHeight + 'px';
      } else {
        drawer.style.maxHeight = null;
      }
    };
  });
})();
/* eslint-enable */
