let menubtn = document.querySelector(".menu_btn");
let closebtn = document.querySelector(".close_btn");
let panel = document.querySelector(".panel");

menubtn.addEventListener("click", () => {
  panel.classList.toggle("open");
  event.stopPropagation();
});

closebtn.addEventListener("click", () => {
  panel.classList.remove("open");
});

document.addEventListener("keyup", function (event) {
  if (event.key === 'Escape') {
    if (panel.classList.contains('open')) {
      panel.classList.remove("open");
    }
  }
});

window.addEventListener("click", function (event) {
  if (event.target != panel && event.target.parentNode != panel) {
    panel.classList.remove("open");
  }
});  