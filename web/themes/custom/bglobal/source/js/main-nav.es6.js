/* eslint-disable */
(function () {
  const parent = document.querySelectorAll('.menu-depth-0');

  Array.prototype.forEach.call(parent, a => {
    // Without this evaluation, js fails if first item does not have .menu__toggle.
    const button = a.querySelector('.menu__toggle');
    if (!button) {
      return;
    }
    const drawer = button.nextElementSibling;
    if (!drawer) {
      return;
    }

    button.onclick = (e) => {
      e.preventDefault();
      e.stopPropagation();
      const expanded = button.getAttribute('aria-expanded') === 'true';
      button.setAttribute('aria-expanded', !expanded);
      drawer.classList.toggle('expanded');
      if (!expanded) {
        drawer.style.display = "block";
      } else {
        drawer.style.display = "none";
      }
    };

    document.body.addEventListener("click", function(e) {
      button.setAttribute('aria-expanded', false);
      drawer.style.display = "none";
    });

  });
})();
/* eslint-enable */
