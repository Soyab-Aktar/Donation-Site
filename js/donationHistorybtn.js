document
  .getElementById("history-feature-btn")
  .addEventListener("click", function () {
    pageChange("history-page");
    colorChange("donation-feature-btn");
    colorReset("history-feature-btn");
  });
document
  .getElementById("donation-feature-btn")
  .addEventListener("click", function () {
    pageChange("donation-page");
    colorChange("history-feature-btn");
    colorReset("donation-feature-btn");
  });
