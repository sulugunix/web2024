// document.addEventListener('DOMContentLoaded', () => {
//     console.log(document.getElementById('test-id'))
// })

const menuIcon = document.querySelector(".menu-icon");
const header = document.querySelector("header");

menuIcon.addEventListener("click", () => {
    menuIcon.classList.toggle("menu-icon--active");
    header.classList.toggle("header--mobile");
})

const faqIcons = document.querySelectorAll(".faq-icon");
const texts = document.querySelectorAll(".faq-text");

for (let i = 0; i < faqIcons.length; i++) {
    faqIcons[i].addEventListener("click", () => {
        faqIcons[i].classList.toggle("faq-icon--active");
        for (let j = 0; j < texts.length; j++) {
            if (i == j) {
                if (texts[j].classList.contains("hidden")) {
                    texts[j].classList.remove("hidden");
                }
                else {
                    texts[j].classList.add("hidden");
                }
            }
        }
    })
}