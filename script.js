let faBars = document.querySelector(".fa-bars");
let faTimes = document.querySelector(".fa-times");
let navbar = document.querySelector(".navbarA ul");



faBars.addEventListener("click", ()=>{
 faBars.style.display = "none";
 faTimes.style.display = "block";
 navbar.style.transform = "scaleX(1)";

})

faTimes.addEventListener("click", () => {
 faBars.style.display = "block";
 faTimes.style.display = "none";
 navbar.style.transform = "scaleX(0)";

})