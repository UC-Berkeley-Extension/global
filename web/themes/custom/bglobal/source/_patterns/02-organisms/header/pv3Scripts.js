// // _utilityFunctions.js 
// //
// // 1. DROPDOWNS
// // 2. COLLAPSE TOGGLE
// // 3. FORMS
// // 4. SCROLL ANIMATION
// // 5. LAZY LOAD IMAGES
// // 6. ANIMATE
// // 7. TOOLTIPS
// // 8. DYNAMIC FORM FIELDS
// //

// function wd(m) { writeDebug(m); }

// Keyboard = {
//   BACKSPACE: 8,
//   COMMA: 188,
//   DELETE: 46,
//   DOWN: 40,
//   END: 35,
//   ENTER: 13,
//   ESCAPE: 27,
//   HOME: 36,
//   LEFT: 37,
//   PAGE_DOWN: 34,
//   PAGE_UP: 33,
//   PERIOD: 190,
//   RIGHT: 39,
//   SPACE: 32,
//   TAB: 9,
//   UP: 38
// };

// // ===================
// // 1. DROPDOWNS
// // ===================
// var OpenDropdown = function(htmlElement){
//   var openOne = this;
//   openOne.element = htmlElement;
//   openOne.items = openOne.element.nextElementSibling.children;
//   openOne.switch = false;

//   openOne.close = function(){
//     // fallback for pdp global header  
//     if (openOne.element.parentElement.classList['value'].includes('header1Items')) openOne.element.parentElement.getElementsByTagName("UL")[0].classList.remove('show');
//       else openOne.element.parentElement.classList.remove('show'); 
//     openOne.element.setAttribute('aria-expanded', 'false'); 
//     openOne.element.nextElementSibling.setAttribute('aria-hidden', 'true');
//     document.body.onclick = null;
//     openOne.element.parentElement.removeEventListener("keydown", openOne.dropdownNavigation);
//     document.removeEventListener("keyup", openOne.tabNavigation);
//     if( !openOne.switch ) openOne.element.focus();
//       else document.activeElement.focus();
//     dropdownMenus.isOpen = null;
//   };
//   openOne.open = function(){
//     // fallback for pdp global header 
//     if (openOne.element.parentElement.classList['value'].includes('header1Items')) openOne.element.parentElement.getElementsByTagName("UL")[0].classList.add('show');
//       else openOne.element.parentElement.classList.add('show'); 
//     openOne.element.setAttribute('aria-expanded', 'true'); 
//     openOne.element.nextElementSibling.setAttribute('aria-hidden', 'false');
//     openOne.element.parentNode.children[0].focus();
//     document.body.onclick  = openOne.clickOutside;
//     openOne.element.parentElement.addEventListener("keydown", openOne.dropdownNavigation, false);
//     document.addEventListener("keyup", openOne.tabNavigation, false);
//   };

//   openOne.clickOutside = function(e) {
//     if ( !e.target.classList.contains('dropdown-toggle') && dropdownMenus.isOpen ) dropdownMenus.isOpen.close();
//   };
//   openOne.dropdownNavigation = function(e) {
//     var keyCode = e.keyCode,
//         currentLink = e.path[0],
//         linkList = Array.from(openOne.items),
//         counter = 0;
//     for ( var x = 0 ; x < linkList.length ; x++ ) { counter = (linkList[x] === currentLink) ? x : counter; }

//     switch ( keyCode ) {
//       case Keyboard.ESCAPE: 
//         dropdownMenus.isOpen.close();
//         break;
//       case Keyboard.DOWN: 
//         e.preventDefault();
//         if ( currentLink.classList.contains('dropdown-item') ) {
//           if ( counter + 1 === linkList.length ) openOne.items[0].focus(); 
//             else currentLink.nextElementSibling.focus();
//         } else dropdownMenus.isOpen.element.nextElementSibling.firstElementChild.focus();
//         break;
//       case Keyboard.UP: 
//         e.preventDefault();
//         if ( counter === 0 ) dropdownMenus.isOpen.close();
//           else currentLink.previousElementSibling.focus();
//         break;
//     }
//   };
//   openOne.tabNavigation = function(e) {
//     if ( document.activeElement.classList.contains('dropdown-toggle') ) { 
//       openOne.switch = true;
//       dropdownMenus.isOpen.close();
//       return;
//     }
//   };
// };

