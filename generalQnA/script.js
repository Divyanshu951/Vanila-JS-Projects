const data = [
  {
    question: "do you accept all major credit cards?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est dolore illo dolores quia nemo doloribus quaerat, magni numquam repellat reprehenderit.",
  },

  {
    question: "do you suppport local farmers?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est dolore illo dolores quia nemo doloribus quaerat, magni numquam repellat reprehenderit.",
  },

  {
    question: "do you use organic ingredients?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est dolore illo dolores quia nemo doloribus quaerat, magni numquam repellat reprehenderit.",
  },
];

let answerIndex = null;

const questionsContainer = document.querySelector(".question-container");

questionsContainer.addEventListener("click", function (e) {
  console.log(e);
});
