const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles =
  document.querySelectorAll(".circle"); /*bütün circles class'larını seçer. */

let currentActive = 1;

next.addEventListener("click", function () {
  currentActive++; // butona her tıklandığında değeri 1 artacak

  if (currentActive > circles.length) {
    currentActive =
      circles.length; /*en son circles.length'i yazdırır, daha fazla yazdırmaz. */
  }

  update();
});

prev.addEventListener("click", () => {
  currentActive--;

  if (currentActive < 1) {
    currentActive = 1;
  }
  update();
});

function update() {
  circles.forEach((circle, index) => {
    if (index < currentActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });
  // butona her tıklandığında diğer halkanın renklenmesi işlemi

  const actives = document.querySelectorAll(".active");

  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + ` % `;

  if (currentActive == 1) {
    prev.disabled = true;
  } else if (currentActive === circles.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
}
