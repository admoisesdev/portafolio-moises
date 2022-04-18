/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/helpers/app.js
var $menuBtn = document.querySelector('.menu-btn');
var $menu = document.querySelector('.menu');
function hamburguerMenu() {
  $menuBtn.addEventListener('click', function (e) {
    $menuBtn.firstElementChild.classList.toggle('none');
    $menuBtn.lastElementChild.classList.toggle('none');
    $menu.classList.toggle('is-active');
  });
  document.addEventListener('click', function (e) {
    if (e.target.matches('.menu a')) {
      $menuBtn.firstElementChild.classList.remove('none');
      $menuBtn.lastElementChild.classList.add('none');
      $menu.classList.remove('is-active');
    }
  });
}
function contactForm() {
  var $form = document.querySelector('.contact-form'),
      $loader = document.querySelector('.loader'),
      $response = document.querySelector('.contact-form-response');
  $form.addEventListener("submit", function (e) {
    e.preventDefault();
    $loader.classList.remove('none');
    fetch("https://formsubmit.co/ajax/moi.prado20@gmail.com", {
      method: "POST",
      //* El objeto FormData envía el formulario(el elemento que origina el evento) al servidor(la API)
      body: new FormData(e.target)
    }).then(function (res) {
      return res.ok ? res.json : Promise.reject(res);
    }).then(function (json) {
      console.log(json);
      $loader.classList.remove('none');
      location.hash = "#gracias";
      $form.reset();
    })["catch"](function (err) {
      console.log(err);
      var message = err.statusText || "Ocurrió un error al enviar, intenta nuevamente";
      $response.querySelector('h3').innerHTML = "Error ".concat(err.status, ": ").concat(message);
    })["finally"](function () {
      $loader.classList.add('none');
      setTimeout(function () {
        location.hash = "#close";
      }, 3000);
    });
  });
}
;// CONCATENATED MODULE: ./src/index.js



document.addEventListener('DOMContentLoaded', function () {
  hamburguerMenu();
  contactForm();
});
/******/ })()
;