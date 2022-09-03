var dropDown = document.querySelector(".hamb")
var navList = document.querySelector(".nav-list")
var links = document.querySelector(".nav-list li")

dropDown.addEventListener("click", function() {
    this.classList.toggle("click");
    navList.classList.toggle("open");
});