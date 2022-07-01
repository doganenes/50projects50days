const search = document.querySelector(".search");
const btn = document.querySelector(".search");
const input = document.querySelector(".input");

btn.addEventListener("click", () => {
  search.classList.toggle("active"); // toggle ile add-remove eklemeden çalışırız. ilk tıklamada add() gibi ikinci tıklamada remove() gibi davranır.

  input.focus();
});
