"use strict";

var slide = document.querySelector('.slider');
var slideSize = document.querySelectorAll('.slider img');
var slideDown = document.querySelector('.start-btn');
var html = document.getElementsByTagName("html");
var Page1 = slideSize[0].clientHeight;
var size = slideSize[0].clientWidth;
var counter = 0;

function slider() {
  var timer, i, currentSlide;
  return regeneratorRuntime.async(function slider$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          timer = function timer(ms) {
            return new Promise(function (res) {
              return setTimeout(res, ms);
            });
          };

          i = 0;

        case 2:
          if (!(i < 5)) {
            _context.next = 19;
            break;
          }

          currentSlide = -size * i;

          if (!(i == 4)) {
            _context.next = 12;
            break;
          }

          i = 0;
          currentSlide = 0;
          slide.style = "\n            transform: translateX(".concat(currentSlide, "px);\n            transition: 0s;\n            ");
          _context.next = 10;
          return regeneratorRuntime.awrap(timer(8000));

        case 10:
          _context.next = 13;
          break;

        case 12:
          slide.style = "\n        transform: translateX(".concat(currentSlide, "px);\n        transition: 3s ease-in-out;\n        ");

        case 13:
          _context.next = 15;
          return regeneratorRuntime.awrap(timer(8000));

        case 15:
          counter++;

        case 16:
          i++;
          _context.next = 2;
          break;

        case 19:
        case "end":
          return _context.stop();
      }
    }
  });
}

window.addEventListener('scroll', function () {
  var scrollTop = window.scrollY;
  var docHeight = document.body.offsetHeight;
  var winHeight = window.innerHeight;
  var scrollPercent = scrollTop / (docHeight - winHeight);
  var scrollPercentRounded = Math.round(scrollPercent * 100);
  console.log(scrollPercentRounded);

  if (scrollPercentRounded > 20) {
    html.style = 'scrollbar-width: scroll';
  }
});

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
  var WinWidth = window.innerWidth;
  if (WinWidth > 1024) slider();
  HamburgerMenu();
});
slideDown.addEventListener('click', function () {
  window.scrollTo(0, Page1);
});