"use strict";

// ###############################################################
// ##                       Ch - 1                              ##
// ###############################################################

function enableShiftClick(inboxContainer) {
  let lastChecked = null; // Stays in the function's scope

  inboxContainer.addEventListener("click", function (e) {
    // 1. Only run if a checkbox was clicked
    if (!e.target.matches('input[type="checkbox"]')) {
      return;
    }

    const checkboxes = inboxContainer.querySelectorAll(
      'input[type="checkbox"]'
    );
    const currentCheckbox = e.target;
    console.log(currentCheckbox);

    // 2. Check if shift is held AND there was a previous click
    if (e.shiftKey && lastChecked) {
      let inBetween = false;

      // 3. Loop over all checkboxes
      checkboxes.forEach((checkbox) => {
        // Find the start/end of the range
        if (checkbox === currentCheckbox || checkbox === lastChecked) {
          inBetween = !inBetween;
        }

        // 4. Set the state of all 'in-between' checkboxes
        if (inBetween) {
          // This is the critical fix:
          // Set it to the *same state* as the one being clicked
          checkbox.checked = currentCheckbox.checked;
        }
      });
    }

    // 5. Update the 'lastChecked' for the next click
    lastChecked = currentCheckbox;
  });
}

// How to use it:
// const inbox = document.querySelector(".inbox");
// enableShiftClick(inbox);

// ###############################################################
// ##                       Ch - 2                              ##
// ###############################################################

// Ch - 2
const modal = document.getElementById("modal");

function initModal() {
  document.addEventListener("click", function (e) {
    if (e.target.matches("#open-btn")) {
      modal.classList.remove("hidden");
    }

    if (e.target.matches("#close-btn")) {
      modal.classList.add("hidden");
    }

    if (e.target === modal) {
      modal.classList.add("hidden");
    }
  });
}

// initModal();

// ###############################################################
// ##                       Ch - 3                              ##
// ###############################################################

function initFilter(input, list) {
  // 1. Cache the lower-cased input *once* before the loop.
  const filter = input.toLowerCase();

  list.forEach((item) => {
    const itemText = item.textContent.toLowerCase();

    // 2. Use the cached 'filter' variable for comparison.
    if (itemText.includes(filter)) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}

// const filterInput = document.getElementById("filter-input");
// const listItems = document.querySelectorAll("#data-list li");

// filterInput.addEventListener("keyup", function (e) {
//   initFilter(e.target.value, listItems);
// });

// ###############################################################
// ##                       Ch - 4 "Konami Code"                ##
// ###############################################################

document.body.addEventListener("keydown", function (e) {
  const accessStr = [
    "ArrowUp",
    "ArrowUp",
    "ArrowDown",
    "ArrowDown",
    "ArrowLeft",
    "ArrowRight",
    "ArrowLeft",
    "ArrowRight",
    "b",
    "a",
  ];

  if (e.key === accessStr[0]) {
    let count = 0;
    check(count);
  }
});

function check(i) {
  console.log(i);
}