// var dropdownMenus = {
//   isOpen: null,
//   setupDropdown: function(dropdownToggle) {
//     dropdownToggle.setAttribute('aria-haspopup', 'true');
//     dropdownToggle.setAttribute('aria-expanded', 'false');
//     var dropdownMenu = dropdownToggle.parentNode.querySelector('.dropdown-menu');
//     dropdownMenu.setAttribute('aria-hidden', 'true');
//     dropdownToggle.onclick = toggleDropdown;
//     dropdownToggle.addEventListener("keydown", dropdownOpen, false);
//     function toggleDropdown() {
//       if (dropdownToggle.getAttribute('aria-expanded') === 'true') {
//         dropdownMenus.isOpen.close();
//       } else {
//         if( dropdownMenus.isOpen) dropdownMenus.isOpen.close();
//         dropdownMenus.isOpen = new OpenDropdown(dropdownToggle);
//         dropdownMenus.isOpen.open();
//       }
//       return false; 
//     }
//     function dropdownOpen(e) {
//       var keyCode = e.keyCode;
//       // console.log('keycode', keyCode); 
//       switch ( keyCode ) {
//         case Keyboard.DOWN: 
//           dropdownMenus.isOpen = new OpenDropdown(dropdownToggle);
//           dropdownMenus.isOpen.open();
//           break;
//         case Keyboard.TAB: 
//           break;
//       }
//     }
//   }
// };

// document.querySelectorAll('[data-toggle~=dropdown]').forEach(dropdownMenus.setupDropdown);

// // ===================
// // 2. COLLAPSE TOGGLES
// // ===================
// // var collapseTrigger = {
// //   isOpen: null,
// //   setUpCollapse: function(collapser) {
// //     console.log(collapser.dataset.target)
// //     var collapseTarget = collapser.dataset.target || null;
// //     console.log('collapseTarget', collapseTarget)
// //     if ( collapseTarget ) { 
// //       collapser.setAttribute('aria-haspopup', 'true');
// //       collapser.setAttribute('aria-expanded', 'false');
// //       if ( collapseTarget[0] === "#" ) collapseTarget = collapseTarget.substr(1, collapseTarget.length-1);
// //       var collapsed = document.getElementById(collapseTarget);
// //       collapsed.setAttribute('aria-hidden', 'true');
// //       collapser.onclick = toggleDropdown;
// //       collapser.addEventListener("keydown", collapseOpened, false);
// //     }
// //     function toggleDropdown() {
// //         if (collapser.getAttribute('aria-expanded') === 'true') {
// //           collapsed.isOpen.close();
// //         } else {
// //           if( collapsed.isOpen) collapsed.isOpen.close();
// //           collapsed.isOpen = new CollapsedOpen(collapser, collapsed);
// //           collapsed.isOpen.open();
// //         }
// //         return false;
// //       }
// //       function collapseOpened(e) {
// //         var keyCode = e.keyCode;
// //         switch ( keyCode ) {
// //           case Keyboard.DOWN: 
// //             collapsed.isOpen = new CollapsedOpen(collapser, collapsed);
// //             collapsed.isOpen.open();
// //             break;
// //         }
// //       }
// //   }
// // };

// // document.querySelectorAll('[data-toggle~=collapse]').forEach(collapseTrigger.setUpCollapse);

// // var CollapsedOpen = function(toggle, menu){
// //   var openOne = this;
// //   openOne.element = toggle;
// //   openOne.menu = menu;
// //   openOne.items = menu.children;
// //   openOne.switch = false;

