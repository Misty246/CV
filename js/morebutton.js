document.querySelectorAll(".more-btn").forEach(button => {
  button.addEventListener("click", () => {
    const card = button.closest(".timeline-content");
    card.classList.toggle("active");

    if (card.classList.contains("active")) {
      button.textContent = "Réduire";
    } else {
      button.textContent = "En savoir plus";
    }
  });
});
