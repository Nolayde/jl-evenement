/* ================================================
   JLEvenement — main.js
   Burger menu mobile
================================================ */

(function() {
  'use strict';

  var burger = document.getElementById('burger');
  var menuMobile = document.getElementById('menu-mobile');

  if (burger && menuMobile) {
    burger.addEventListener('click', function() {
      burger.classList.toggle('active');
      menuMobile.classList.toggle('active');
      var isOpen = burger.classList.contains('active');
      burger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    menuMobile.querySelectorAll('a').forEach(function(link) {
      link.addEventListener('click', function() {
        burger.classList.remove('active');
        menuMobile.classList.remove('active');
        document.body.style.overflow = '';
      });
    });
  }

})();