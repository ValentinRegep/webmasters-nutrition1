'use strict';



/**
 * addEvent on element
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}



/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const navbarToggler = document.querySelector("[data-nav-toggler]");

const toggleNav = function () {
  navbar.classList.toggle("active");
  navbarToggler.classList.toggle("active");
}

addEventOnElem(navbarToggler, "click", toggleNav);

const closeNav = function () {
  navbar.classList.remove("active");
  navbarToggler.classList.remove("active");
}

addEventOnElem(navbarLinks, "click", closeNav);



/**
 * header active
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});

const button = document.getElementById('calculate');

button.addEventListener('click', function () {
  let height = document.querySelector('#height').value;
  let weight = document.querySelector('#weight').value;

  if (height == '' || weight == '') {
    alert('Va rog sa completati toate campurile!')
    return;
  }

  // BMI = weight in KG / (height in m * height in m)

  height = height / 100;

  let BMI = (weight / (height * height));

  BMI = BMI.toFixed(2);

  document.querySelector('#result').innerHTML = BMI;
  
  let status = '';

  if (BMI < 18.5) {
    status = "Subponderal"
  }
  if (BMI >=18.5 && BMI < 25) {
    status = "Sanatos";
  }
  if (BMI >=25 && BMI < 30) {
    status = "Supraponderal";
  }
  if (BMI >= 30) {
    status = "Obez";
  }

  document.querySelector('.comment').innerHTML = `Observatie: esti <span id="comment">${status}.</span>`;

});