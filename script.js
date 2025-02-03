let navMenu = document.querySelector(".nav-list");
let menu = document.querySelector("#hide");

menu.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

window.onscroll = () => {
  navMenu.classList.remove("active");
};
