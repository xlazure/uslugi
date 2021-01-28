"use strict";

function HamburgerMenu() {
  var dropDownMenu = document.querySelector('.drop-downMenu');
  var menu = document.querySelector('.hambmenu');
  menu.addEventListener('click', function () {
    if (dropDownMenu.style.left == '0vw') dropDownMenu.style.left = '-100vw';else dropDownMenu.style.left = '0vw';
  });
  dropDownMenu.addEventListener('click', function () {
    dropDownMenu.style.left = '-100vw';
  });
}

window.addEventListener('DOMContentLoaded', function () {
  HamburgerMenu();
});