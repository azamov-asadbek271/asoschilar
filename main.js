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
// Matn elementlarini olish
const scrollTexts = document.querySelectorAll(".animatsiya");

// Scroll hodisasi bo'yicha funktsiya
function checkScroll() {
  const windowHeight = window.innerHeight;
  scrollTexts.forEach(text => {
    const textPosition = text.getBoundingClientRect().top; // Ekran bilan nisbatan elementning joylashuvi
    if (textPosition < windowHeight - 100) { // 100px margin
      text.classList.add('show-text');
      text.classList.remove('hide-text');
    } else {
      text.classList.add('hide-text');
      text.classList.remove('show-text');
    }
  });
}

// Scrollni tekshirish
window.addEventListener('scroll', checkScroll);

// Boshlang'ich holatda scroll tekshiruvi
checkScroll();
