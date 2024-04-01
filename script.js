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

//cookie message (have to create new element)
const cookieMessage = document.createElement("div");
cookieMessage.classList.add("cookie-message");
cookieMessage.innerHTML =
  'We use cookies to improve our website.<button class="btn btn--close-cookie">Got it!</button>';
//insert element into DOM by appending onto header
const header = document.querySelector(".header");
header.prepend(cookieMessage);
header.before(cookieMessage);

//remove element once Got it btn has been clicked
document.querySelector(".btn--close-cookie").addEventListener("click", () => {
  cookieMessage.remove();
});
