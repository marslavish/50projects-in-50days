const cards = Array.from(document.querySelectorAll(".card"));
const cardClasses = ["card-1", "card-2", "card-3", "card-4", "card-5"];

cards.forEach((card) => {
  card.addEventListener("click", (e) => {
    const expandedCard = cards.filter((el) => el.classList.contains("expand"))[0];
    const curCardClass = e.target.classList[1];
    if (curCardClass !== expandedCard.classList[1] && cardClasses.includes(curCardClass)) {
      expandedCard.classList.remove("expand");
      expandedCard.classList.add("collapse");
      e.target.classList.contains("collapse") && e.target.classList.remove("collapse");
      e.target.classList.add("expand");
    }
  });
});
