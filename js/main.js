const openModal = document.getElementById("modal_open_menu");
const closeModal = document.getElementById("modal_close_icon");
const modal = document.getElementById("modal");

openModal.addEventListener("click", () => {
  modal.classList.add("open_modal_left");
});
closeModal.addEventListener("click", () => {
  modal.classList.remove("open_modal_left");
});

// Animatsiya uchun

// const scrollTexts = document.querySelectorAll(".animatsiya");

// function checkScroll() {
//   const windowHeight = window.innerHeight;
//   console.log(windowHeight);
//   scrollTexts.forEach((text) => {
//     console.log(text);
//     const textPosition = text.getBoundingClientRect().top;
//     if (textPosition < windowHeight - 10) {
//       text.classList.add("show-text");
//       text.classList.remove("hide-text");
//     } else {
//       text.classList.add("hide-text");
//       text.classList.remove("show-text");
//     }
//   });
// }

// window.addEventListener("scroll", checkScroll);

// checkScroll();

// //  animatsiya bottom-left

// const animatedItems = document.querySelectorAll(".animatsiya-left-bottom");

// function handleScrollEvent() {
//   const viewportHeight = window.innerHeight;

//   animatedItems.forEach((item) => {
//     const itemPosition = item.getBoundingClientRect().top;

//     if (itemPosition < viewportHeight - 40) {
//       item.classList.add("left-bottom-visible");
//       item.classList.remove("left-bottom-hidden");
//     } else {
//       item.classList.add("left-bottom-hidden");
//       item.classList.remove("left-bottom-visible");
//     }
//   });
// }

// window.addEventListener("scroll", handleScrollEvent);

// handleScrollEvent();