// //   openOne.close = function(){
// //     // fallback for pdp global header 
// //     console.log(openOne.menu.parentElement.classList[0])
// //     if (openOne.menu.parentElement.classList[0] === 'nav-elements') openOne.menu.classList.remove('show');
// //       else openOne.menu.parentElement.classList.remove('show'); 
// //     openOne.menu.parentElement.classList.remove('show');
// //     openOne.element.setAttribute('aria-expanded', 'false'); 
// //     openOne.menu.setAttribute('aria-hidden', 'true');
// //     document.body.onclick = null;
// //     openOne.menu.parentElement.removeEventListener("keydown", openOne.menuNavigation);
// //     if ( !openOne.switch ) openOne.element.focus();
// //      else document.activeElement.focus();
// //     collapseTrigger.isOpen = null;
// //   };
// //   openOne.open = function(){
// //     // fallback for pdp global header 
// //         console.log(openOne.menu.parentElement.classList[0])

// //     if (openOne.menu.parentElement.classList[0] === 'nav-elements') openOne.menu.classList.add('show');
// //      else openOne.menu.parentElement.classList.add('show'); 
// //     openOne.menu.parentElement.classList.add('show');
// //     openOne.element.setAttribute('aria-expanded', 'true'); 
// //     openOne.menu.setAttribute('aria-hidden', 'false');
// //     openOne.element.parentNode.children[0].focus();
// //     document.body.onclick  = openOne.clickOutside;
// //     openOne.element.parentElement.addEventListener("keydown", openOne.menuNavigation, false);
// //   };

// //   openOne.clickOutside = function(e) {
// //     if ( !e.target.classList.contains('dropdown-toggle') && collapseTrigger.isOpen ) collapseTrigger.isOpen.close();
// //   };
// //   openOne.menuNavigation = function(e) {
// //     var keyCode = e.keyCode,
// //         currentLink = e.path[0],
// //         linkList = Array.from(openOne.items),
// //         counter = 0;
// //     for ( var x = 0 ; x < linkList.length ; x++ ) { counter = (linkList[x] === currentLink) ? x : counter; }

// //     switch ( keyCode ) {
// //       case Keyboard.ESCAPE: 
// //         collapseTrigger.isOpen.close();
// //         break;
// //       case Keyboard.DOWN: 
// //         e.preventDefault();
// //         if ( currentLink.classList.contains('dropdown-item') ) {
// //           if ( counter + 1 === linkList.length ) openOne.items[0].focus(); 
// //             else currentLink.nextElementSibling.focus();
// //         } else collapseTrigger.isOpen.element.nextElementSibling.firstElementChild.focus();
// //         break;
// //       case Keyboard.UP: 
// //         e.preventDefault();
// //         if ( counter === 0 ) collapseTrigger.isOpen.close();
// //           else currentLink.previousElementSibling.focus();
// //         break;
// //     }
// //   };
// //   openOne.tabNavigation = function(e) {
// //     if ( document.activeElement.classList.contains('dropdown-toggle') ) { 
// //       openOne.switch = true;
// //       collapseTrigger.isOpen.close();
// //       return;
// //     }
// //   };
// // };

// // ============================
// // -- Updated collapse toggle
// // ============================
// const dataToggleEvents = Array.from(document.querySelectorAll('[data-toggle="collapse"]'));

// window.addEventListener('click', (clickToggle) => {
//   const clickedElement = clickToggle.target;
//   if (dataToggleEvents.includes(clickedElement)) {
//     const selector = clickedElement.getAttribute('data-target');
//     collapse(selector, 'toggle');
//   }
// }, false);

// const toggleClassList = {
//   'toggle': 'toggle',
//   'show': 'add',
//   'hide': 'remove'
// };

// const collapse = (selector, eventName) => {
//   const targets = Array.from(document.querySelectorAll(selector));
//   targets.forEach(target => {
//     target.classList[toggleClassList[eventName]]('show');
//   });
// }

// // ============================
// // Accordion card -- expandable w Image
// // ============================
// const collAccordionCards = document.getElementsByClassName("accordion-card_collapsible");

