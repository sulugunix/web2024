// document.addEventListener('DOMContentLoaded', () => {
//     console.log(document.getElementById('test-id'))
// })

const menuIcon = document.querySelector(".menu-icon");
const header = document.querySelector("header");

menuIcon.addEventListener("click", () => {
    menuIcon.classList.toggle("menu-icon--active");
    header.classList.toggle("header--mobile");
})