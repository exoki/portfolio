/* Declare global variable and set initial state */
var menuState = false;

  function menuToggle() {
    var menu = document.getElementById("menu");

    if (menuState)
        menu.style.maxHeight = "0";
    else {
        menu.style['transition'] = 'max-height 0.5s ease-in-out';
        menu.style.maxHeight = "500px";
    }
    menuState = !menuState;
  }

  function checkMedia() {
    var mq = window.matchMedia("(min-width: 641px");
    var menu = document.getElementById("menu");

    mq.matches ? menu.style.maxHeight = "500px" : menu.style.maxHeight = "0";
  }
