// Challenge 6: The "Star Rating" Widget
// Topics: Click Events, Event Listeners (mouseover, mouseout), CSS Classes, dataset

// Assumed DOM: A div.star-rating containing 5 span.star elements, each with a data-value="1", data-value="2", etc.

// Problem: Write initStarRating(widget). Use delegation.

// Click: When a star is clicked, all stars up to that star (including itself) get a .filled class. Stars after it lose the .filled class.

// Hover: On mouseover, show a "preview" by adding a .preview class to all stars up to the hovered one. On mouseout, remove all .preview classes (to restore the "clicked" state).

// function initStarRating(widget) {
//   let currStarPoint = 0;
//   const allStars = widget.querySelectorAll(".star");

//   widget.addEventListener("mouseover", function (e) {
//     const mouseOverStarts = Number(e.target.dataset.value);
//     updateStars(mouseOverStarts);
//   });

//   widget.addEventListener("mouseout", function () {
//     updateStars(currStarPoint);
//   });

//   widget.addEventListener("click", function (e) {
//     currStarPoint = Number(e.target.dataset.value);
//     updateStars(currStarPoint);
//   });

//   function updateStars(stars) {
//     allStars.forEach((ele) => ele.classList.remove("preview"));

//     for (let i = 0; i < stars; i++) {
//       allStars[i].classList.add("preview");
//     }
//   }
// }

function initStarRating(widget) {
  let currentRating = 0;
  // 1. Scope to the specific widget
  const stars = widget.querySelectorAll(".star");

  function highlight(count, className) {
    stars.forEach((star) => {
      // Clean up both classes to be safe
      star.classList.remove("filled", "preview");
      if (star.dataset.value <= count) {
        star.classList.add(className);
      }
    });
  }

  widget.addEventListener("mouseover", (e) => {
    // 2. Safety Check
    if (!e.target.matches(".star")) return;
    highlight(e.target.dataset.value, "preview");
  });

  widget.addEventListener("mouseout", () => {
    // Restore the "filled" state based on currentRating
    highlight(currentRating, "filled");
  });

  widget.addEventListener("click", (e) => {
    if (!e.target.matches(".star")) return;
    currentRating = e.target.dataset.value;
    highlight(currentRating, "filled");
  });
}

const widget = document.querySelector(".star-rating");
initStarRating(widget);