// const buttonClickHandler = (event) => {
//   // console.log('event', event)
//   const el = event.currentTarget;
//   const controls = el.getAttribute('aria-controls');
//   const cta = el.querySelector('.accordion-card_cta');
//   const carat = el.querySelector('.accordion-card_carat');
//   const content = document.getElementById(controls);
//   el.classList.toggle('active');
//   if (content.style.display === "block") {
//     content.style.display = "none";
//     cta.innerHTML = "Read More";
//     // carat.innerHTML = "v";
//     el.setAttribute('aria-expanded', false);
//   } else {
//     content.style.display = "block";
//     cta.innerHTML = "Read Less";
//     // carat.innerHTML = "^";
//     el.setAttribute('aria-expanded', true);
//   }
// }
// Array.from(collAccordionCards).forEach((element) => {
//   //console.log(element.getAttribute('aria-controls'), 'element')
//   element.addEventListener("click", buttonClickHandler);
//   // if (element.getAttribute('aria-controls') === location.hash.substring(1)) {
//   //   buttonClickHandler(element)
//   // }
// });

// // ===================
// // 3. FORMS
// // ===================
// var SteppedForm = function(steppedForm){
//   steppedForm.steppedButtons = steppedForm.querySelectorAll('.changeStep');
//   steppedForm.steppedButtons.forEach(function(stepButton){ stepButton.onclick = changeStep; });

//   steppedForm.currentStep = steppedForm.querySelector('[aria-hidden="false"]');
  
//   function changeStep(e){
//     e.preventDefault();
//     var stepNum = parseInt(steppedForm.currentStep.dataset.step) + (e.target.dataset.stepdirection === "next" ? 1 : -1),
//         newStep = steppedForm.querySelector('[data-step="'+ stepNum +'"]');
    
//     steppedForm.currentStep.setAttribute("aria-hidden", "true");
//     newStep.setAttribute("aria-hidden", "false");
//     steppedForm.currentStep = newStep;
//   }
// };
// document.querySelectorAll('.form-stepped').forEach(function(x){ var form = new SteppedForm(x); });

// // ===================
// // 4. SCROLL ANIMATED COUNTER
// // ===================
// // function to check if counter is in view
// var isInViewport = function (elem) {

//     if (elem) {
//     var bounding = elem.getBoundingClientRect();
//     //console.log(bounding)
//     return (
//         bounding.top >= 0 &&
//         bounding.left >= 0 &&
//         bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
//         bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
//     );
//   }
// };
// // function to animate counter
// function animateValue(id, startInt, endInt, duration) {
//     // assumes integer values for start and end
//     var obj = document.getElementById(id);
//     var start = parseInt(startInt);
//     var end = parseInt(endInt);
//     var range = end - start;
//     // no timer shorter than 50ms (not really visible any way)
//     var minTimer = 1;
//     // calc step time to show all interediate values
//     var stepTime = Math.abs(Math.floor(duration / range));
//     // never go below minTimer
//     stepTime = Math.max(stepTime, minTimer);
//     // get current time and calculate desired end time
//     var startTime = new Date().getTime();
//     var endTime = startTime + duration;
//     var timer;
  
//     function run() {
//         var now = new Date().getTime();
//         var remaining = Math.max((endTime - now) / duration, 0);
//         var value = Math.round(end - (remaining * range));
//         obj.innerHTML = value;
//         if (value == end) {
//             clearInterval(timer);
//         }
//     }
    
//     timer = setInterval(run, stepTime);
//     run();
// }
// // function to get counter values
// function getCounterValues(counter) {
//   var counterStart = counter.innerHTML;
//   var counterEnd = counter.getAttribute('data-count');
//   var counterDuration = 1000;

//   animateValue(counter.id, counterStart, counterEnd, counterDuration);
// }

// var counter = document.querySelector('[data-count]');
// //console.log("counter", counter)
// window.addEventListener('scroll', function (e) {
//   if (isInViewport(counter)) {
//     getCounterValues(counter)
//   }
// })


// // =================================================================
// // 5. LAZY LOAD IMAGES  script moved to src/common-js/lazy-load.js
// // =================================================================

// // ====================
// // 6. ANIMATE ON SCROLL
// // ====================
// var ANIMATE_CLASS_NAME = 'animate';
// var HIDDEN_ELEMENT_SELECTOR = '.fade-in';

// const animate = (element) => {
//   return element.classList.add(ANIMATE_CLASS_NAME);
// };

// const isAnimated = (element) => {
//   return element.classList.contains(ANIMATE_CLASS_NAME);
// };

