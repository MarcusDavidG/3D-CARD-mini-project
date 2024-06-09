function toggleFlip(card) {
  const cardInner = card.querySelector(".card-inner");
  cardInner.classList.toggle("flipped");
}

// Adding class for flip effect
document.querySelectorAll(".card-inner").forEach((cardInner) => {
  cardInner.addEventListener("transitionend", () => {
    if (cardInner.classList.contains("flipped")) {
      cardInner.style.transform = "rotateY(180deg)";
    } else {
      cardInner.style.transform = "rotateY(0deg)";
    }
  });
});
