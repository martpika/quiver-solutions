import {Observer} from "./util/utility.js";

// Triggers
if (window.innerWidth <= 1000) {
    const dropIcons = document.querySelectorAll("[data-display=none]");
    dropIcons.forEach(drop => {
        drop.addEventListener("click", (e) => {
            e.target.classList.toggle("d-none");
        });
    })
}


const hamburger = document.querySelectorAll("[data-toggle=hamburger]");

hamburger.forEach(item => {
    item.addEventListener("click", function () {
        const navbar = document.querySelector("#navbar");
        navbar.classList.toggle("slide-nav");
    });
});


const bottomnav = document.querySelector(".bottomnav");

function stickyNav(entry, observer) {
    entry.forEach(item => {
        if (item.boundingClientRect.y <= 0) {
            bottomnav.classList.add("nav-sticky");
        } else {
            bottomnav.classList.remove("nav-sticky");
        }
    })
}

const options = {
    threshold: 1
}
const navBar = new IntersectionObserver(stickyNav, options);
navBar.observe(bottomnav);