// var fadeInObserver = new IntersectionObserver(function (entries, observer) {
//   entries.forEach(function (entry) {
//     //if (entry.intersectionRatio > 0) {
//     if (entry.isIntersecting) {
//       //console.log("in view")
//       animate(entry.target);
//       //observer.unobserve(entry.target)
//       //if (observer.unobserve(entry.target)) {
//       //   console.log("unobserving:", entry.target)
//       //}
//       //console.log(observer.unobserve(entry.target))
//     } 
//     //observer.unobserve(entry.target);
//   });
// });


// var elementsToFadeIn = [].filter.call(document.querySelectorAll(HIDDEN_ELEMENT_SELECTOR), function (element) {
//   return !isAnimated(element, ANIMATE_CLASS_NAME);
// }); 

// elementsToFadeIn.forEach(function (element) {
//   //console.log("observing:", element)
//   return fadeInObserver.observe(element);
// });

// // ===================
// // SEARCH ELECTIVES 
// // ===================
// function searchElectives() {
//   var input = document.getElementById("electivesSearch");
//   var filter = input.value.toLowerCase();
//   var nodes = document.getElementsByClassName('electives-search-target');

//   for (i = 0; i < nodes.length; i++) {
//     if (nodes[i].innerText.toLowerCase().includes(filter)) {
//       nodes[i].style.display = "block";
//       nodes[i].parentNode.childNodes[3].style.display = "block";
//       // nodes[i].parentNode.parentNode.parentNode.firstElementChild.style.display = "block";
//     } else {
//       nodes[i].style.display = "none";
//       nodes[i].parentNode.childNodes[3].style.display = "none";
//       // nodes[i].parentNode.parentNode.parentNode.firstElementChild.style.display = "none";
//     }
//   }
// }

// // ===================
// // 7. TOOLTIPS
// // ===================
// document.querySelectorAll('[data-tooltip]').forEach(function(tooltip){
//   tooltip.onmouseover = function(a){ 
//     var b = document.getElementById(a.target.dataset.tooltip); 
//     console.log(b);
//     b.style.display = "block"; 
//   };
//   tooltip.onmouseout = function(a){ 
//     var b = document.getElementById(a.target.dataset.tooltip); 
//     console.log(b);
//     b.style.display = "none"; 
//   };
// });

// const runSetHiddenFieldValues = () => {
//   if (window.$) {
//     if (typeof setHiddenFieldValues === 'function') {
//       setHiddenFieldValues();
//     }
//   } else {
//     setTimeout(setHiddenFieldValues, 50);
//   }
// };

// runSetHiddenFieldValues();


// // ===================
// // 8. DYNAMIC FORM FIELDS
// // ===================
// // change field options on select 
// // let hiddenInputGroup = document.getElementById('preferredContactFormGroup');
// // let intTelInput = document.getElementById('int-tel-wrapper');
// // hiddenInputGroup.style.display = 'none';
// // intTelInput.style.display = 'none';

// // const preferredContactSelector = (event) => {
// //   let preferredContact = document.getElementById('preferredContact');    
// //   //preferredContact.value = event.target.value;
// //   switch (event.target.value) {
// //     case 'sms': case 'phone': case 'WhatsApp':
// //       console.log('sms or phone or WhatsApp')
// //       hiddenInputGroup.style.display = 'none';
// //       preferredContact.type = 'tel';
// //       preferredContact.name = 'phoneNumber';
// //       preferredContact.placeholder = 'Phone Number';
// //       intTelInput.style.display = 'block'
// //       break;
// //     case 'WeChat':
// //       console.log('wechat')
// //       hiddenInputGroup.style.display = 'block';
// //       intTelInput.style.display = 'none';
// //       preferredContact.type = 'text';
// //       preferredContact.name = 'weChatID';
// //       preferredContact.placeholder = 'WeChat ID';
// //       break;
// //     case 'video': case 'email':
// //       console.log('video or email')
// //       intTelInput.style.display = 'none';
// //       hiddenInputGroup.style.display = 'none';
// //       break;
// //     default:
// //       // default 
// //       hiddenInputGroup.style.display = 'block'; 
// //       preferredContact.value = event.target.value;
// //     }
// // }
//   