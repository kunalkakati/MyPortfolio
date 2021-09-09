const hamburger = document.querySelector(".hum__btn");
const icon = document.querySelector(".hum__btn i");
const navLinks = document.querySelector(".links");
const links = document.querySelectorAll(".links li");
const copyText = document.querySelector(".gmail");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  setTimeout(()=>{
    icon.classList.toggle("fa-times");
  },500);
});



