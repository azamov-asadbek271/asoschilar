const openModal = document.getElementById("modal_open_menu");
const closeModal = document.getElementById("modal_close_icon");
const modal = document.getElementById("modal");

openModal.addEventListener("click", () => {
  modal.classList.add("open_modal_left");
});
closeModal.addEventListener("click", () => {
  modal.classList.remove("open_modal_left");
});