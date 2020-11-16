"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");

// Close modal function
const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

// Show modal function
const openModal = function () {
  // accessing classList | using remove() method provided by the DOMTokenList | Removing hidden class
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

// Adding Event Listener to elements using for loop
for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener("click", openModal);

// Adding open and close modal events
btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

/*
  keyboard events are global events and are not on one specific element
  we have to add the event a different way

  adding an event listener on the document will
  listen for the event everywhere
  
  KEYBOARD EVENTS
  keydown | keypress | keyup

  Getting the "Esc" key's code using the event object
  <event>.key = "Escape";
  closing modal
*/
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
