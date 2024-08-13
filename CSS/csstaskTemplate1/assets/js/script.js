const openBtn = document.querySelector(".menu-bar");
const closeBtn = document.querySelector("#closeBtn");
const resNavbar = document.querySelector(".res-navbar");

closeBtn.addEventListener("click", () => {
  resNavbar.style.display = "none";
});
// window.addEventListener('scroll', () => {
//    resNavbar.style.display='none'
//   });
openBtn.addEventListener("click", () => {
  resNavbar.style.display = "flex";
});
