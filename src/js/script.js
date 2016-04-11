/* Declare global variable and set initial state */
var menuState = false;

  /* Shows or hides menu when toggled */
  function menuToggle() {
    var menu = document.getElementById("menu");

    if (menuState)
        menu.style.maxHeight = "0";
    else {
        menu.style["transition"] = "max-height 0.5s ease-in-out";
        menu.style.maxHeight = "500px";
    }
    menuState = !menuState;
  }

  /* Checks screen media and unhides menu items if greater than 651px */
  function checkMedia() {
    var mq = window.matchMedia("(min-width: 651px");
    var menu = document.getElementById("menu");

    mq.matches ? menu.style.maxHeight = "500px" : menu.style.maxHeight = "0";
  }
