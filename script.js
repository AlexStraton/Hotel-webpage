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

navigation.addEventListener("mouseleave", () => {
  navigation.classList.add("hidden"); // Add the 'hidden' class when mouse leaves
});

//scroll to about us section
const enterBtn = document.querySelector(".check-it-out-btn");
const aboutUsSection = document.querySelector(".about-us");
const readMoreBtn = document.querySelector(".about-us-btn");
const roomsSection = document.querySelector(".about-us-btn");
enterBtn.addEventListener("click", function (e) {
  aboutUsSection.scrollIntoView({ behavior: "smooth" });
  this.style.backgroundColor = "#ae6532";
  setTimeout(() => {
    this.style.backgroundColor = "";
  }, 1000);
});

//color changes for 1 sec when btn is clicked
readMoreBtn.addEventListener("click", function (e) {
  roomsSection.scrollIntoView({ behavior: "smooth" });
  this.style.backgroundColor = "#ae6532";
  setTimeout(() => {
    this.style.backgroundColor = "";
  }, 1000);
});

//btn change color when clicked
