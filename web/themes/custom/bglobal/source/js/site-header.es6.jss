/* eslint-disable */

Keyboard = {
  BACKSPACE: 8,
  COMMA: 188,
  DELETE: 46,
  DOWN: 40,
  END: 35,
  ENTER: 13,
  ESCAPE: 27,
  HOME: 36,
  LEFT: 37,
  PAGE_DOWN: 34,
  PAGE_UP: 33,
  PERIOD: 190,
  RIGHT: 39,
  SPACE: 32,
  TAB: 9,
  UP: 38
};

// ===================
// 1. DROPDOWNS
// ===================
var OpenDropdown = function(htmlElement) {
  var openOne = this;
  openOne.element = htmlElement;
  openOne.items = openOne.element.nextElementSibling.children;
  openOne.switch = false;

  openOne.close = function() {
    // fallback for pdp global header
    if (
      openOne.element.parentElement.classList["value"].includes("header1Items")
    )
      openOne.element.parentElement
        .getElementsByTagName("UL")[0]
        .classList.remove("show");
    else openOne.element.parentElement.classList.remove("show");
    openOne.element.setAttribute("aria-expanded", "false");
    openOne.element.nextElementSibling.setAttribute("aria-hidden", "true");
    document.body.onclick = null;
    openOne.element.parentElement.removeEventListener(
      "keydown",
      openOne.dropdownNavigation
    );
    document.removeEventListener("keyup", openOne.tabNavigation);
    if (!openOne.switch) openOne.element.focus();
    else document.activeElement.focus();
    dropdownMenus.isOpen = null;
  };
  openOne.open = function() {
    // fallback for pdp global header
    if (
      openOne.element.parentElement.classList["value"].includes("header1Items")
    )
      openOne.element.parentElement
        .getElementsByTagName("UL")[0]
        .classList.add("show");
    else openOne.element.parentElement.classList.add("show");
    openOne.element.setAttribute("aria-expanded", "true");
    openOne.element.nextElementSibling.setAttribute("aria-hidden", "false");
    openOne.element.parentNode.children[0].focus();
    document.body.onclick = openOne.clickOutside;
    openOne.element.parentElement.addEventListener(
      "keydown",
      openOne.dropdownNavigation,
      false
    );
    document.addEventListener("keyup", openOne.tabNavigation, false);
  };

  openOne.clickOutside = function(e) {
    if (!e.target.classList.contains("dropdown-toggle") && dropdownMenus.isOpen)
      dropdownMenus.isOpen.close();
  };
  openOne.dropdownNavigation = function(e) {
    var keyCode = e.keyCode,
      currentLink = e.path[0],
      linkList = Array.from(openOne.items),
      counter = 0;
    for (var x = 0; x < linkList.length; x++) {
      counter = linkList[x] === currentLink ? x : counter;
    }

    switch (keyCode) {
      case Keyboard.ESCAPE:
        dropdownMenus.isOpen.close();
        break;
      case Keyboard.DOWN:
        e.preventDefault();
        if (currentLink.classList.contains("dropdown-item")) {
          if (counter + 1 === linkList.length) openOne.items[0].focus();
          else currentLink.nextElementSibling.focus();
        } else
          dropdownMenus.isOpen.element.nextElementSibling.firstElementChild.focus();
        break;
      case Keyboard.UP:
        e.preventDefault();
        if (counter === 0) dropdownMenus.isOpen.close();
        else currentLink.previousElementSibling.focus();
        break;
    }
  };
  openOne.tabNavigation = function(e) {
    if (document.activeElement.classList.contains("dropdown-toggle")) {
      openOne.switch = true;
      dropdownMenus.isOpen.close();
      return;
    }
  };
};

var dropdownMenus = {
  isOpen: null,
  setupDropdown: function(dropdownToggle) {
    dropdownToggle.setAttribute("aria-haspopup", "true");
    dropdownToggle.setAttribute("aria-expanded", "false");
    var dropdownMenu = dropdownToggle.parentNode.querySelector(
      ".dropdown-menu"
    );
    dropdownMenu.setAttribute("aria-hidden", "true");
    dropdownToggle.onclick = toggleDropdown;
    dropdownToggle.addEventListener("keydown", dropdownOpen, false);
    function toggleDropdown() {
      if (dropdownToggle.getAttribute("aria-expanded") === "true") {
        dropdownMenus.isOpen.close();
      } else {
        if (dropdownMenus.isOpen) dropdownMenus.isOpen.close();
        dropdownMenus.isOpen = new OpenDropdown(dropdownToggle);
        dropdownMenus.isOpen.open();
      }
      return false;
    }
    function dropdownOpen(e) {
      var keyCode = e.keyCode;
      // console.log('keycode', keyCode);
      switch (keyCode) {
        case Keyboard.DOWN:
          dropdownMenus.isOpen = new OpenDropdown(dropdownToggle);
          dropdownMenus.isOpen.open();
          break;
        case Keyboard.TAB:
          break;
      }
    }
  }
};

document.querySelectorAll("[data-toggle~=dropdown]").forEach(dropdownMenus.setupDropdown);

// ============================================
// -- Updated collapse toggle for mobile menu
// ============================================
const dataToggleEvents = Array.from(
  document.querySelectorAll('[data-toggle="collapse"]')
);

window.addEventListener(
  "click",
  clickToggle => {
    const clickedElement = clickToggle.target;
    if (dataToggleEvents.includes(clickedElement)) {
      const selector = clickedElement.getAttribute("data-target");
      collapse(selector, "toggle");
    }
  },
  false
);

const toggleClassList = {
  toggle: "toggle",
  show: "add",
  hide: "remove"
};

const collapse = (selector, eventName) => {
  const targets = Array.from(document.querySelectorAll(selector));
  targets.forEach(target => {
    target.classList[toggleClassList[eventName]]("show");
  });
};

/* eslint-enable */
