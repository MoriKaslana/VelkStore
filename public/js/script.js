window.addEventListener("load", function () {
  this.setTimeout(function open(event) {
    document.querySelector(".container").style.display = "block";
  }, 500);
});

document.querySelector("#close").addEventListener("click", function () {
  document.querySelector(".container").style.display = "none";
});
