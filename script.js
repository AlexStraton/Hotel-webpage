"use strict";

function preventDefaultHandler(e) {
  e.preventDefault();
}

const navigation = document.querySelector(".navigation");
const threeLines = document.querySelector(".menu-icon");

threeLines.addEventListener("click", () => {
  navigation.classList.remove("hidden");
});

threeLines.addEventListener("mouseover", () => {
  navigation.classList.remove("hidden");
});

navigation.addEventListener("mouseover", () => {
  navigation.classList.remove("hidden"); // Remove the 'hidden' class on hover
});

navigation.addEventListener("mouseout", () => {
  navigation.classList.add("hidden"); // Add the 'hidden' class when mouse leaves
});
