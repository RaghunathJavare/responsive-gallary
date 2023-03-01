"use strict";

// Select Elements
const btnHelp = document.querySelector(".btn-help");
const btnBack = document.querySelector(".btn-back");
const imgDice = document.querySelector(".game-img");

btnBack.classList.add("hidden");
console.log(btnHelp);

btnHelp.addEventListener("click", function () {
  imgDice.src = "images/background-1.jpg";
  btnBack.classList.remove("hidden");
});

btnBack.addEventListener("click", function () {
  imgDice.src = "images/my-game-img.png";
  btnBack.classList.add("hidden");
});

