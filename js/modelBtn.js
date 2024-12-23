document.getElementById("model-box").classList.add("hidden");
function popup() {
  document.getElementById("model-box").classList.remove("hidden");
}

document.getElementById("modelclose").addEventListener("click", function () {
  document.getElementById("model-box").classList.add("hidden");
  console.log('hello');
});
