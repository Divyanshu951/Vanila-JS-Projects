document
  .querySelector(".flex-direction-properties")
  .addEventListener("click", function (e) {
    const direction = e.target.dataset.directionProperty;

    // 👉 Clicked somewhere else → do nothing
    if (!direction) return;

    document.querySelector(
      ".flex-direction-demo-container"
    ).style.flexDirection = direction;
  });

document.querySelector(".jccbtns").addEventListener("click", function (e) {
  const property = e.target.dataset.jcbtn;
  document.querySelector(".jcc-container").style.justifyContent = property;
});

document.querySelector(".aicbtn").addEventListener("click", function (e) {
  const property = e.target.dataset.aicbtn;
  document.querySelector(".ai-container").style.alignItems = property;
});

document.querySelector(".acbtns").addEventListener("click", function (e) {
  document.querySelector(".ac-container").style.alignContent =
    e.target.dataset.acbtn;
});
