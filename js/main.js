const openModal = document.getElementById("modal_open_menu");
const closeModal = document.getElementById("modal_close_icon");
const modal = document.getElementById("modal");

openModal.addEventListener("click", () => {
  modal.classList.add("open_modal_left");
});
closeModal.addEventListener("click", () => {
  modal.classList.remove("open_modal_left");
});

// VALIDATOR
const forms = document.querySelectorAll(".myForm");

forms.forEach((form) => {
  const nameInput = form.querySelector(".name");
  const phoneInput = form.querySelector(".phone");
  const nameError = form.querySelector(".nameError");
  const phoneError = form.querySelector(".phoneError");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const cleanedPhone = phoneInput.value.replace(/\s+/g, "");
    const regex = /^\+?[0-9]{10,20}$/;
    let isValid = true;

    // Name validation
    if (!nameInput.value.match(/^[a-zA-Z ]{3,30}$/)) {
      nameError.classList.remove("hidden");
      isValid = false;
    } else {
      nameError.classList.add("hidden");
    }

    // Phone validation
    if (!regex.test(cleanedPhone)) {
      phoneError.classList.remove("hidden");
      isValid = false;
    } else {
      phoneError.classList.add("hidden");
    }

    // If all inputs are valid
    if (isValid) {
      alert("Forma yuborildi!");
      phoneInput.value = "+998";
      nameInput.value = "";
    }
  });
});
