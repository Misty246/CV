document.querySelectorAll(".more-btn").forEach(button => {
  button.addEventListener("click", () => {
    const card = button.closest(".timeline-content");
    card.classList.toggle("active");

    const currentLang = localStorage.getItem("lang") || "fr";
    const span = button.querySelector("span");
    if (card.classList.contains("active")) {
      span.textContent = translations[currentLang].reduce_button_text;
    } else {
      span.textContent = translations[currentLang].more_button_text;
    }
  });
});
