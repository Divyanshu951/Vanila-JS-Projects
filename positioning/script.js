const counter = document.getElementById("counter");
const incrementBtn = document.getElementById("increment-btn");
const rangeTop = document.getElementById("range-top");
const anotherBox = document.querySelector(".another-box");

let count = 0;

incrementBtn.addEventListener("click", function () {
  counter.textContent = ++count;
});

rangeTop.addEventListener("change", function () {
  anotherBox.style.top = `${rangeTop.value * 17}px`;
});

let checkTranslate = true;

document
  .querySelector(".transalate-btn")
  .addEventListener("click", function () {
    if (checkTranslate) {
      document.querySelector(".box-translate").style.transform =
        "translate(100px, -100px)";
      checkTranslate = false;
    } else {
      document.querySelector(".box-translate").style.transform =
        "translate(0, 0)";
      checkTranslate = true;
    }
  });

let deg = 0;

document.querySelector(".rotate-btn").addEventListener("click", function () {
  deg = (deg + 30) % 360;
  document.querySelector(
    ".box-translate"
  ).style.transform = `rotate(${deg}deg)`;
  checkTranslate = false;
});

document.querySelector(".scale-btn").addEventListener("click", function () {
  document.querySelector(".box-translate").style.transform = `scale(2)`;
  checkTranslate = false;
});

// --- Transform Origin Logic ---
const originBox = document.getElementById("origin-box");
const originText = document.getElementById("origin-text");
const pivotDot = document.getElementById("pivot-dot");

let isCenter = true;

originBox.addEventListener("click", function () {
  if (isCenter) {
    // Switch to Top Left
    originBox.style.transformOrigin = "top left";
    pivotDot.className = "pivot-dot top-left";
    originText.textContent = "top left";
  } else {
    // Switch to Center
    originBox.style.transformOrigin = "center";
    pivotDot.className = "pivot-dot center";
    originText.textContent = "center";
  }
  isCenter = !isCenter;
});
